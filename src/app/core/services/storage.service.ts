import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  get token() {
    return localStorage.getItem(environment.pk + 'token') || '';
  }

  set token(value: string) {
    localStorage.setItem(environment.pk + 'token', value);
  }

  removeToken() {
    localStorage.removeItem(environment.pk + 'token');
  }

  get order() {
    return localStorage.getItem(environment.pk + 'order') || '';
  }

  set order(value: string) {
    localStorage.setItem(environment.pk + 'order', value);
  }
}
