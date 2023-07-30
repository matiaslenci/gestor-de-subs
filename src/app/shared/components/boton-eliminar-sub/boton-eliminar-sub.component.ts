import { Component } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { OpcionesEliminarComponent } from '../opciones-eliminar/opciones-eliminar.component';

@Component({
  selector: 'app-boton-eliminar-sub',
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule],
  templateUrl: './boton-eliminar-sub.component.html',
  styleUrls: ['./boton-eliminar-sub.component.scss'],
})
export class BotonEliminarSubComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(OpcionesEliminarComponent);
  }
}
