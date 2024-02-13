import { Component, OnInit, computed } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  precioMensual: number = 0;

  precioAnual: number = 0;

  showMensual: boolean = true;

  user = computed(() => this.authSrv.currentUser());
  constructor(
    private subSrv: SubscripcionesService,
    private authSrv: AuthService
  ) {}
  ngOnInit(): void {
    for (let i = 0; i < this.subSrv.subscripciones.length; i++) {
      this.precioMensual =
        this.precioMensual + this.subSrv.subscripciones[i].precio;
    }
    this.precioAnual = this.precioMensual * 12;
  }

  tooglePrecioMensual(): void {
    this.showMensual = !this.showMensual;
    if (this.showMensual) {
    }
  }
}
