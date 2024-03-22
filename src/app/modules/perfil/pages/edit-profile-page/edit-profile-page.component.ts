import { Component, OnInit, computed } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss'],
})
export class EditProfilePageComponent implements OnInit {
  user = computed(() => this.authSrv.currentUser());
  form: FormGroup = new FormGroup({});

  constructor(
    private authSrv: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: [this.user()?.fullName || '', Validators.required],
      email: [
        this.user()?.email || '',
        [Validators.required, Validators.email],
      ],
      avatar: [
        this.user()?.avatar.toUpperCase() || '',
        [Validators.required, Validators.maxLength(2)],
      ],
    });
  }

  updateUser() {
    if (this.form.valid) {
      this.authSrv.update(this.form.value).subscribe({
        next: () => {
          this.form.reset();
          //TODO: añadir alert
          this.redirectProfile();
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  redirectProfile() {
    this.router.navigate(['/perfil']);
  }

  get avatar() {
    return this.form.get('avatar');
  }

  get fullName() {
    return this.form.get('fullName');
  }

  get email() {
    return this.form.get('email');
  }
}
