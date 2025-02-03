import { Component, inject } from '@angular/core';
import { Card } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../services/auth.service';

interface FormRegister {
  name: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  secretKey: FormControl<string | null>;
}

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [Card, FloatLabel, PasswordModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export default class SingupComponent {
  private readonly _fb = inject(FormBuilder);
  private readonly _messageService = inject(MessageService);
  private readonly _authService = inject(AuthService);

  form = this._fb.group<FormRegister>({
    name: this._fb.control('', [Validators.required]),
    lastName: this._fb.control('',[Validators.required]),
    email: this._fb.control('', [Validators.required, Validators.email]),
    password: this._fb.control('', [Validators.required]),
    secretKey: this._fb.control('', [Validators.required])
  });

  async submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      if(this.form.value.secretKey === '123456'){
        await this.createAccount();
      }else{
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'La clave secreta no es correcta',
          life: 3000
        });
      }
      
    }else{
      this._messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor, revisa los campos marcados',
        life: 3000
      });
    }
  }

  private async createAccount() {
    try {
      const { name, email, password } = this.form.value;
      const credential = await this._authService.singUp(email!, password!);
      await this._authService.updateName(name!);
      console.log(credential);
      
      this._messageService.add({
        severity: 'success',
        summary: 'Registro exitoso',
        detail: '¡Bienvenido a la Alcancia del Rancho!',
        life: 3000
      });
    } catch (error) {
      console.log(error);
      
      this._messageService.add({
        severity: 'error',
        summary: 'Error al crear cuenta',
        detail: 'Por favor comunicate con el desarrollador',
        life: 3000
      });
    }
  }

}
