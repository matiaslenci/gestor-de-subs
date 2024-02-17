import { Component, OnInit, computed } from '@angular/core';
import { ISub } from 'src/app/core/interfaces';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  subs = computed(() => this.subsSrv.subs());

  constructor(public subsSrv: SubscripcionesService) {}
}
