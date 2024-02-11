import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDefaultSub, ISub } from 'src/app/core/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubscripcionesService {
  url: string = environment.api;

  defaultSubs: IDefaultSub[] = [];

  subscripciones: ISub[] = [
    {
      id: 0,
      nombre: 'Netflix',
      precio: 1000,
      logo: 'N',
      color: { id: 1, name: 'rojo' },

      vencimiento: '2023-07-05',
      usuario: 'matias@gmail',
      password: 'password',
    },
    {
      id: 1,
      nombre: 'Spotify',
      precio: 1000,
      logo: 'S',
      color: { id: 3, name: 'verde' },

      vencimiento: '2023-07-05',
      usuario: 'matias@gmail',
      password: 'password',
    },
    {
      id: 2,
      nombre: 'Disney+',
      precio: 1000,
      logo: 'D+',
      color: { id: 2, name: 'azul' },
      vencimiento: '2023-07-05',
      usuario: 'matias@gmail',
      password: 'password',
    },
  ];

  estados: any[] = [];

  constructor(private http: HttpClient) {}

  getDefaultSub(): void {
    this.http
      .get<IDefaultSub[]>(this.url + 'default-sub' + '?limit=100')
      .subscribe({
        next: (res) => {
          this.defaultSubs = res;
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  getDefaultSubById(id: string): Observable<any> {
    console.log(id);

    return this.http.get(this.url + 'default-sub' + '/' + id);
  }

  getSubById(id: number): Observable<any> {
    return of(this.subscripciones[id]);
  }

  getEstadosPago(): Observable<any> {
    this.estados = ['pendiente', 'pagado', 'vencido'];
    return of(this.estados);
  }
}
