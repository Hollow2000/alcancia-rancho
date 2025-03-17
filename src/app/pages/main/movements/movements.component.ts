import { Component, inject, OnDestroy, OnInit, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { DeviceService } from '../../../services/device.service';
import { Subscription } from 'rxjs';
import { MovementService } from '../../../services/movement.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
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
import { MessageService } from 'primeng/api';
import { FirebaseError } from '@angular/fire/app';
import { PopoverModule } from 'primeng/popover';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DataViewModule, SelectModule, FormsModule, CardModule,
    Button ,CurrencyPipe, Skeleton, PopoverModule, AsyncPipe
  ],
  templateUrl: './movements.component.html',
  styleUrl: './movements.component.css'
})
export class MovementsComponent implements OnInit, OnDestroy {
  private readonly _movementService = inject(MovementService);
  private readonly _savingService = inject(SavingService);
  private readonly _deviceService = inject(DeviceService);
  private readonly _activatedRouter = inject(ActivatedRoute);
  private readonly _messageService = inject(MessageService);
  private readonly _router = inject(Router);
  readonly _utils = inject(Utils);

  movements$: Signal<Movement[]> = signal([]);
  loading$ = this._movementService.loading$;
  
  private subscription?: Subscription;
  
  layout: 'list' | 'grid' = 'list';

  isAdmin = inject(AuthService).isAdmin();
  
  filterSaving?: Saving | undefined;
  allSavings$: Signal<Saving[]> = signal([]);

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

  async ngOnInit(): Promise<void> {
    this.subscription = this._deviceService.isMobile$.subscribe(
      (isMobile) => {
        this.layout = isMobile ? 'list' : 'grid';
      }
    );
    try {
      this.allSavings$ = await this._savingService.getSavings(FilterSaving.ALL);
      this._activatedRouter.queryParams.subscribe(params => {
        this.filterType = this.filterTypeOptions?.find(type => type.id === params['type']);
        this.filterSaving = this.allSavings$().find(saving => saving.id === params['saving'])
      });
      this.notifyFilter();
    } catch (error) {
      this._messageService.add({
        severity: 'error',
        summary: 'Ocurrio un error',
        detail: (error as FirebaseError).message,
        sticky: true
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get numFiltersON(): string {
    let count = 0;
    if (this.filterSaving) {count++;}
    if (this.filterType) {count++;}
    return count > 0 ? count.toString() : '';
  }

  goToNewMovement(type: 'deposito'|'retiro', saving: Saving){
    this._router.navigateByUrl(`/movimientos/${type}?ahorroId=${saving.id!}`);
  }

  isDeposit(movement: Movement): boolean{
    return movement.tipo === TypeMovementEnum.into;
  }

  isActive(movement: Movement): boolean {
    return this.allSavings$().find(s => s.id === movement.idAhorros)?.activo!
  }

  getSavingName(idAhorro: string) {
    return this.allSavings$().find(saving => saving.id === idAhorro)?.nombre;
  }

  async notifyFilter(){
    try {
      this.movements$ = await this._movementService.getMovement(this.filterSaving, this.filterType);
    }catch (error) {
      this._messageService.add({
        severity: 'error',
        summary: 'Ocurrio un error al obtener el listado de ahorros',
        detail: (error as FirebaseError).message,
        sticky: true
      });
    }
  }
}
