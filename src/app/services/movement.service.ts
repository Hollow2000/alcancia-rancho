import { inject, Injectable, Signal, signal } from '@angular/core';
import { Firestore, Timestamp, collection, collectionData, doc, query, setDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { enviroment } from '../env/enviroment';
import { Utils } from '../Utils/utils';
import { Mocks } from '../core/constants/mocks';
import { TypeMovementEnum } from '../core/enums/type-movement.enum';
import { Movement, MovementDTO, NewMovement } from '../core/interfaces/movements.interface';
import { FilterDropdown } from '../core/interfaces/filter-dropdown.interface';
import { Saving } from '../core/interfaces/saving.interface';

const PATH = 'movimientos';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  private readonly _firestore = inject(Firestore);
  private readonly _collectionRef = collection(this._firestore, PATH);
  private readonly _utils = inject(Utils);

  private movements$ = signal<Movement[]>([]);
  loading$ = signal(false);

  mockMovements = signal<Movement[]>(Mocks.Movements);

  getMovement(filterSaving?: Saving | undefined, filterType?: FilterDropdown | undefined): Signal<Movement[]> {
    this.loading$.set(true)
    
    if (enviroment.mockUp) {
      setTimeout(() => {
        this.loading$.set(false);  // Desactivar estado de carga después de 2 segundos
      }, 2000);
      if (filterSaving && filterType){
        return signal<Movement[]>(this.mockMovements().filter(movement =>{
          return movement.idAhorros === filterSaving.id && movement.tipo === filterType.id
        }));
      } else if (filterType){
        return signal<Movement[]>(this.mockMovements().filter(movement =>{
          return movement.tipo === filterType.id
        }));
      } else if (filterSaving){
        return signal<Movement[]>(this.mockMovements().filter(movement =>{
          return movement.idAhorros === filterSaving.id
        }));
      } else {
        return this.mockMovements;
      }
    }
    
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
        this.loading$.set(false);
      },
      error: (err) => {
        this.loading$.set(false);
        console.error('Error al obtener la colección: ', err);
      }
    });

    return this.movements$;
  }

  async withDraw(movement: NewMovement): Promise<void>{
    this.loading$.set(true);

    if (enviroment.mockUp) {
      movement.fecha = new Date(movement.fecha).toLocaleDateString('es-ES',{dateStyle: 'long'});
      await this._utils.delay(1);
      const mov: Movement = {
        ...movement,
        id: this._utils.generateId(),
        tipo: TypeMovementEnum.out
      }
      this.mockMovements.set(this.mockMovements().concat(mov));
      this.loading$.set(false);
      return;
    }

    const movDTO: MovementDTO = {
      ...movement,
      fecha: Timestamp.fromDate(new Date(movement.fecha)),
      tipo: TypeMovementEnum.out
    }

    try {
      await setDoc(doc(this._collectionRef),movDTO);
    } catch (error) {
      throw error;
    } finally {
      this.loading$.set(false);
    }
  }

  async save(movement: NewMovement): Promise<void>{
    this.loading$.set(true);

    if (enviroment.mockUp) {
      movement.fecha = new Date(movement.fecha).toLocaleDateString('es-ES',{dateStyle: 'long'});
      await this._utils.delay(1);
      const mov: Movement = {
        ...movement,
        id: this._utils.generateId(),
        tipo: TypeMovementEnum.into
      }
      this.mockMovements.set(this.mockMovements().concat(mov));
      this.loading$.set(false);
      return;
    }

    const movDTO: MovementDTO = {
      ...movement,
      fecha: Timestamp.fromDate(new Date(movement.fecha)),
      tipo: TypeMovementEnum.into
    }

    try {
      await setDoc(doc(this._collectionRef),movDTO);
    } catch (error) {
      throw error;
    } finally {
      this.loading$.set(false);
    }
  }
}
