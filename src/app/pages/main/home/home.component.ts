import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FirebaseError } from '@angular/fire/app';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Button],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
 private readonly router = inject(Router);
 private readonly _authService = inject(AuthService);
 private readonly _messageService = inject(MessageService);

 get userName() {
  return this._authService.getUserName();
 }

 async logOut(){
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
