import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-boton-agregar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './boton-agregar.component.html',
  styleUrls: ['./boton-agregar.component.scss'],
})
export class BotonAgregarComponent {
  @Input({ required: true }) titulo: string = '';
  @Input({ required: true }) ruta: string = '';
}
