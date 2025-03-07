import { Component, inject, OnDestroy, OnInit, Signal, signal } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { DataView } from 'primeng/dataview';
import { AvatarModule } from 'primeng/avatar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Skeleton } from 'primeng/skeleton';
import { Subscription } from 'rxjs';
import { DeviceService } from '../../../services/device.service';
import { FamilyService } from '../../../services/family.service';
import { InputText } from 'primeng/inputtext';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Utils } from '../../../Utils/utils';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Family } from '../../../core/interfaces/family.interface';
import { FirebaseError } from '@angular/fire/app';


@Component({
  selector: 'app-family',
  standalone: true,
  imports: [
    Card, Button, DataView, AvatarModule, IconFieldModule, InputIconModule, ConfirmPopupModule,
    InputText, FormsModule, ReactiveFormsModule, Skeleton, DialogModule, CheckboxModule],
  templateUrl: './family.component.html',
  styleUrl: './family.component.css',
  providers: [ConfirmationService]
})
export class FamilyComponent implements OnInit, OnDestroy {
  private readonly _deviceService = inject(DeviceService);
  private readonly _messageService = inject(MessageService);
  private readonly _familyService = inject(FamilyService);
  private readonly _confirmationService = inject(ConfirmationService);
  readonly _utils = inject(Utils);

  family$: Signal<Family[]> = signal([]);
  loading$ = this._familyService.loading$;
  filter = '';

  private subscription?: Subscription;
  layout: 'list' | 'grid' = 'list';

  dialogFormVisible = false;
  dialogIsNew = false;

  familyFg = new FormGroup({
    id: new FormControl<string | null>(null),
    nombre: new FormControl<string>('', [Validators.required]),
    apellidos: new FormControl<string>('', [Validators.required]),
    admin: new FormControl<boolean>(false, [Validators.required]),
    foto: new FormControl<string | null>(null)
  });

  async ngOnInit(): Promise<void> {
    try {
      this.family$ = await this._familyService.getFamilyList();
    } catch (error) {
      this._messageService.add({
        severity: 'error',
        summary: 'Ocurrio un error al obtener la lista de familiares.',
        detail: (error as FirebaseError).message,
        sticky: true
      });
    }
    this.subscription = this._deviceService.isMobile$.subscribe(
      (isMobile) => {
        this.layout = isMobile ? 'list' : 'grid';
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getIniciales(pepole: Family) {
    return pepole.nombres[0] + pepole.apellidos[0];
  }

  onFilter() {
    this.family$ = signal<Family[]>(
      this._familyService.getFamilyList()().filter(family =>
        family.nombres.toLowerCase().includes(this.filter.toLowerCase()) ||
        family.apellidos.toLowerCase().includes(this.filter.toLowerCase())
      )
    );
  }

  openEditFamily(pepole: Family) {
    this.familyFg.patchValue({
      id: pepole.id,
      nombre: pepole.nombres,
      apellidos: pepole.apellidos,
      admin: pepole.admin,
      foto: pepole.foto
    })
    this.dialogIsNew = false;
    this.dialogFormVisible = true;
  }

  async submitDialog() {
    this.familyFg.markAllAsTouched();
    if (this.familyFg.valid) {
      if (this.dialogIsNew) {
        //TODO: Replicar esto en todos los servicios para el manejo de errores
        try {
          await this._familyService.addFamily({
            nombres: this.familyFg.value.nombre!.trim(),
            apellidos: this.familyFg.value.apellidos!.trim(),
            admin: this.familyFg.value.admin!,
            foto: this.familyFg.value.foto!
          });
        } catch (error) {
          this._messageService.add({
            severity: 'error',
            summary: 'Ocurrio un error al agregar el familiar.',
            detail: (error as FirebaseError).message,
            sticky: true
          });
        }
      } else {
        try {
          await this._familyService.updateFamily({
            id: this.familyFg.value.id!,
            nombres: this.familyFg.value.nombre!.trim(),
            apellidos: this.familyFg.value.apellidos!.trim(),
            admin: this.familyFg.value.admin!,
            foto: this.familyFg.value.foto!
          });
        } catch (error) {
          this._messageService.add({
            severity: 'error',
            summary: 'Ocurrio un error al actualizar el familiar.',
            detail: (error as FirebaseError).message,
            sticky: true
          });
        }
      }
      this.familyFg.reset({ nombre: '', apellidos: '', admin: false })
      this.dialogFormVisible = false;
    }
  }

  async deleteFamily(familyId: string) {
    try {
      await this._familyService.deleteFamily(familyId);
    } catch (error) {
      this._messageService.add({
        severity: 'error',
        summary: 'Ocurrio un error al eliminar el familiar.',
        detail: (error as FirebaseError).message,
        sticky: true
      });
    }
  }

  confirmDelete(event: Event, pepole: Family) {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Desea eliminar a ${this._utils.addElipsis(pepole.nombres, 15)}?`,
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
        this.deleteFamily(pepole.id!)
      },
      reject: () => {

      }
    });
  }

  cancelDialog() {
    this.familyFg.reset({ nombre: '', apellidos: '', admin: false })
    this.dialogFormVisible = false;
  }
}
