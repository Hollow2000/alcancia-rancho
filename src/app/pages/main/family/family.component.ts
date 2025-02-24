import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { DataView } from 'primeng/dataview';
import { AvatarModule } from 'primeng/avatar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Subscription } from 'rxjs';
import { DeviceService } from '../../../services/device.service';
import { Family, FamilyService } from '../../../services/family.service';
import { InputText } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [Card, Button, DataView, AvatarModule, IconFieldModule, InputIconModule, InputText, FormsModule],
  templateUrl: './family.component.html',
  styleUrl: './family.component.css'
})
export class FamilyComponent implements OnInit, OnDestroy {
  private readonly _deviceService = inject(DeviceService);
  private readonly _familyService = inject(FamilyService);
  
  family$ = this._familyService.getFamilyList();
  filter = '';

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

  onFilter(){
    this.family$ = signal<Family[]>(
      this._familyService.getFamilyList()().filter(family => 
        family.nombres.toLowerCase().includes(this.filter.toLowerCase()) || 
        family.apellidos.toLowerCase().includes(this.filter.toLowerCase())
      )
    );
  }
}
