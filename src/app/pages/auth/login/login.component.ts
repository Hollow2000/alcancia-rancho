import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../services/auth.service';
import { FirebaseError } from '@angular/fire/app';
import { AUTH_ERROR } from '../../../core/constants/AuthFirebaseErrors';
import { RouterLink } from '@angular/router';

interface FormLogin {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports:  [Card, FloatLabel, PasswordModule, ButtonModule, InputTextModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  private readonly _fb = inject(FormBuilder);
  private readonly _messageService = inject(MessageService);
  private readonly _authService = inject(AuthService);

  form = this._fb.group<FormLogin>({
    email: this._fb.control('', [Validators.required, Validators.email]),
    password: this._fb.control('', [Validators.required])
  });

  async submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      await this.login();
    } else {
      this._messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor, revisa los campos marcados',
        life: 3000
      });
    }
  }

  private async login(){
    const {email, password} = this.form.value;
    await this._authService.login(email!, password!).then(() => {
      this._messageService.add({
        severity: 'success',
        summary: 'Registro exitoso',
        detail: '¡Bienvenido a la Alcancia del Rancho!',
        life: 3000
      });
    }).catch((error: FirebaseError) => {
      console.error(error);
      this._messageService.add({
        severity: 'error',
        summary: 'Error al acceder',
        detail: error.code === AUTH_ERROR.INVALID_LOGIN_CREDENTIALS ? "Correo o contraseña incorrectos" : error.message,
        life: 3000
      });
    })
  }

}
