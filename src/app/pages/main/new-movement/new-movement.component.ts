import { Component, inject } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { MovementService, TypeMovementEnum } from '../../../services/movement.service';
import { Saving, SavingService } from '../../../services/saving.service';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Family, FamilyService } from '../../../services/family.service';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Avatar } from 'primeng/avatar';
import { FloatLabel } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-new-movement',
  standalone: true,
  imports: [InputTextModule, SelectModule, Avatar, ReactiveFormsModule, FloatLabel, DatePickerModule],
  templateUrl: './new-movement.component.html',
  styleUrl: './new-movement.component.css'
})
export class NewMovementComponent {
  private readonly _savingService = inject(SavingService);
  private readonly _movementService = inject(MovementService);
  private readonly _familyService = inject(FamilyService);
  private readonly _fb = inject(FormBuilder);

  saving = this._savingService.savingRequest;
  type = this._savingService.typeRequest;

  family$ = this._familyService.getFamilyList();
  
  movementForm = this._fb.group({
    ahorroId: new FormControl<string>(this.saving!.id!),
    cantidad: new FormControl<number|null>(null,[Validators.required, Validators.min(1)]),
    descripcion: new FormControl<string|null>(null,[Validators.maxLength(25)]),
    fecha: new FormControl<string|null>(null,[Validators.required]),
    familiar: new FormControl<string|null>(null,[Validators.required])
  });

  get title() {
    const typeStr = this.type === TypeMovementEnum.into ? 'Depositar en' : 'Retirar de';
    return `${typeStr} ${this.saving!.nombre}`
  }

  getIniciales(pepole: Family) {
    return pepole.nombres[0] + pepole.apellidos[0];
  }

  get labelFamily() {
    return this.type === TypeMovementEnum.into ? '¿Quien aportó?' : '¿Quien retiró'
  }
}
