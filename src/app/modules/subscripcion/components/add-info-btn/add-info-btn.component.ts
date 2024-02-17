import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-info-btn',
  template: `
    <span
      (click)="onEdit()"
      class="text-sm font-medium me-2 px-2.5 py-1 rounded bg-gray-700 text-gray-300"
      >Agregar +</span
    >
  `,
})
export class AddInfoBtnComponent {
  @Input({ required: true }) id: string | null = '';

  constructor(private router: Router) {}

  onEdit() {
    this.router.navigate(['/edit/' + this.id]);
  }
}
