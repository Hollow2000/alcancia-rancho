import { inject, Injectable, signal, Signal } from '@angular/core';
import { enviroment } from '../env/enviroment';
import { Firestore, Query, collection, collectionData, doc, getDoc, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Utils } from '../Utils/utils';
import { Mocks } from '../core/constants/mocks';
import { Saving } from '../core/interfaces/saving.interface';
import { FilterSaving } from '../core/enums/saving-filter.enum';

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

  mockSavings$ = signal<Saving[]>(Mocks.Savings);

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
        q = query(this._collectionRef, where('activo', '==', true));
        document = collectionData(q, { idField: 'id' }) as Observable<Saving[]>;
        break;
      case FilterSaving.DISABLE:
        q = query(this._collectionRef, where('activo', '==', false));
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

  async getSaving(savingId: string): Promise<Saving | undefined> {
    this.loading$.set(true);
    if (enviroment.mockUp) {
      await this._utils.delay(1);
      this.loading$.set(false);
      return this.mockSavings$().find(saving => {return saving.id === savingId});
    }

    try {
      return (await getDoc(doc(this._firestore, PATH, savingId))).data() as Saving;;
    } catch (error) {
      throw error;
    } finally {
      this.loading$.set(false);
    }
  }

  async addSaving(saving: Saving): Promise<void> {
    this.loading$.set(true);

    if (enviroment.mockUp) {
      await this._utils.delay(1);
      saving.id = this._utils.generateId();
      this.mockSavings$.set(this.mockSavings$().concat(saving));
      this.loading$.set(false);
      return;
    }

    try {
      await setDoc(doc(this._collectionRef), saving);
    } catch (error) {
      throw error;
    } finally {
      this.loading$.set(false);
    }
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

    try {
      await updateDoc(doc(this._collectionRef, saving.id), {
        nombre: saving.nombre,
        menta: saving.meta
      });
    } catch (error) {
      throw error;
    } finally {
      this.loading$.set(false);
    }
  }

  async save(saving: Saving, amount: number): Promise<void> {
    this.loading$.set(true);

    if (enviroment.mockUp) {
      await this._utils.delay(1);
      const index = this.mockSavings$().findIndex(f => f.id === saving.id);
      const updatedList = this.mockSavings$();
      updatedList[index].cantidad! += amount;
      this.mockSavings$.set(updatedList);
      this.loading$.set(false);
      return;
    }

    try {
      await updateDoc(doc(this._collectionRef, saving.id), {
        cantidad: saving.cantidad! + amount
      });
    } catch (error) {
      throw error;
    } finally {
      this.loading$.set(false);
    }
  }

  async withdraw(saving: Saving, amount: number): Promise<void> {
    this.loading$.set(true);

    if (enviroment.mockUp) {
      await this._utils.delay(1);
      const index = this.mockSavings$().findIndex(f => f.id === saving.id);
      const updatedList = this.mockSavings$();
      updatedList[index].cantidad! -= amount;
      this.mockSavings$.set(updatedList);
      this.loading$.set(false);
      return;
    }

    try {
      await updateDoc(doc(this._collectionRef, saving.id), {
        cantidad: saving.cantidad! - amount
      });
    } catch (error) {
      throw error;
    } finally {
      this.loading$.set(false);
    }
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

    try {
      await updateDoc(doc(this._collectionRef, savingId), {
        activo: false
      });
    } catch (error) {
      throw error;
    } finally {
      this.loading$.set(false);
    }
  }
}
