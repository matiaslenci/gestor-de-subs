import { Component, OnInit } from '@angular/core';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  /**
   * Gasto total mensual de subscripciones
   */
  precioMensual: number = 0;

  /**
   * Gasto total anual de subscripciones
   */
  precioAnual: number = 0;

  showMensual: boolean = true;
  constructor(private subSrv: SubscripcionesService) {}
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
