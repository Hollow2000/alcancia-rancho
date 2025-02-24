import { inject, Injectable, signal, Signal } from '@angular/core';
import { enviroment } from '../env/enviroment';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Saving {
  id: string,
  cantidad: number,
  nombre: string,
  meta: number
}

const PATH = 'ahorros';

@Injectable({
  providedIn: 'root'
})
export class SavingService {
  private readonly _firestore = inject(Firestore);
  private readonly _collectionRef = collection(this._firestore, PATH);

  savings$ = signal<Saving[]>([]);

  mockSavings$ = signal<Saving[]>([
    {
      id: '5Z3RBEfu05n1EA8DBtO1',
      nombre: 'Puerta',
      cantidad: 5920,
      meta: 6200
    },
    {
      id: 'df3RBEfu05n1EA8DB123',
      nombre: 'Reparacion de loseta del baño',
      cantidad: 3021,
      meta: 102300
    }
  ]);

  getSavings(): Signal<Saving[]> {
    if (enviroment.mockUp) {return this.mockSavings$;}

    const document = collectionData(this._collectionRef, {idField: 'id'}) as Observable<Saving[]>;

    document.subscribe({
      next: (data) => {
        this.savings$.set(data);
      },
      error: (err) => {
        console.error('Error al obtener la colección ' + PATH + ': ', err);
      }
    });

    return this.savings$;
  }
}
