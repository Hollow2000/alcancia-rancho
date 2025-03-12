import { CurrencyPipe } from '@angular/common';
import { Component, inject, signal, Signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DeviceService } from '../../../services/device.service';
import { Subscription } from 'rxjs';
import { SavingService } from '../../../services/saving.service';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';
import { Skeleton } from 'primeng/skeleton';
import { Utils } from '../../../Utils/utils';
import { DialogModule } from 'primeng/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogService } from 'primeng/dynamicdialog';
import { Saving } from '../../../core/interfaces/saving.interface';
import { enviroment } from '../../../env/enviroment';
import { FirebaseError } from '@angular/fire/app';

@Component({
  selector: 'app-savings',
  standalone: true,
  imports: [
    DataViewModule,
    Button,
    FormsModule,
    CardModule,
    ConfirmPopupModule,
    CurrencyPipe,
    Skeleton,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    ProgressBarModule
  ],
  templateUrl: './savings.component.html',
  styleUrl: './savings.component.css',
  providers: [ConfirmationService, DialogService],
})
export class SavingsComponent {
  private readonly _savingService = inject(SavingService);
  private readonly _deviceService = inject(DeviceService);
  private readonly _confirmationService = inject(ConfirmationService);
  private readonly _messageService = inject(MessageService);
  private readonly _router = inject(Router);
  readonly _utils = inject(Utils);

  savings$: Signal<Saving[]> = signal([]) ;
  loading$ = this._savingService.loading$;

  private subscription?: Subscription;

  layout: 'list' | 'grid' = 'list';

  dialogFormVisible = false;
  dialogIsNew = false;

  savingForm = new FormGroup({
    id: new FormControl<string | null>(null),
    nombre: new FormControl<string>('', [Validators.required]),
    meta: new FormControl<number | null>(null, [Validators.required]),
    cantidad: new FormControl<number>(0)
  });

  async ngOnInit(): Promise<void> {
    try {
      this.savings$ = await this._savingService.getSavings();
    } catch (error) {
      this._messageService.add({
        severity: 'error',
        summary: 'Ocurrio un error al obtener el listado de ahorros',
        detail: (error as FirebaseError).message,
        sticky: true
      });
    }
    this.subscription = this._deviceService.isMobile$.subscribe((isMobile) => {
      this.layout = isMobile ? 'list' : 'grid';
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  details(saving: Saving) {
    this._router.navigateByUrl('movimientos?saving=' + saving.id);
  }

  get totalSaving() {
    let total = 0;
    this.savings$().forEach((saving) => {
      total += Number(saving.cantidad);
    });
    return total;
  }

  getProgress(saving: Saving): number {
    return saving.cantidad! * 100 / saving.meta;
  }

  goToNewMovement(type: 'deposito' | 'retiro', saving: Saving) {
    this._router.navigateByUrl(`/movimientos/${type}?ahorroId=${saving.id}`);
  }

  openDialog(saving?: Saving) {
    if (saving) {
      this.savingForm.patchValue({
        id: saving.id,
        nombre: saving.nombre,
        meta: saving.meta,
        cantidad: saving.cantidad
      })
    }
    this.dialogIsNew = saving ? false : true;
    this.dialogFormVisible = true;
  }

  cancelDialog() {
    this.savingForm.reset({ nombre: '', cantidad: 0, meta: null });
    this.dialogFormVisible = false;
  }

  confirmDelete(event: Event, saving: Saving) {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Desea desactivar ${this._utils.addElipsis(saving.nombre, 15)}?`,
      icon: 'pi pi-info-circle',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Si, desactivar',
        severity: 'danger'
      },
      accept: () => {
        this.deleteSaving(saving.id!)
      },
      reject: () => {

      }
    });
  }

  async submitDialog() {
    this.savingForm.markAllAsTouched();

    if (this.savingForm.valid) {
      if (this.dialogIsNew) {
        try {
          await this._savingService.addSaving({
            nombre: this.savingForm.value.nombre!.trim(),
            meta: this.savingForm.value.meta!,
            cantidad: this.savingForm.value.cantidad!,
            activo: true
          });
        } catch (error) {
          this._messageService.add({
            severity: 'error',
            summary: 'Ocurrio un error al agregar el ahorro',
            detail: (error as FirebaseError).message,
            sticky: true
          });
        }
      } else {
        try {
          await this._savingService.updateSaving({
            id: this.savingForm.value.id!,
            nombre: this.savingForm.value.nombre!.trim(),
            meta: this.savingForm.value.meta!,
            cantidad: this.savingForm.value.cantidad!,
            activo: true
          });
        } catch (error) {
          this._messageService.add({
            severity: 'error',
            summary: 'Ocurrio un error al actualizar el ahorro',
            detail: (error as FirebaseError).message,
            sticky: true
          });
        }
      }
      this.savingForm.reset({ nombre: '', cantidad: 0, meta: null });
      this.dialogFormVisible = false;
      if (enviroment.mockUp) {
        this.savings$ = this._savingService.getSavings();
      }
    }
  }

  async deleteSaving(savingId: string) {
    try {
      await this._savingService.deleteSaving(savingId);
    } catch (error) {
      this._messageService.add({
        severity: 'error',
        summary: 'Ocurrio un error al desactivar el ahorro',
        detail: (error as FirebaseError).message,
        sticky: true
      });
    }
    if (enviroment.mockUp) {
      this.savings$ = this._savingService.getSavings();
    }
  }

}
