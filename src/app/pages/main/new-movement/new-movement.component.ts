import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { MovementService } from '../../../services/movement.service';
import { SavingService } from '../../../services/saving.service';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { FamilyService } from '../../../services/family.service';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Avatar } from 'primeng/avatar';
import { FloatLabel } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { Button } from 'primeng/button';
import { DeviceService } from '../../../services/device.service';
import { TypeMovementEnum } from '../../../core/enums/type-movement.enum';
import { Family } from '../../../core/interfaces/family.interface';
import { Saving } from '../../../core/interfaces/saving.interface';
import { CurrencyPipe } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-movement',
  standalone: true,
  imports: [
    InputTextModule, SelectModule, Avatar, ReactiveFormsModule, FloatLabel, DatePickerModule,
    CardModule, InputNumberModule, TextareaModule, Button, CurrencyPipe
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
  private readonly _messageService = inject(MessageService);
  private readonly router = inject(Router);
  private readonly _fb = inject(FormBuilder);

  saving?: Saving;
  type?: TypeMovementEnum;
  family$: Signal<Family[]> = signal([]);
  avatarClass = {width: '25px', height:'25px'};
  formatDate = `D d 'de' MM 'del' yy`;

  savingLoading$ = this._savingService.loading$;
  familyLoading$ = this._familyService.loading$;
  movementLoading$ = this._movementService.loading$;

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
      this._savingService.getSaving(params['ahorroId']).then(saving => {
        this.saving = saving;
      });
      this.movementForm.value.ahorroId = params['ahorroId'];
    });

    if(this.type === TypeMovementEnum.out && this.saving) {
      this.movementForm.controls.cantidad.addValidators(Validators.max(this.saving.cantidad!));
    }
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
          await this.save();
        }
        break;
        case TypeMovementEnum.out:{
          await this.withdraw();
        }
          break;
      }
    }
  }

  private async withdraw() {
    this.movementForm.disable();
    try {
      await this._movementService.withDraw({
        idAhorros: this.saving?.id!,
        cantidad: this.movementForm.value.cantidad!,
        familiar: this.movementForm.value.familiar!.nombres + ' ' + this.movementForm.value.familiar!.apellidos,
        descripcion: this.movementForm.value.descripcion!,
        fecha: this.movementForm.value.fecha!.toDateString()
      });
      await this._savingService.withdraw(this.saving!,this.movementForm.value.cantidad!);
      this._messageService.add({
        severity: 'success',
        summary: 'Retiro registrado con exito.',
      });
      this.router.navigateByUrl(`ahorros`);
    } catch (error) {
      this._messageService.add({
        severity: 'error',
        summary: 'Ocurrio un error al registar el retiro',
        text: error,
        sticky: true
      });
    }
    this.movementForm.enable();
  }

  private async save(){
    this.movementForm.disable();
    try {
      await this._movementService.save({
        idAhorros: this.saving?.id!,
        cantidad: this.movementForm.value.cantidad!,
        familiar: this.movementForm.value.familiar!.nombres + ' ' + this.movementForm.value.familiar!.apellidos,
        descripcion: this.movementForm.value.descripcion!,
        fecha: this.movementForm.value.fecha!.toDateString()
      });
      await this._savingService.save(this.saving!,this.movementForm.value.cantidad!)
      this._messageService.add({
        severity: 'success',
        summary: 'Deposito registrado con exito.',
      });
      this.router.navigateByUrl(`ahorros`);
    } catch (error) {
      this._messageService.add({
        severity: 'error',
        summary: 'Ocurrio un error al registar el deposito',
        text: error,
        sticky: true
      });
    }
    this.movementForm.enable();
  }
}
