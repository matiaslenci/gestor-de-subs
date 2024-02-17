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

  getDateExpiration(sub: ISub): string {
    const fechaObjetivoString = sub.expiration;
    if (fechaObjetivoString) {
      const fechaObjetivo = new Date(
        parseInt(fechaObjetivoString.split('-')[2]), // Año
        parseInt(fechaObjetivoString.split('-')[1]) - 1, // Mes (restamos 1 porque los meses en JavaScript son de 0 a 11)
        parseInt(fechaObjetivoString.split('-')[0]) // Día
      );

      const diferenciaEnMilisegundos =
        fechaObjetivo.getTime() - this.currentDate.getTime();

      // Convierte la diferencia a días
      const diasFaltantes = Math.ceil(
        diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)
      );

      return `Vencimiento en ${diasFaltantes} dias`;
    } else {
      return '';
    }
  }
}
