import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { IRegister } from 'src/app/core/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = environment.api;

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.url}auth/login`, data).pipe(
      tap((res: any) => {
        localStorage.setItem(environment.pk + 'token', res.token);
      })
    );
  }

  register(data: IRegister) {
    return this.http.post(`${this.url}auth/register`, data).pipe(
      tap((res: any) => {
        localStorage.setItem(environment.pk + 'token', res.token);
      })
    );
  }
}
