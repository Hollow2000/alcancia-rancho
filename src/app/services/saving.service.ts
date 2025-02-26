import { inject, Injectable, signal, Signal } from '@angular/core';
import { enviroment } from '../env/enviroment';
import { Firestore, Query, collection, collectionData, deleteDoc, doc, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Utils } from '../Utils/utils';

export interface Saving {
  id?: string,
  cantidad?: number,
  nombre: string,
  meta: number,
  activo: boolean
}

export enum FilterSaving {
  ALL,
  ENABLE,
  DISABLE
}

const PATH = 'ahorros';

@Injectable({
  providedIn: 'root'
})
export class SavingService {
  private readonly _firestore = inject(Firestore);
  private readonly _collectionRef = collection(this._firestore, PATH);
  private readonly _utils = inject(Utils);

  savings$ = signal<Saving[]>([]);
  loading$ = signal(false);

  mockSavings$ = signal<Saving[]>([
    {
      id: '5Z3RBEfu05n1EA8DBtO1',
      nombre: 'Puerta',
      cantidad: 5920,
      meta: 6200,
      activo: true
    },
    {
      id: 'df3RBEfu05n1EA8DB123',
      nombre: 'Reparacion de loseta del baño',
      cantidad: 3021,
      meta: 102300,
      activo: true
    }
  ]);

  getSavings(filter: FilterSaving = FilterSaving.ENABLE): Signal<Saving[]> {
    this.loading$.set(true)

    if (enviroment.mockUp) {
      setTimeout(() => {
        this.loading$.set(false);  // Desactivar estado de carga después de 2 segundos
      }, 2000);
      switch (filter) {
        case FilterSaving.ALL:
          return this.mockSavings$;
        case FilterSaving.ENABLE:
          return signal<Saving[]>(this.mockSavings$().filter(saving => {
            return saving.activo;
          }))
        case FilterSaving.DISABLE:
          return signal<Saving[]>(this.mockSavings$().filter(saving => {
            return !saving.activo;
          }))
      }
    }

    let document: Observable<any>;
    let q: Query;
    switch (filter) {
      case FilterSaving.ALL:
        document = collectionData(this._collectionRef, { idField: 'id' }) as Observable<Saving[]>;
        break;
      case FilterSaving.ENABLE:
        q = query(this._collectionRef, where('activo','==',true));
        document = collectionData(q, { idField: 'id' }) as Observable<Saving[]>;
        break;
      case FilterSaving.DISABLE:
        q = query(this._collectionRef, where('activo','==',false));
        document = collectionData(q, { idField: 'id' }) as Observable<Saving[]>;
        break;
    }

    document.subscribe({
      next: (data) => {
        this.savings$.set(data);
        this.loading$.set(false);
      },
      error: (err) => {
        this.loading$.set(false);
        console.error('Error al obtener la colección ' + PATH + ': ', err);
      }
    });

    return this.savings$;
  }

  async addSaving(saving: Saving): Promise<void> {
    this.loading$.set(true);

    saving.id = this._utils.generateId();
    if (enviroment.mockUp) {
      await this._utils.delay(1);
      this.mockSavings$.set(this.mockSavings$().concat(saving));
      this.loading$.set(false);
      return;
    }

    await setDoc(doc(this._collectionRef), saving).then(res => {
      this.loading$.set(false);
      return res;
    }).catch(error => {
      this.loading$.set(false);
      throw error;
    })
  }

  async updateSaving(saving: Saving): Promise<void> {
    this.loading$.set(true);

    if (enviroment.mockUp) {
      await this._utils.delay(1);
      const index = this.mockSavings$().findIndex(f => f.id === saving.id);
      const updatedList = this.mockSavings$();
      updatedList[index] = saving;
      this.mockSavings$.set(updatedList);
      this.loading$.set(false);
      return;
    }

    await updateDoc(doc(this._collectionRef, saving.id), {
      nombre: saving.nombre,
      menta: saving.meta
    }).then(res => {
      this.loading$.set(false);
      return res;
    }).catch(error => {
      this.loading$.set(false);
      throw error;
    });
  }

  async deleteSaving(savingId: string): Promise<void> {
    this.loading$.set(true);
    if (enviroment.mockUp) {
      await this._utils.delay(1);
      const index = this.mockSavings$().findIndex(f => f.id === savingId);
      const updatedList = this.mockSavings$();
      updatedList[index].activo = false;
      this.mockSavings$.set(updatedList);
      this.loading$.set(false);
      
      return;
    }

    await updateDoc(doc(this._collectionRef, savingId), {
      activo: false
    }).then(res => {
      this.loading$.set(false);
      return res;
    }).catch(error => {
      this.loading$.set(false);
      throw error;
    });
  }
}
