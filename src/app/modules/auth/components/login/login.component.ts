import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup = new FormGroup({});
  errorLogin = false;

  constructor(
    private authSrv: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  login() {
    if (this.form.valid) {
      this.authSrv.login(this.form.value).subscribe({
        next: () => {
          this.form.reset();
          console.log('Login exitoso'); //TODO: Utilizar toasts
          this.errorLogin = true;
          this.router.navigateByUrl('/inicio');
        },
        error: (err) => {
          console.error(err);
          this.errorLogin = true;
        },
        complete() {
          console.log('exito');
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
