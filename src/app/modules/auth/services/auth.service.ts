import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import {
  AuthStatus,
  ICheckStatus,
  ILoginResponse,
  IRegister,
  IRegisterResponse,
  IUser,
} from 'src/app/core/interfaces';
import { environment } from 'src/environments/environment';

export type IResponse = ILoginResponse | IRegisterResponse;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url: string = environment.api + 'auth/';

  private _currentUser = signal<IUser | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor(private http: HttpClient, private router: Router) {}

  get token() {
    return localStorage.getItem(environment.pk + 'token') || '';
  }

  set token(value: string) {
    localStorage.setItem(environment.pk + 'token', value);
  }

  public validateJWT() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    this.http
      .get<ICheckStatus>(`${this.url}check-status`, {
        headers,
      })
      .subscribe({
        next: ({ user }) => {
          this._authStatus.set(AuthStatus.authenticated);
          this._currentUser.set(user);
        },
        error: (err) => {
          if (err.statusCode === 401) {
            this.logout();
          } else {
            console.error(err);
          }
        },
      });
  }

  public login(data: any) {
    return this.http.post<ILoginResponse>(`${this.url}login`, data).pipe(
      tap((res) => {
        this.saveCredentials(res);
      }),
      catchError((err) => throwError(() => err.error.message))
    );
  }

  public register(data: IRegister) {
    return this.http.post<IRegisterResponse>(`${this.url}register`, data).pipe(
      tap((res) => {
        this.saveCredentials(res);
      }),
      catchError((err) => throwError(() => err.error.message))
    );
  }

  private saveCredentials(res: IResponse) {
    const { token, user } = res;
    this._authStatus.set(AuthStatus.authenticated);
    this._currentUser.set(user);
    this.token = token;
  }

  private clearCredentials() {
    this._authStatus.set(AuthStatus.notAuthenticated);
    this._currentUser.set(null);
    this.token = '';
  }

  public logout() {
    this.clearCredentials();
    this.router.navigateByUrl('/auth/login');
  }
}
