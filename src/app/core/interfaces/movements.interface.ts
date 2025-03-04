import { Timestamp } from "@angular/fire/firestore";
import { TypeMovementEnum } from "../enums/type-movement.enum";

export interface MovementDTO {
  id?: string;
  cantidad: number;
  tipo: TypeMovementEnum,
  descripcion: string,
  fecha: Timestamp,
  familiar: string,
  idAhorros: string
}

export interface Movement {
  id?: string;
  cantidad: number;
  tipo: TypeMovementEnum,
  descripcion: string,
  fecha: string,
  familiar: string,
  idAhorros: string
}

export type NewMovement = Omit<Omit<Movement,'tipo'>, 'id'>;