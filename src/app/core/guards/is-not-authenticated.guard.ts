import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AuthStatus } from '../interfaces';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authSrv = inject(AuthService);
  const router = inject(Router);

  if (authSrv.authStatus() === AuthStatus.authenticated) {
    router.navigateByUrl('');
    return false;
  }

  return true;
};
