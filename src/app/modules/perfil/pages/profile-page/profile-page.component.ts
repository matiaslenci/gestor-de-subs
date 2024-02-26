import { Component, computed } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  user = computed(() => this.authSrv.currentUser());

  constructor(private authSrv: AuthService, private router: Router) {}

  editRedirect() {
    this.router.navigateByUrl('perfil/edit');
  }

  configRedirect() {
    this.router.navigateByUrl('perfil/config');
  }
}
