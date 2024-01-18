import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDefaultSub, ISub } from 'src/app/core/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubscripcionesService {
  defaultSubs: IDefaultSub[] = [];

  subscripciones: ISub[] = [
    {
      id: 0,
      name: 'Netflix',
      precio: 1000,
      logo: 'N',
      color: 'rojo',
      vencimiento: '2023-07-05',
      usuario: 'matias@gmail',
      password: 'password',
    },
    {
      id: 1,
      name: 'Spotify',
      precio: 1000,
      logo: 'S',
      color: 'verde',
      vencimiento: '2023-07-05',
      usuario: 'matias@gmail',
      password: 'password',
    },
    {
      id: 2,
      name: 'Disney+',
      precio: 1000,
      logo: 'D+',
      color: 'azul',
      vencimiento: '2023-07-05',
      usuario: 'matias@gmail',
      password: 'password',
    },
  ];

  estados: any[] = [];

  constructor(private http: HttpClient) {}

  getDefaultSub(): void {
    this.http.get<any>(environment.default + 'list').subscribe({
      next: (res) => {
        this.defaultSubs = res.data;
        console.log(this.defaultSubs);
      },
    });
  }

  getDefaultSubById(id: number): Observable<any> {
    return this.http.get(environment.default + 'list/' + id);
  }

  getSubById(id: number): Observable<any> {
    return of(this.subscripciones[id]);
  }

  getEstadosPago(): Observable<any> {
    this.estados = ['pendiente', 'pagado', 'vencido'];
    return of(this.estados);
  }
}
