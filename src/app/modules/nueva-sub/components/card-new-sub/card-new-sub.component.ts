import { Component } from '@angular/core';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

@Component({
  selector: 'app-card-new-sub',
  templateUrl: './card-new-sub.component.html',
  styleUrls: ['./card-new-sub.component.scss'],
})
export class CardNewSubComponent {
  constructor(public subsSrv: SubscripcionesService) {}
}
