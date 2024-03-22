import { Component, computed } from '@angular/core';
import { AuthStatus } from '../interfaces';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  constructor(private authSrv: AuthService) {}

  public finishedAuthCheck = computed<boolean>(() => {
    if (this.authSrv.authStatus() === AuthStatus.checking) {
      return false;
    }
    return true;
  });
}
