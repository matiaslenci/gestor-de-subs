import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { Observable, catchError, of, pipe, throwError } from 'rxjs';
import { IDefaultSub, ISub } from 'src/app/core/interfaces';
import { StorageService } from 'src/app/core/services/storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubscripcionesService {
  url: string = environment.api;

  subId: string | null = '';

  subCustom: ISub = {
    name: '',
    price: 0,
    logo: 'C',
    colorId: 8,
    color: { id: 8, name: 'naranja' },
    expiration: '',
    email: '',
    password: '',
  };

  subs = signal<ISub[]>([]);

  defaultSubs = signal<IDefaultSub[]>([]);

  estados: any[] = [];

  headers = new HttpHeaders({
    Authorization: `Bearer ${this.storageSrv.token}`,
  });

  constructor(private http: HttpClient, private storageSrv: StorageService) {}

  getDefaultSub(): void {
    this.http
      .get<IDefaultSub[]>(this.url + 'default-sub' + '?limit=100')
      .subscribe({
        next: (res) => {
          this.defaultSubs.set(res);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  getDefaultSubById(term: string): Observable<any> {
    if (term === 'custom') {
      // Retorna un observable con un objeto
      return of(this.subCustom);
    }

    return this.http.get(this.url + 'default-sub' + '/' + term);
  }

  getAllSubs(): void {
    this.http
      .get<ISub[]>(this.url + 'sub', { headers: this.headers })
      .subscribe({
        next: (res) => {
          this.subs.set(res);
        },
      });
  }

  getSubById(id: string): Observable<any> {
    return this.http.get<ISub>(this.url + 'sub/' + id);
  }

  getEstadosPago(): Observable<any> {
    this.estados = ['pendiente', 'pagado', 'vencido'];
    return of(this.estados);
  }

  saveSub(sub: any): Observable<any> {
    return this.http
      .post(this.url + 'sub', sub, { headers: this.headers })
      .pipe(
        catchError((err) =>
          throwError(
            () =>
              `${err.error.statusCode}(${err.error.error}) ${err.error.message}`
          )
        )
      );
  }

  updateSub(sub: any, id: string | null): Observable<any> {
    return this.http
      .patch(this.url + 'sub/' + id, sub, { headers: this.headers })
      .pipe(
        catchError((err) =>
          throwError(
            () =>
              `${err.error.statusCode}(${err.error.error}) ${err.error.message}`
          )
        )
      );
  }

  deleteSub(id: string | null): Observable<any> {
    return this.http
      .delete(this.url + 'sub/' + id, { headers: this.headers })
      .pipe(
        catchError((err) =>
          throwError(
            () =>
              `${err.error.statusCode}(${err.error.error}) ${err.error.message}`
          )
        )
      );
  }
}
