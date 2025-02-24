import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { DeviceService } from '../../../services/device.service';
import { Subscription } from 'rxjs';
import { FilterDropdown, Movement, MovementService, TypeMovementEnum } from '../../../services/movement.service';
import { CurrencyPipe } from '@angular/common';
import { Saving, SavingService } from '../../../services/saving.service';
import { Button } from 'primeng/button';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DataViewModule, SelectModule, FormsModule, CardModule,
    Button ,CurrencyPipe
  ],
  templateUrl: './movements.component.html',
  styleUrl: './movements.component.css'
})
export class MovementsComponent implements OnInit, OnDestroy {
  private readonly _movementService = inject(MovementService);
  private readonly _savingService = inject(SavingService);
  private readonly _deviceService = inject(DeviceService)
  private readonly _activatedRouter = inject(ActivatedRoute)

  movements$ = this._movementService.getMovement(this.filterSaving, this.filterType);
  
  private subscription?: Subscription;
  
  layout: 'list' | 'grid' = 'list';
  
  filterSaving?: Saving | undefined;
  savings$ = this._savingService.getSavings();

  filterType?: FilterDropdown | undefined;
  filterTypeOptions: FilterDropdown[] | undefined = [
    {
      id: 'retiro',
      nombre: 'Retiros'
    },
    {
      id: 'deposito',
      nombre: 'Depositos'
    },
  ];

  ngOnInit(): void {
    this.subscription = this._deviceService.isMobile$.subscribe(
      (isMobile) => {
        this.layout = isMobile ? 'list' : 'grid';
      }
    );
    this._activatedRouter.queryParams.subscribe(params => {
      this.filterType = this.filterTypeOptions?.find(type => type.id === params['type']);
      this.filterSaving = this.savings$().find(saving => saving.id === params['saving'])
      this.notifyFilter();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  isDeposit(movement: Movement): boolean{
    return movement.tipo === TypeMovementEnum.into;
  }

  getSavingName(idAhorro: string) {
    return this.savings$().find(saving => saving.id === idAhorro)?.nombre;
  }

  notifyFilter(){
    this.movements$ = this._movementService.getMovement(this.filterSaving, this.filterType);
  }
}
