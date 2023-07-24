import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-opciones-eliminar',
  templateUrl: './opciones-eliminar.component.html',
  styleUrls: ['./opciones-eliminar.component.scss'],
})
export class OpcionesEliminarComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<OpcionesEliminarComponent>
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
