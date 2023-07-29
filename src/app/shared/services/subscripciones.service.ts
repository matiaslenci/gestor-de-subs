import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscripcionesService {
  subscripciones: any = [
    {
      nombre: 'Netflix',
      precio: 1000,
      img: 'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png',
      color: 'rojo',
    },
    {
      nombre: 'Spotify',
      precio: 1000,
      img: 'https://download.logo.wine/logo/Spotify/Spotify-Icon-Logo.wine.png',
      color: 'verde',
    },
    {
      nombre: 'Disney+',
      precio: 1000,
      img: 'https://download.logo.wine/logo/Disney%2B/Disney%2B-White-Logo.wine.png',
      color: 'azul',
    },
  ];
}
