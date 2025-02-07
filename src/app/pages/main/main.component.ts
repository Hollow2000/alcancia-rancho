import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FirebaseError } from '@angular/fire/app';
import { MenuItem, MessageService } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, Menubar],
  providers: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  private readonly router = inject(Router);
  private readonly _authService = inject(AuthService);
  private readonly _messageService = inject(MessageService);
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Ahorros',
        icon: 'pi pi-wallet',
        command: () => { this.router.navigateByUrl('ahorros') }
      },
      {
        label: 'Familiares',
        icon: 'pi pi-user',
        command: () => {this.router.navigateByUrl('familia')}
      },
      {
        label: 'Movimientos',
        icon: 'pi pi-arrow-right-arrow-left',
        command: () => {this.router.navigateByUrl('')},
        items: [
          {
            label: 'Retiros',
            icon: 'pi pi-dolar',
            command: () => {this.router.navigateByUrl('?type=retiro')}
          },
          {
            label: 'Ingresos',
            icon: 'pi pi-money-bil',
            command: () => {this.router.navigateByUrl('?type=ingreso')}
          }
        ]
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-sign-out',
        command: () => {this.logOut()}
      }
    ]
  }

  get userName() {
    return this._authService.getUserName();
  }

  async logOut() {
    await this._authService.logOut().then(() => {
      this.router.navigateByUrl('/auth/login');
      this._messageService.add({
        summary: "Sesión cerrada con exito."
      });
    }).catch((error: FirebaseError) => {
      this._messageService.add({
        severity: "error",
        summary: "Ocurrio un error al cerrar sesión.",
        detail: "Contacta al desarrollador. Codigo: " + error.code,
      });
    });
  }
}
