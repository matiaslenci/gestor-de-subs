import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  templateUrl: './subs-page.component.html',
  styleUrls: ['./subs-page.component.scss'],
})
export class SubsPageComponent {
  /**
   * Bool que inidica si ya agrego amigos a la subscripcion
   * Modifica el boton de compartir subscripción por otro si es true
   */
  compartido: boolean = false;

  /**
   * Oculta o muestra la contraseña
   */
  hidePassword: boolean = true;

  //TODO: Traer desde rest
  password = 'contraseña123';

  constructor(private _bottomSheet: MatBottomSheet) {}

  /**
   * Esta función se llama cuando se hace clic en el SVG.
   * Cambia el valor de hidePassword al valor opuesto de su estado actual.
   * Si hidePassword es false, se cambiará a true.
   */
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
