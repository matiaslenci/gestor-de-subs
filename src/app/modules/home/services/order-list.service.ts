import {
  Injectable,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { ISub } from 'src/app/core/interfaces';
import { Order } from 'src/app/core/interfaces/order.enum';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

@Injectable({
  providedIn: 'root',
})
export class OrderListService {
  order: WritableSignal<Order> = signal(Order.higher);

  subs = computed(() => this.subSrv.subs());

  sortSubsAscending = computed(() => {
    return this.subs().sort((a, b) => a.price - b.price);
  });

  sortSubsDescending = computed(() => {
    return this.subs().sort((a, b) => b.price - a.price);
  });

  constructor(private subSrv: SubscripcionesService) {}
}
