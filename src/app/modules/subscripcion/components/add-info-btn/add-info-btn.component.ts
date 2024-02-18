import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-info-btn',
  template: `
    <span
      class="text-sm hover:bg-gray-500 font-medium cursor-pointer me-2 px-2.5 py-1.5 rounded bg-gray-700 text-gray-300"
      >Agregar +</span
    >
  `,
})
export class AddInfoBtnComponent {
  constructor(private router: Router) {}
}
