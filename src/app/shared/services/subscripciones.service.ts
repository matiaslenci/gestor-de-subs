import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscripcionesService {
  defaultSubs: any[] = [
    {
      id: 0,
      nombre: 'Netflix',
      precio: null,
      img: 'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png',
      color: 'rojo',
    },
    {
      id: 1,
      nombre: 'Spotify',
      precio: null,
      img: '../../../assets/logos/spotify.png',
      color: 'verde',
    },
    {
      id: 2,
      nombre: 'Disney+',
      precio: null,
      img: 'https://download.logo.wine/logo/Disney%2B/Disney%2B-White-Logo.wine.png',
      color: 'azul',
    },
  ];

  subscripciones: any = [
    {
      id: 0,
      nombre: 'Netflix',
      precio: 1000,
      img: 'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png',
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
      img: '../../../assets/logos/spotify.png',
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
      img: 'https://download.logo.wine/logo/Disney%2B/Disney%2B-White-Logo.wine.png',
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
