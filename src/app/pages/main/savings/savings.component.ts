import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DeviceService } from '../../../services/device.service';
import { Subscription } from 'rxjs';
import { Saving, SavingService } from '../../../services/saving.service';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';
import { Skeleton } from 'primeng/skeleton';
import { Utils } from '../../../Utils/utils';

interface FilterDropdown {
  id: string,
  nombre: string,
}

@Component({
  selector: 'app-savings',
  standalone: true,
  imports: [
    DataViewModule, Button, FormsModule, CardModule,
    CurrencyPipe, Skeleton
  ],
  templateUrl: './savings.component.html',
  styleUrl: './savings.component.css'
})
export class SavingsComponent {
  private readonly _savingService = inject(SavingService);
  private readonly _deviceService = inject(DeviceService)
  private readonly _router = inject(Router);
  readonly _utils = inject(Utils);

  savings$ = this._savingService.getSavings();
  loading$ = this._savingService.loading$;

  private subscription?: Subscription;
  
  layout: 'list' | 'grid' = 'list';

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

  details(saving: Saving) {
    this._router.navigateByUrl('movimientos?saving=' + saving.id)
  }

  get totalSaving(){
    let total = 0;
    this.savings$().forEach(saving => {
      total += Number(saving.cantidad);
    })
    return total;
  }
}
