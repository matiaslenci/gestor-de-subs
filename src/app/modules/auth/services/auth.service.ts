import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import {
  AuthStatus,
  ICheckStatus,
  ILoginResponse,
  IRegister,
  IRegisterResponse,
  IUser,
} from 'src/app/core/interfaces';
import { StorageService } from 'src/app/core/services/storage.service';
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

  constructor(private http: HttpClient, private storageSrv: StorageService) {
    this.checkAuthStatus().subscribe();
  }

  public checkAuthStatus(): Observable<boolean> {
    if (!this.storageSrv.token) {
      this.logout();

      return of(false);
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.storageSrv.token}`,
    });

    return this.http
      .get<ICheckStatus>(`${this.url}check-status`, {
        headers,
      })
      .pipe(
        map((res) => {
          this.saveCredentials(res);
          return true;
        }),
        catchError(() => {
          this.logout();
          return of(false);
        })
      );
  }

  public register(data: IRegister) {
    return this.http.post<IRegisterResponse>(`${this.url}register`, data).pipe(
      tap((res) => {
        this.logout();
        this.saveCredentials(res);
      }),
      catchError((err) => throwError(() => err.error.message))
    );
  }

  public login(data: any) {
    this.storageSrv.removeToken();
    return this.http.post<ILoginResponse>(`${this.url}login`, data).pipe(
      tap((res) => {
        this.saveCredentials(res);
      }),
      catchError((err) => throwError(() => err.error.message))
    );
  }
  public logout() {
    this._authStatus.set(AuthStatus.notAuthenticated);
    this._currentUser.set(null);
    this.storageSrv.removeToken();
  }

  private saveCredentials(res: IResponse) {
    const { token, user } = res;
    this._authStatus.set(AuthStatus.authenticated);
    this._currentUser.set(user);
    this.storageSrv.token = token;
  }
}
