import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const UrlGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const url = `sub/${route.url[0].path}`;

  sessionStorage.setItem('url', url);

  return true;
};
