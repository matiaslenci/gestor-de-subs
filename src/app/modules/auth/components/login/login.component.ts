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

  constructor(
    private authSrv: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.form.valid) {
      this.authSrv.login(this.form.value).subscribe({
        next: () => {
          this.form.reset();
          console.log('Login exitoso'); //TODO: Utilizar toasts
          this.router.navigateByUrl('/inicio');
        },
        error: (err) => {
          console.error(err);
          console.log('Ocurrio un error!!'); //TODO: Utilizar toasts
        },
        complete() {
          console.log('exito');
        },
      });
    }
  }
}
