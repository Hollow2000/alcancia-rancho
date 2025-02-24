import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { DataView } from 'primeng/dataview';
import { AvatarModule } from 'primeng/avatar';
import { Subscription } from 'rxjs';
import { DeviceService } from '../../../services/device.service';
import { Family, FamilyService } from '../../../services/family.service';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [Card, Button, DataView, AvatarModule],
  templateUrl: './family.component.html',
  styleUrl: './family.component.css'
})
export class FamilyComponent implements OnInit, OnDestroy {
  private readonly _deviceService = inject(DeviceService);
  private readonly _familyService = inject(FamilyService);
  
  family$ = this._familyService.getFamilyList();

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

  getIniciales(pepole: Family){
    return pepole.nombres[0] + pepole.apellidos[0];
  }
}
