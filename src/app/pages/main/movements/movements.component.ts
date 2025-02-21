import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { DeviceService } from '../../../services/device.service';
import { Subscription } from 'rxjs';
import { MovementService } from '../../../services/movement.service';

interface SelectSaving {
  id: string,
  nombre: string,
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DataViewModule, Button, SelectModule, FormsModule, CardModule
  ],
  templateUrl: './movements.component.html',
  styleUrl: './movements.component.css'
})
export class MovementsComponent implements OnInit, OnDestroy {
  private readonly _movementService = inject(MovementService);
  private readonly _deviceService = inject(DeviceService);

  movements$ = this._movementService.getMovement();

  private subscription?: Subscription;
  
  layout: 'list' | 'grid' = 'list';
  
  filter?: SelectSaving | undefined;
  filterOptions: SelectSaving[] | undefined = [
    {
      id: '/ahorros/5Z3RBEfu05n1EA8DBtO1',
      nombre: 'Puerta'
    }
  ];

  movements = signal<any>([
    {
      cantidad: 100,
      descripcion: "Primer ahorro",
      familiar: "Saul Moedano",
      fecha: "10 de enero de 2025",
      idAhorros: "Puerta",
      tipo: "deposito"
    },
    {
      cantidad: 2500,
      descripcion: "asmdñamsñm amsldmñamsd ñasmdñ malsd",
      familiar: "Saul Emmanuel Moedano Miguel",
      fecha: "10 de enero de 2025",
      idAhorros: "Reparacion de la lozeta y pared del cuarto de baño",
      tipo: "deposito"
    },
    {
      cantidad: 100,
      descripcion: "Primer ahorro",
      familiar: "Saul Moedano",
      fecha: "10 de enero de 2025",
      idAhorros: "Puerta",
      tipo: "deposito"
    }
  ]);

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
