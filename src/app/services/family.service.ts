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
    if (enviroment.mockUp) {return this.mockFamifly$}

    const document = collectionData(this._collectionRef, { idField: 'id' }) as Observable<Family[]>;

    document.subscribe({
      next: (data) => {
        this.family$.set(data);
      },
      error: (err) => {
        console.error('Error al obtener la colección ' + PATH + ': ', err);
      }
    });

    return this.family$;
  }

}
