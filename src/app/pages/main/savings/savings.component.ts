import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DeviceService } from '../../../services/device.service';
import { Subscription } from 'rxjs';
import { Saving, SavingService } from '../../../services/saving.service';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';
import { Skeleton } from 'primeng/skeleton';
import { Utils } from '../../../Utils/utils';
import { DialogModule } from 'primeng/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

interface FilterDropdown {
  id: string,
  nombre: string,
}

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
    InputNumberModule
  ],
  templateUrl: './savings.component.html',
  styleUrl: './savings.component.css',
  providers: [ConfirmationService],
})
export class SavingsComponent {
  private readonly _savingService = inject(SavingService);
  private readonly _deviceService = inject(DeviceService);
  private readonly _confirmationService = inject(ConfirmationService);
  private readonly _router = inject(Router);
  readonly _utils = inject(Utils);

  savings$ = this._savingService.getSavings();
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

  ngOnInit(): void {
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
      message: `¿Desea eliminar ${this._utils.addElipsis(saving.nombre,15)}?`,
      icon: 'pi pi-info-circle',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Si, eliminar',
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
        await this._savingService.addSaving({
          nombre: this.savingForm.value.nombre!.trim(),
          meta: this.savingForm.value.meta!,
          cantidad: this.savingForm.value.cantidad!
        });
      } else {
        await this._savingService.updateSaving({
          id: this.savingForm.value.id!,
          nombre: this.savingForm.value.nombre!.trim(),
          meta: this.savingForm.value.meta!,
          cantidad: this.savingForm.value.cantidad!
        });
      }
      this.savingForm.reset({ nombre: '', cantidad: 0, meta: null });
      this.dialogFormVisible = false;
    }
  }

  async deleteSaving(savingId: string){
    await this._savingService.deleteSaving(savingId);
  }

}
