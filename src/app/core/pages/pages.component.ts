import { Component, computed } from '@angular/core';
import { AuthStatus } from '../interfaces';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  authStatus = computed(() => this.authSrv.authStatus());

  constructor(private authSrv: AuthService) {}

  public finishedAuthCheck = computed<boolean>(() => {
    if (this.authStatus() === AuthStatus.checking) {
      return false;
    }
    return true;
  });
}
