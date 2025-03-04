import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { DeviceService } from '../../../services/device.service';
import { Subscription } from 'rxjs';
import { MovementService } from '../../../services/movement.service';
import { CurrencyPipe } from '@angular/common';
import { SavingService } from '../../../services/saving.service';
import { Button } from 'primeng/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Skeleton } from 'primeng/skeleton';
import { Utils } from '../../../Utils/utils';
import { TypeMovementEnum } from '../../../core/enums/type-movement.enum';
import { Movement } from '../../../core/interfaces/movements.interface';
import { FilterDropdown } from '../../../core/interfaces/filter-dropdown.interface';
import { Saving } from '../../../core/interfaces/saving.interface';
import { FilterSaving } from '../../../core/enums/saving-filter.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DataViewModule, SelectModule, FormsModule, CardModule,
    Button ,CurrencyPipe, Skeleton
  ],
  templateUrl: './movements.component.html',
  styleUrl: './movements.component.css'
})
export class MovementsComponent implements OnInit, OnDestroy {
  private readonly _movementService = inject(MovementService);
  private readonly _savingService = inject(SavingService);
  private readonly _deviceService = inject(DeviceService);
  private readonly _activatedRouter = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  readonly _utils = inject(Utils);

  movements$ = this._movementService.getMovement(this.filterSaving, this.filterType);
  loading$ = this._movementService.loading$;
  
  private subscription?: Subscription;
  
  layout: 'list' | 'grid' = 'list';
  
  filterSaving?: Saving | undefined;
  savingsEnables$ = this._savingService.getSavings();
  allSavings$ = this._savingService.getSavings(FilterSaving.ALL);

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
      this.filterSaving = this.savingsEnables$().find(saving => saving.id === params['saving'])
      this.notifyFilter();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  goToNewMovement(type: 'deposito'|'retiro', saving: Saving){
    this._router.navigateByUrl(`/movimientos/${type}?ahorroId=${saving.id!}`);
  }

  isDeposit(movement: Movement): boolean{
    return movement.tipo === TypeMovementEnum.into;
  }

  isDisable(movement: Movement): boolean {
    return this.savingsEnables$().find(s => s.id === movement.idAhorros) ? false : true
  }

  getSavingName(idAhorro: string) {
    return this.allSavings$().find(saving => saving.id === idAhorro)?.nombre;
  }

  notifyFilter(){
    this.movements$ = this._movementService.getMovement(this.filterSaving, this.filterType);
  }
}
