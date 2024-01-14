import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISub } from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SubscripcionesService {
  defaultSubs: any[] = [
    {
      id: 0,
      nombre: 'Netflix',
      precio: null,
      inicial: '',
      color: 'rojo',
    },
    {
      id: 1,
      nombre: 'Spotify',
      precio: null,
      inicial: '',
      color: 'verde',
    },
    {
      id: 2,
      nombre: 'Disney+',
      precio: null,
      inicial: '',
      color: 'azul',
    },
  ];

  subscripciones: ISub[] = [
    {
      id: 0,
      nombre: 'Netflix',
      precio: 1000,
      inicial: 'N',
      color: 'rojo',
      vencimiento: '2023-07-05',
      estado: 'pendiente',
      usuario: 'matias@gmail',
      password: 'password',
    },
    {
      id: 1,
      nombre: 'Spotify',
      precio: 1000,
      inicial: 'S',
      color: 'verde',
      vencimiento: '2023-07-05',
      estado: 'pendiente',
      usuario: 'matias@gmail',
      password: 'password',
    },
    {
      id: 2,
      nombre: 'Disney+',
      precio: 1000,
      inicial: 'D+',
      color: 'azul',
      vencimiento: '2023-07-05',
      estado: 'pendiente',
      usuario: 'matias@gmail',
      password: 'password',
    },
  ];

  estados: any[] = [];

  getDefaultSubById(id: number): Observable<any> {
    return of(this.defaultSubs[id]);
  }

  getSubById(id: number): Observable<any> {
    return of(this.subscripciones[id]);
  }

  getEstadosPago(): Observable<any> {
    this.estados = ['pendiente', 'pagado', 'vencido'];
    return of(this.estados);
  }
}
