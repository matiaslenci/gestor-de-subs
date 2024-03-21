import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material/material.module';

@Component({
  selector: 'app-boton-shared',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  template: `<mat-nav-list class="mat-nav-list">
    <a mat-list-item (click)="whatsAppLink()">
      <span matListItemTitle>WhatsApp</span>
    </a>
    <a mat-list-item (click)="copyLink()">
      <span matListItemTitle>Copiar Link</span>
    </a>
  </mat-nav-list> `,
  styleUrls: ['./boton-shared.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotonSharedComponent {
  whatsAppLink() {
    const urlActual = window.location.href;

    const enlaceWhatsApp = `https://api.whatsapp.com/send/?text=${urlActual}`;

    window.location.href = enlaceWhatsApp;
  }

  copyLink() {
    const urlActual = window.location.href;

    navigator.clipboard.writeText(urlActual);
  }
}
