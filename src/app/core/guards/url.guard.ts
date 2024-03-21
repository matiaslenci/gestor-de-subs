import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AuthStatus } from '../interfaces';

export const UrlGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  localStorage.setItem('url', `sub/${route.url[0].path}`);
  console.log(`sub/${route.url[0].path}`);

  return true;
};
