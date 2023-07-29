import { Component } from '@angular/core';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  constructor(public subsSrv: SubscripcionesService) {}
}
