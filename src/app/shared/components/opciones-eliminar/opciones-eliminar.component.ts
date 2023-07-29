import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-opciones-eliminar',
  standalone: true,
  imports: [MatListModule],
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
