import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { DeviceService } from '../../../services/device.service';
import { Subscription } from 'rxjs';
import { Movement, MovementService, TypeMovementEnum } from '../../../services/movement.service';
import { CurrencyPipe } from '@angular/common';

interface FilterDropdown {
  id: string,
  nombre: string,
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DataViewModule, SelectModule, FormsModule, CardModule,
    CurrencyPipe
  ],
  templateUrl: './movements.component.html',
  styleUrl: './movements.component.css'
})
export class MovementsComponent implements OnInit, OnDestroy {
  private readonly _movementService = inject(MovementService);
  private readonly _deviceService = inject(DeviceService)

  movements$ = this._movementService.getMovement();

  private subscription?: Subscription;
  
  layout: 'list' | 'grid' = 'list';
  
  filterSaving?: FilterDropdown | undefined;
  filterSavingOptions: FilterDropdown[] | undefined = [
    {
      id: '/ahorros/5Z3RBEfu05n1EA8DBtO1',
      nombre: 'Puerta'
    }
  ];

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
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  isDeposit(movement: Movement): boolean{
    return movement.tipo === TypeMovementEnum.into;
  }
}
