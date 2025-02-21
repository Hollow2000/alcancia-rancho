import { Injectable, signal, Signal } from '@angular/core';
import { enviroment } from '../env/enviroment';

export interface Saving {
  id: string,
  cantidad: number,
  nombre: string,
  meta: number
}

@Injectable({
  providedIn: 'root'
})
export class SavingService {

  mockSavings$ = signal<Saving[]>([
    {
      id: 'asd132t',
      nombre: 'Puerta',
      cantidad: 5920,
      meta: 6200
    },
    {
      id: 'asd132t',
      nombre: 'Reparacion de loseta del baño',
      cantidad: 3021,
      meta: 102300
    }
  ]);

  getSavings(): Signal<Saving[]> {
    return this.mockSavings$;
  }
}
