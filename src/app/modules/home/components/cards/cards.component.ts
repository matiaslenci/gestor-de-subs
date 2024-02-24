import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
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
export class CardsComponent implements OnChanges {
  listSubs: ISub[] = [];

  currentDate!: Date;

  @Input({ required: true }) order: Order = Order.higher;

  constructor(
    public subsSrv: SubscripcionesService,
    public orderSrv: OrderListService
  ) {
    effect(() => {
      if (this.subsSrv.subs()) {
        this.setOrdenList();
      }
    });

    this.currentDate = new Date();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.order = changes['order'].currentValue;

    this.setOrdenList();
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

      difInDays = difInDays + 1;

      /*    if (difInDays > 0) {
        this.resetMonth(selectDate, sub);
      }
 */
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

  /*   resetMonth(selectDate: Date, sub: ISub) {
    // Sumar un mes a la fecha objetivo
    selectDate.setMonth(selectDate.getMonth() + 1);

    sub.expiration = selectDate.toISOString();

    if (sub.id) this.subsSrv.updateSub(sub, sub.id);

    // Recalcular los días restantes
    this.getDateExpiration(sub);
  } */

  setOrdenList(): void {
    if (this.order === Order.higher) {
      this.listSubs = [...this.orderSrv.sortSubsDescending()];
    } else if (this.order === Order.lower) {
      this.listSubs = [...this.orderSrv.sortSubsAscending()];
    }
  }
}
