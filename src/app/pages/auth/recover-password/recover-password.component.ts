import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FirebaseError } from '@angular/fire/app';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [Card, Button, InputTextModule, FloatLabel, ReactiveFormsModule],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.css'
})
export default class RecoverPasswordComponent {
  private readonly _authService = inject(AuthService);
  private readonly _fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly _messageService = inject(MessageService);

  emailForm = this._fb.group({
    email: new FormControl<string | null>(null,[Validators.required, Validators.email])
  })

  async sendEmail(){
    this.emailForm.markAllAsTouched();
    if(this.emailForm.valid){
      try {
        await this._authService.recoverPassword(this.emailForm.value.email!);
        this._messageService.add({
          severity: 'successful',
          summary: 'Correo de recuperación enviado correctamente',
          detail: 'Ve a tu correo electronico y sigue las instrucciones. (Verifica la bandeja de spam)'
        });
        this.router.navigateByUrl('/auth/login');
      } catch (error) {
        this._messageService.add({
          severity: 'error',
          summary: 'Ocurrio un error al enviar el correo de recuperación.',
          detail: (error as FirebaseError).message,
          sticky: true
        });
      }
    }
  }
}
