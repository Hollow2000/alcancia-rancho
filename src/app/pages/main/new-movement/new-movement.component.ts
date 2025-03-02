import { Component, inject, OnInit } from '@angular/core';
import { MovementService, TypeMovementEnum } from '../../../services/movement.service';
import { Saving, SavingService } from '../../../services/saving.service';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Family, FamilyService } from '../../../services/family.service';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Avatar } from 'primeng/avatar';
import { FloatLabel } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { Button } from 'primeng/button';
import { DeviceService } from '../../../services/device.service';

@Component({
  selector: 'app-new-movement',
  standalone: true,
  imports: [
    InputTextModule, SelectModule, Avatar, ReactiveFormsModule, FloatLabel, DatePickerModule,
    CardModule, InputNumberModule, TextareaModule, Button
  ],
  templateUrl: './new-movement.component.html',
  styleUrl: './new-movement.component.css'
})
export class NewMovementComponent implements OnInit {
  private readonly _savingService = inject(SavingService);
  private readonly _movementService = inject(MovementService);
  private readonly _familyService = inject(FamilyService);
  private readonly _activatedRouter = inject(ActivatedRoute)
  private readonly _deviceService = inject(DeviceService);
  private readonly _fb = inject(FormBuilder);

  saving?: Saving;
  type?: TypeMovementEnum;
  family$ = this._familyService.getFamilyList();
  avatarClass = {width: '25px', height:'25px'};
  formatDate = `D d 'de' MM 'del' yy`;

  isMobile = false;

  movementForm = this._fb.group({
    ahorroId: new FormControl<string | null>(null),
    cantidad: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
    descripcion: new FormControl<string | null>(null, [Validators.maxLength(100)]),
    fecha: new FormControl<Date | null>(null, [Validators.required]),
    familiar: new FormControl<Family | null>(null, [Validators.required])
  });

  ngOnInit(): void {
    switch (this._activatedRouter.snapshot.routeConfig?.path?.split('/')[1]) {
      case 'deposito': this.type = TypeMovementEnum.into;
        break;
      case 'retiro': this.type = TypeMovementEnum.out;
        break;
      default: this.type = TypeMovementEnum.into;
        break;
    }

    this._deviceService.isMobile$.subscribe(value => { this.isMobile = value });

    this._activatedRouter.queryParams.subscribe(params => {
      this.saving = this._savingService.getSavings()().find(s => {
        return s.id === params['ahorroId'];
      });
      this.movementForm.value.ahorroId = params['ahorroId'];
    });
  }

  get title() {
    const typeStr = this.type === TypeMovementEnum.into ? 'Depositar en' : 'Retirar de';
    return `${typeStr} ${this.saving!.nombre}`
  }

  get icon() {
    return this.type === 'deposito' ? 'pi pi-download' : 'pi pi-upload';
  }

  getIniciales(pepole: Family) {
    return pepole.nombres[0] + pepole.apellidos[0];
  }

  get labelFamily() {
    return this.type === TypeMovementEnum.into ? '¿Quien aportó?' : '¿Quien retiró?'
  }

  async submit(){
    this.movementForm.markAllAsTouched();
    if (this.movementForm.valid) {
      switch (this.type) {
        case TypeMovementEnum.into: {
          await this._movementService.save({
            idAhorros: this.saving?.id!,
            cantidad: this.movementForm.value.cantidad!,
            familiar: this.movementForm.value.familiar!.nombres + this.movementForm.value.familiar!.nombres,
            descripcion: this.movementForm.value.descripcion!,
            fecha: this.movementForm.value.fecha!.toDateString()
          });
        }
          break;
        case TypeMovementEnum.out:{
          await this._movementService.withDraw({
            idAhorros: this.saving?.id!,
            cantidad: this.movementForm.value.cantidad!,
            familiar: this.movementForm.value.familiar!.nombres + this.movementForm.value.familiar!.nombres,
            descripcion: this.movementForm.value.descripcion!,
            fecha: this.movementForm.value.fecha!.toDateString()
          });
        }
          break;
      }
    }
  }
}
