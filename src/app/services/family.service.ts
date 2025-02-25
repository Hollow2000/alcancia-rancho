import { inject, Injectable, Signal, signal } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { enviroment } from '../env/enviroment';

export interface Family {
  nombres: string,
  apellidos: string,
  foto?: string,
  admin: boolean
}

const PATH = 'familiares';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  private readonly _firestore = inject(Firestore);
  private readonly _collectionRef = collection(this._firestore, PATH);

  family$ = signal<Family[]>([]);
  loading$ = signal(false);

  mockFamifly$ = signal<Family[]>([
    {
      nombres: 'Saul Emmanuel',
      apellidos: 'Moedano Miguel',
      admin: true
    },
    {
      nombres: 'Diana Laura',
      apellidos: 'Cortes Zarate',
      admin: false
    }
  ]);

  getFamilyList(): Signal<Family[]> {
    this.loading$.set(true);
    if (enviroment.mockUp) { 
      setTimeout(() => {
        this.loading$.set(false);  // Desactivar estado de carga después de 2 segundos
      }, 2000);
      return this.mockFamifly$;
    }

    const document = collectionData(this._collectionRef, { idField: 'id' }) as Observable<Family[]>;

    document.subscribe({
      next: (data) => {
        this.family$.set(data);
        this.loading$.set(false);
      },
      error: (err) => {
        this.loading$.set(false);
        console.error('Error al obtener la colección ' + PATH + ': ', err);
      }
    });
    return this.family$;
  }

}
