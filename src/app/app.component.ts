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

  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {
    initFlowbite();
  }

  public authStatusChanged = effect(() => {
    switch (this.authSrv.authStatus()) {
      case AuthStatus.checking:
        return;
      case AuthStatus.authenticated:
        this.router.navigateByUrl('');
        return;
      case AuthStatus.notAuthenticated:
        console.log('paso');

        // this.router.navigateByUrl('/auth/login');
        return;
    }
  });
}
