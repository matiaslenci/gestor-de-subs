import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/shared/utils';

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
        email: ['', Validators.required],
        password: ['', Validators.required],
        fullName: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: passwordMatchValidator() }
    );
  }

  register() {
    const { confirmPassword, ...dataRegister } = this.form.value;

    this.authSrv.register(dataRegister).subscribe({
      next: () => {
        this.form.reset();
        alert('Registro exitoso');
        //TODO: Utilizar toasts y redirigir al inicio
      },
      error: (err) => {
        console.error(err);
      },
    });
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
