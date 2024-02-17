import { Component, OnInit, computed } from '@angular/core';
import { ISub } from 'src/app/core/interfaces';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

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
  constructor(
    private subSrv: SubscripcionesService,
    private authSrv: AuthService
  ) {}
  ngOnInit(): void {
    this.subSrv.getAllSubs();
  }

  tooglePrecioMensual(): void {
    this.showMensual = !this.showMensual;
    if (this.showMensual) {
    }
  }
}
