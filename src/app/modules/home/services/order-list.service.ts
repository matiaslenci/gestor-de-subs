import {
  Injectable,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { Order } from 'src/app/core/interfaces';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

@Injectable({
  providedIn: 'root',
})
export class OrderListService {
  subs = computed(() => this.subSrv.subs());

  order = signal(Order.higher);

  sortSubsAscending = computed(() => {
    return this.subs().sort((a, b) => a.price - b.price);
  });

  sortSubsDescending = computed(() => {
    return this.subs().sort((a, b) => b.price - a.price);
  });

  constructor(private subSrv: SubscripcionesService) {}
}
