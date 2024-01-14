import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISub } from 'src/app/core/interfaces';

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
  @Input({ required: true }) sub!: ISub;
}
