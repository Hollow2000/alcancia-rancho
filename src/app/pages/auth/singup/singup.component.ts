import { Component, inject } from '@angular/core';
import { Card } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

interface FormRegister {
  name: FormControl<string | null>;
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

  form = this._fb.group<FormRegister>({
    name: this._fb.control('', [Validators.required]),
    email: this._fb.control('', [Validators.required, Validators.email]),
    password: this._fb.control('', [Validators.required]),
    secretKey: this._fb.control('', [Validators.required])
  });

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      if(this.form.value.secretKey === '123456'){
        this._messageService.add({
          severity: 'success',
          summary: 'Registro exitoso',
          detail: '¡Bienvenido a la Alcancia del Rancho!',
          life: 3000
        });
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

}
