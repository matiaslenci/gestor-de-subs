import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

@Component({
  templateUrl: './subs-page.component.html',
  styleUrls: ['./subs-page.component.scss'],
})
export class SubsPageComponent implements OnInit {
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

  /**
   * Subscripcion desde el rest
   */
  sub: any;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private subSrv: SubscripcionesService
  ) {}
  ngOnInit(): void {
    this.subSrv.getSubById(0).subscribe({
      next: (res: any) => {
        this.sub = res;
      },
      error: (error: Error) => {
        console.error(`ERROR: No se pudo obtener la subscripción${error}`);
      },
    });
  }

  /**
   * Esta función se llama cuando se hace clic en el SVG.
   * Cambia el valor de hidePassword al valor opuesto de su estado actual.
   * Si hidePassword es false, se cambiará a true.
   */
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
