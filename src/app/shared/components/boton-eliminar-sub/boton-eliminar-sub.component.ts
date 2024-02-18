import { Component, Input } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { OpcionesEliminarComponent } from '../opciones-eliminar/opciones-eliminar.component';
import { SubscripcionesService } from '../../services/subscripciones.service';

@Component({
  selector: 'app-boton-eliminar-sub',
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule],
  templateUrl: './boton-eliminar-sub.component.html',
  styleUrls: ['./boton-eliminar-sub.component.scss'],
})
export class BotonEliminarSubComponent {
  @Input({ required: true }) id: string | null = '';

  constructor(
    private _bottomSheet: MatBottomSheet,
    private subSrv: SubscripcionesService
  ) {}

  openBottomSheet(): void {
    this.subSrv.subId = this.id;
    this._bottomSheet.open(OpcionesEliminarComponent);
  }
}
