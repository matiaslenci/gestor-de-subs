import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo-sub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-sub.component.html',
  styleUrls: ['./logo-sub.component.scss'],
})
export class LogoSubComponent {
  /**
   * Objeto subscripciones que viene desde el Srv
   */
  @Input({ required: true }) sub: any;
}
