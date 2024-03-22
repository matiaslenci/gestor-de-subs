import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
} from '@angular/core';
import { Order, ISub } from 'src/app/core/interfaces';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';
import { OrderListService } from '../../services/order-list.service';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  subs = computed(() => this.subsSrv.subs());

  listSubs = [...this.subs().sort((a, b) => a.price - b.price)];

  currentDate!: Date;

  constructor(
    public subsSrv: SubscripcionesService,
    public orderSrv: OrderListService
  ) {
    this.changeOrder();
    this.currentDate = new Date();
  }

  getDateExpiration(sub: ISub): string {
    if (sub.expiration) {
      const expiration = sub.expiration;
      const selectDate: Date = new Date(expiration);

      const difInMiliseconds: number =
        selectDate.getTime() - this.currentDate.getTime();

      let difInDays: number = Math.ceil(
        difInMiliseconds / (1000 * 60 * 60 * 24)
      );

      if (difInDays < 0) {
        this.resetMonth(sub);
      }

      if (difInDays > 1) {
        return `Vencimiento en ${difInDays} dias`;
      } else if (difInDays === 1) {
        return `Vencimiento en ${difInDays} dia`;
      } else {
        return `Vence hoy!`;
      }
    } else {
      return '';
    }
  }

  resetMonth(sub: ISub) {
    let updateSub = {
      name: sub.name,
      price: sub.price,
      expiration: sub.expiration,
      email: sub.email,
      logo: sub.logo,
      colorId: sub.colorId,
    };

    if (updateSub.expiration) {
      let selectDate = new Date(updateSub.expiration);

      // Sumar un mes a la fecha objetivo
      selectDate.setMonth(this.currentDate.getMonth() + 1);

      updateSub.expiration = selectDate.toISOString().split('T')[0];
      sub.expiration = selectDate.toISOString().split('T')[0];

      if (sub.id)
        this.subsSrv.updateSub(updateSub, sub.id).subscribe({
          error: (err) => {
            console.error(err);
          },
        });

      // Recalcular los días restantes
      this.getDateExpiration(sub);
    }
  }

  /**
   * Cambia el orden de la lista de mayor a menor
   */
  changeOrder() {
    effect(() => {
      if (this.orderSrv.order() === Order.higher) {
        this.listSubs = [...this.subs().sort((a, b) => b.price - a.price)];
      } else if (this.orderSrv.order() === Order.lower) {
        this.listSubs = [...this.subs().sort((a, b) => a.price - b.price)];
      }
    });
  }
}
