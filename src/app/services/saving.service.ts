import { inject, Injectable, signal, Signal } from '@angular/core';
import { enviroment } from '../env/enviroment';
import { Firestore, collection, collectionData, deleteDoc, doc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Utils } from '../Utils/utils';

export interface Saving {
  id?: string,
  cantidad?: number,
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
  private readonly _utils = inject(Utils);

  savings$ = signal<Saving[]>([]);
  loading$ = signal(false);

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
    this.loading$.set(true)

    if (enviroment.mockUp) {
      setTimeout(() => {
        this.loading$.set(false);  // Desactivar estado de carga después de 2 segundos
      }, 2000);
      return this.mockSavings$;
    }

    const document = collectionData(this._collectionRef, { idField: 'id' }) as Observable<Saving[]>;

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
      this.savings$.set(updatedList);
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
debugger
    if (enviroment.mockUp) {
      await this._utils.delay(1);
      try {
        const index = this.mockSavings$().findIndex(f => f.id === savingId);
        const updatedList = this.mockSavings$();
        updatedList.splice(index, 1);
        this.mockSavings$.set(updatedList);
        this.loading$.set(false);
        return;
      } catch (error) {
        this.loading$.set(false);
        throw error;
      }
    }

    await deleteDoc(doc(this._collectionRef, savingId)).then(res => {
      this.loading$.set(false);
      return res;
    }).catch(error => {
      this.loading$.set(false);
      throw error;
    })
  }
}
