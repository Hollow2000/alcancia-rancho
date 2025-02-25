import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { DataView } from 'primeng/dataview';
import { AvatarModule } from 'primeng/avatar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Skeleton } from 'primeng/skeleton';
import { Subscription } from 'rxjs';
import { DeviceService } from '../../../services/device.service';
import { Family, FamilyService } from '../../../services/family.service';
import { InputText } from 'primeng/inputtext';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Utils } from '../../../Utils/utils';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';


@Component({
  selector: 'app-family',
  standalone: true,
  imports: [
    Card, Button, DataView, AvatarModule, IconFieldModule, InputIconModule,
    InputText, FormsModule, ReactiveFormsModule, Skeleton, DialogModule, CheckboxModule],
  templateUrl: './family.component.html',
  styleUrl: './family.component.css'
})
export class FamilyComponent implements OnInit, OnDestroy {
  private readonly _deviceService = inject(DeviceService);
  private readonly _familyService = inject(FamilyService);
  readonly _utils = inject(Utils);

  family$ = this._familyService.getFamilyList();
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
    admin: new FormControl<boolean>(false, [Validators.required])
  });

  ngOnInit(): void {
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

  openEditFamily(pepole: Family){
    this.familyFg.patchValue({
      id: pepole.id,
      nombre: pepole.nombres,
      apellidos: pepole.apellidos,
      admin: pepole.admin
    })
    this.dialogFormVisible = true;
  }

  async submitDialog(){
    this.familyFg.markAllAsTouched();
    if(this.familyFg.valid){
      if (this.dialogIsNew) {
        await this._familyService.addFamily({
          nombres: this.familyFg.value.nombre!.trim(),
          apellidos: this.familyFg.value.apellidos!.trim(),
          admin: this.familyFg.value.admin!
        })
      } else {
        this._familyService.updateFamily({
          id: this.familyFg.value.id!,
          nombres: this.familyFg.value.nombre!.trim(),
          apellidos: this.familyFg.value.apellidos!.trim(),
          admin: this.familyFg.value.admin!
        })
      }
      this.familyFg.reset({nombre: '', apellidos: '', admin: false})
      this.dialogFormVisible = false;
    }
  }

  cancelDialog(){
    this.familyFg.reset({nombre: '', apellidos: '', admin: false})
    this.dialogFormVisible = false;
  }
}
