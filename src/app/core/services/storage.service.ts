import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
}
