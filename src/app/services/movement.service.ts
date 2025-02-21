import { inject, Injectable, Signal, signal } from '@angular/core';
import { DocumentReference, Firestore, Timestamp, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface MovementDTO {
  id: string;
  cantidad: number;
  tipo: TypeMovementEnum,
  descripcion: string,
  fecha: Timestamp,
  familiar: string,
  idAhorros: DocumentReference
}

export interface Movement {
  id: string;
  cantidad: number;
  tipo: TypeMovementEnum,
  descripcion: string,
  fecha: string,
  familiar: string,
  idAhorros: string
}

export type NewMovement = Omit<MovementDTO, 'id'>;

export enum TypeMovementEnum {
  into = 'deposito',
  out = 'retiro'
}

const PATH = 'movimientos';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  private readonly _firestore = inject(Firestore);
  private readonly _collectionRef = collection(this._firestore, PATH);

  private movements$ = signal<Movement[]>([]);

  getMovement(): Signal<Movement[]> {
    const document = collectionData(this._collectionRef, { idField: 'id' }) as Observable<MovementDTO[]>;
    
    document.subscribe({
      next: (data) => {
        this.movements$.set(
          data.map((dto) => ({
            id: dto.id,
            cantidad: dto.cantidad,
            tipo: dto.tipo,
            descripcion: dto.descripcion,
            fecha: dto.fecha.toDate().toLocaleDateString('es-ES', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            }),
            familiar: dto.familiar,  // Obtener el ID del DocumentReference
            idAhorros: dto.idAhorros.id
          }))
        );
      },
      error: (err) => {
        console.error('Error al obtener la colección: ', err);
      }
    });

    return this.movements$;
  }
}
