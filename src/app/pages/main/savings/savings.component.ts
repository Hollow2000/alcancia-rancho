import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { SelectModule } from 'primeng/select';
import { DeviceService } from '../../../services/device.service';
import { Subscription } from 'rxjs';
import { SavingService } from '../../../services/saving.service';

interface FilterDropdown {
  id: string,
  nombre: string,
}

@Component({
  selector: 'app-savings',
  standalone: true,
  imports: [
    DataViewModule, SelectModule, FormsModule, CardModule,
    CurrencyPipe
  ],
  templateUrl: './savings.component.html',
  styleUrl: './savings.component.css'
})
export class SavingsComponent {
  private readonly _savingService = inject(SavingService);
  private readonly _deviceService = inject(DeviceService)

  savings$ = this._savingService.getSavings();

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
}
