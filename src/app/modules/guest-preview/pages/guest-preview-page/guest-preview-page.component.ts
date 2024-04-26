import { Component, computed } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Order } from 'src/app/core/interfaces';
import { StorageService } from 'src/app/core/services/storage.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { OrderListService } from 'src/app/modules/home/services/order-list.service';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

@Component({
  selector: 'app-guest-preview-page',
  templateUrl: './guest-preview-page.component.html',
  styleUrls: ['./guest-preview-page.component.scss'],
})
export class GuestPreviewPageComponent {
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
    private fb: FormBuilder,
    private storageSrv: StorageService
  ) {}

  ngOnInit(): void {
    this.subSrv.getAllSubs();

    this.form = this.fb.group({
      order: this.storageSrv.order || Order.higher,
    });

    this.orderSrv.order.set(this.order);
  }

  tooglePrecioMensual(): void {
    this.showMensual = !this.showMensual;
    if (this.showMensual) {
    }
  }

  onChangeOrder() {
    this.orderSrv.order.set(this.order);
    this.storageSrv.order = this.order;
  }

  get order() {
    return this.form.get('order')?.value;
  }
}
