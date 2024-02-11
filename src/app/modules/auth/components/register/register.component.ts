import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  passwordMatchValidator,
  passwordValidator,
} from 'src/app/shared/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private authSrv: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, passwordValidator]],
        fullName: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: passwordMatchValidator() }
    );
  }

  register() {
    if (this.form.valid) {
      const { confirmPassword, ...dataRegister } = this.form.value;

      this.authSrv.register(dataRegister).subscribe({
        next: () => {
          this.form.reset();
          console.log('Registro exitoso');
          //TODO: Utilizar toasts y redirigir al inicio
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get password() {
    return this.form.get('password');
  }

  get email() {
    return this.form.get('email');
  }

  get fullName() {
    return this.form.get('fullName');
  }
}
