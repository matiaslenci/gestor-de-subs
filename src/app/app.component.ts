import { Component, OnInit, computed, effect } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AuthService } from './modules/auth/services/auth.service';
import { AuthStatus } from './core/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gestor-subs';

  url = sessionStorage.getItem('url') || '';

  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {
    initFlowbite();
  }

  public authStatusChanged = effect(() => {
    switch (this.authSrv.authStatus()) {
      case AuthStatus.checking:
        return;
      case AuthStatus.authenticated:
        if (this.url) {
          this.router.navigateByUrl(this.url);
        } else {
          this.router.navigateByUrl('');
        }
        sessionStorage.removeItem('url');

        return;
      case AuthStatus.notAuthenticated:
        return;
    }
  });
}
