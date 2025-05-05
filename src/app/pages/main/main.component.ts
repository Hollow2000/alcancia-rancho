import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FirebaseError } from '@angular/fire/app';
import { MenuItem, MessageService } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { Menu } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FamilyService } from '../../services/family.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, Menubar, AvatarModule, Menu, DialogModule,
    ReactiveFormsModule, ButtonModule, InputTextModule],
  providers: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  private readonly router = inject(Router);
  private readonly _authService = inject(AuthService);
  private readonly _familyService = inject(FamilyService);
  private readonly _messageService = inject(MessageService);
  itemsNavigator: MenuItem[] | undefined;
  itemsAccount: MenuItem[] | undefined;

  loading$ = this._familyService.loading$;
  dialogFormNameVisible = false;
  nameForm = new FormGroup({
    uid: new FormControl<null | string>(this._authService.getUID() ?? null),
    nombre: new FormControl<null | string>(this._authService.getNames(this._authService.getUserName() ?? null).name),
    apellidos: new FormControl<null | string>(this._authService.getNames(this._authService.getUserName() ?? null).lastname),
  });

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
        icon: 'pi pi-pencil',
        command: () => { this.openDialog(); }
      },
      {
        label: 'Cambiar imagen',
        icon: 'pi pi-user'
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-sign-out',
        command: () => { this.logOut(); }
      }
    ];
  }

  openDialog() {
    this.dialogFormNameVisible = true;
  }

  cancelDialog() {
    this.dialogFormNameVisible = false;
  }

  submitDialog() {
    this.nameForm.markAllAsTouched();
    if (this.nameForm.valid) {
      this.updateName();
    }
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

  async updateName() {
    try {
      const { uid, nombre, apellidos } = this.nameForm.value;
      await this._authService.updateName(`${nombre?.trim()} ${apellidos?.trim()}`);
      await this._familyService.updateName(uid!, nombre!, apellidos!);
      this.dialogFormNameVisible = false;
      this._messageService.add({
        summary: "Nombre actualizado exitosamente",
        severity: "success"
      });
    } catch (error) {
      this._messageService.add({
        severity: 'error',
        summary: 'Ocurrio un error al actualizar tu nombre.',
        detail: (error as FirebaseError).message,
        sticky: true
      });
    }
  }
}
