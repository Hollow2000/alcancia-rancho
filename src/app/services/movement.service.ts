import { inject, Injectable, Signal, signal } from '@angular/core';
import { DocumentReference, Firestore, Timestamp, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { enviroment } from '../env/enviroment';
import { Saving } from './saving.service';

export interface MovementDTO {
  id: string;
  cantidad: number;
  tipo: TypeMovementEnum,
  descripcion: string,
  fecha: Timestamp,
  familiar: string,
  idAhorros: string
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

export interface FilterDropdown {
  id: string,
  nombre: string,
}

const PATH = 'movimientos';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  private readonly _firestore = inject(Firestore);
  private readonly _collectionRef = collection(this._firestore, PATH);

  private movements$ = signal<Movement[]>([]);

  mockMovements = signal<Movement[]>([
    {
      id: '122t4f5g4q3',
      cantidad: 100,
      descripcion: "Primer ahorro",
      familiar: "Saul Moedano",
      fecha: "10 de enero de 2025",
      idAhorros: "5Z3RBEfu05n1EA8DBtO1",
      tipo: TypeMovementEnum.into
    },
    {
      id: 'hq45tbrt435',
      cantidad: 2500,
      descripcion: "asmdñamsñm amsldmñamsd ñasmdñ malsd",
      familiar: "Saul Emmanuel Moedano Miguel",
      fecha: "10 de enero de 2025",
      idAhorros: "5Z3RBEfu05n1EA8DBtO1",
      tipo: TypeMovementEnum.into
    },
    {
      id: 'qa3hbe534t',
      cantidad: 2300,
      descripcion: "Retiro para el marco de la puerta",
      familiar: "Saul Moedano",
      fecha: "10 de enero de 2025",
      idAhorros: "5Z3RBEfu05n1EA8DBtO1",
      tipo: TypeMovementEnum.out
    }
  ]);

  getMovement(filterSaving?: Saving | undefined, filterType?: FilterDropdown | undefined): Signal<Movement[]> {
    if (enviroment.mockUp) {return this.mockMovements;}
    
    let document;
    if (filterSaving && filterType){
      const q = query(
        this._collectionRef, 
        where('idAhorros', '==', filterSaving.id),
        where('tipo', '==', filterType.id)
      );
      document = collectionData(q, { idField: 'id' }) as Observable<MovementDTO[]>;
    } else if (filterType){
      const q = query(this._collectionRef, where('tipo', '==', filterType.id));
      document = collectionData(q, { idField: 'id' }) as Observable<MovementDTO[]>;
    } else if (filterSaving){
      const q = query(this._collectionRef, where('idAhorros', '==', filterSaving.id));
      document = collectionData(q, { idField: 'id' }) as Observable<MovementDTO[]>;
    } else {
      document = collectionData(this._collectionRef, { idField: 'id' }) as Observable<MovementDTO[]>;
    }
    
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
            idAhorros: dto.idAhorros
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
