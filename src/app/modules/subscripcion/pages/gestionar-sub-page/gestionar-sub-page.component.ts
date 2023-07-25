import { Component } from '@angular/core';

@Component({
  templateUrl: './gestionar-sub-page.component.html',
  styleUrls: ['./gestionar-sub-page.component.scss'],
})
export class GestionarSubPageComponent {
  editIcon() {}
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
   * Cuando se quiere editar una subscripción esta en true
   * Cuando se crea una nueva sub se setea en false y resetea todos los campos
   * y oculta el boton de eliminar
   */
  editMode = true;
  /**
   * Esta función se llama cuando se hace clic en el SVG.
   * Cambia el valor de hidePassword al valor opuesto de su estado actual.
   * Si hidePassword es false, se cambiará a true.
   */
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
