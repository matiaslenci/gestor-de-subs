import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authSrv: AuthService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    /*     if (req.url.includes('/check-status')) {

      return next.handle(req);
    }

    const token = this.authSrv.token;

    if (!token) {
      return next.handle(req);
    }

    if (!req.url.includes(environment.api + '/auth')) {

      const reqClone = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      return next.handle(reqClone);
    } */
    return next.handle(req);
  }
}
