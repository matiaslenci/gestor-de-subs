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
  currentDate = new Date();

  constructor(public subsSrv: SubscripcionesService) {}

  getDateExpiration(sub: ISub) {
    if (sub.expiration) {
      const fechaElegida = sub.expiration;
      // Convertir la cadena de fecha a un objeto de tipo Date
      const fechaSeleccionada: Date = new Date(fechaElegida);

      // Calcular la diferencia en milisegundos
      const diferenciaEnMilisegundos: number =
        fechaSeleccionada.getTime() - this.currentDate.getTime();

      // Convertir la diferencia a días
      const diferenciaEnDias: number = Math.floor(
        diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)
      );

      return `Vencimiento en ${diferenciaEnDias} dias`;
    } else {
      return '';
    }
  }
}
