import { inject, Injectable, Signal, signal } from '@angular/core';
import { Firestore, collection, collectionData, deleteDoc, doc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { enviroment } from '../env/enviroment';
import { Utils } from '../Utils/utils';

export interface Family {
  id?: string,
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
  private readonly _utils = inject(Utils);

  family$ = signal<Family[]>([]);
  loading$ = signal(false);

  mockFamifly$ = signal<Family[]>([
    {
      id: 'asg24w2g',
      nombres: 'Saul Emmanuel',
      apellidos: 'Moedano Miguel',
      admin: true
    },
    {
      id: '43grh3a',
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

  async addFamily(pepole: Family): Promise<void> {
    this.loading$.set(true);
    pepole.id = this._utils.generateId();
    if (enviroment.mockUp) {
      await this._utils.delay(1);
      this.mockFamifly$.set(this.mockFamifly$().concat(pepole));
      this.loading$.set(false);
      return;
    }

    await setDoc(doc(this._collectionRef), pepole).then(res => {
      this.loading$.set(false);
      return res;
    }).catch(error => {
      this.loading$.set(false);
      throw error;
    })
  }

  async updateFamily(pepole: Family): Promise<void> {
    this.loading$.set(true);

    if (enviroment.mockUp) {
      await this._utils.delay(1);
      const index = this.mockFamifly$().findIndex(f => f.id === pepole.id);
      const updatedList = this.mockFamifly$();
      updatedList[index] = pepole;
      this.mockFamifly$.set(updatedList);
      this.loading$.set(false);
      return;
    }

    await updateDoc(doc(this._collectionRef, pepole.id), {
      nombres: pepole.nombres,
      apellidos: pepole.apellidos,
      admin: pepole.admin,
      foto: pepole.foto
    }).then(res => {
      this.loading$.set(false);
      return res;
    }).catch(error => {
      this.loading$.set(false);
      throw error;
    });
  }

  async deleteFamily(familyId: string): Promise<void> {
    this.loading$.set(true);

    if (enviroment.mockUp) {
      await this._utils.delay(1);
      try {
        const index = this.mockFamifly$().findIndex(f => f.id === familyId);
        const updatedList = this.mockFamifly$();
        updatedList.splice(index, 1);
        this.mockFamifly$.set(updatedList);
        this.loading$.set(false);
        return;
      } catch (error) {
        this.loading$.set(false);
        throw error;
      }
    }

    await deleteDoc(doc(this._collectionRef, familyId)).then(res => {
      this.loading$.set(false);
      return res;
    }).catch(error => {
      this.loading$.set(false);
      throw error;
    })
  }

}
