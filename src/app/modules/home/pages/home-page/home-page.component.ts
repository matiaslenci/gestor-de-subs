import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  computed,
} from '@angular/core';
import { ISub } from 'src/app/core/interfaces';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';
import { OrderListService } from '../../services/order-list.service';
import { Order } from 'src/app/core/interfaces';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  showMensual: boolean = true;

  user = computed(() => this.authSrv.currentUser());

  subs = computed(() => this.subSrv.subs());

  monthlyPrice = computed<number>(() => {
    let precioMensual = 0;

    for (let sub of this.subSrv.subs()) {
      precioMensual = precioMensual + sub.price;
    }

    return precioMensual;
  });

  yearlyPrice = computed(() => {
    return this.monthlyPrice() * 12;
  });

  subsCount = computed(() => {
    return this.subs().length;
  });

  form: FormGroup = new FormGroup({});

  constructor(
    private subSrv: SubscripcionesService,
    private authSrv: AuthService,
    private orderSrv: OrderListService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.subSrv.getAllSubs();

    this.form = this.fb.group({
      order: Order.higher,
    });
  }

  tooglePrecioMensual(): void {
    this.showMensual = !this.showMensual;
    if (this.showMensual) {
    }
  }

  onChangeOrder() {
    this.orderSrv.order.set(this.order);
  }

  get order() {
    return this.form.get('order')?.value;
  }
}
