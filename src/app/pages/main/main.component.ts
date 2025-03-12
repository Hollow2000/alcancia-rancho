import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FirebaseError } from '@angular/fire/app';
import { MenuItem, MessageService } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { Menu } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, Menubar, AvatarModule, Menu],
  providers: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  private readonly router = inject(Router);
  private readonly _authService = inject(AuthService);
  private readonly _messageService = inject(MessageService);
  itemsNavigator: MenuItem[] | undefined;
  itemsAccount: MenuItem[] | undefined;

  ngOnInit() {
    this.itemsNavigator = [
      {
        label: 'Ahorros',
        icon: 'pi pi-wallet',
        command: () => { this.router.navigateByUrl('ahorros') }
      },
      {
        label: 'Familiares',
        icon: 'pi pi-user',
        command: () => { this.router.navigateByUrl('familia') }
      },
      {
        label: 'Movimientos',
        icon: 'pi pi-arrow-right-arrow-left',
        items: [
          {
            label: 'Todos',
            icon: 'pi pi-arrow-right-arrow-left',
            command: () => { this.router.navigateByUrl('movimientos') }
          },
          {
            label: 'Retiros',
            icon: 'pi pi-upload',
            command: () => { this.router.navigateByUrl('movimientos?type=retiro') }
          },
          {
            label: 'Depositos',
            icon: 'pi pi-download',
            command: () => { this.router.navigateByUrl('movimientos?type=deposito') }
          }
        ]
      }
    ];

    this.itemsAccount = [
      {
        label: 'Modificar nombre',
        icon: 'pi pi-pencil'
      },
      {
        label: 'Cambiar imagen',
        icon: 'pi pi-user'
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-sign-out',
        command: () => { this.logOut() }
      }
    ];
  }

  get userName() {
    return this._authService.getUserName();
  }

  get userImage() {
    return this._authService.getUserImage();
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
        sticky: true
      });
    });
  }
}
