import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SubscripcionesService } from '../../services/subscripciones.service';

@Component({
  selector: 'app-opciones-eliminar',
  standalone: true,
  imports: [MatListModule, RouterModule],
  templateUrl: './opciones-eliminar.component.html',
  styleUrls: ['./opciones-eliminar.component.scss'],
})
export class OpcionesEliminarComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<OpcionesEliminarComponent>,
    private subSrv: SubscripcionesService,
    private router: Router
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  deleteSub(event: MouseEvent): void {
    this.subSrv.deleteSub(this.subSrv.subId).subscribe({
      next: () => {
        this.openLink(event);
        this.router.navigate(['/']);
      },
      error: (error: Error) => {
        this._bottomSheetRef.dismiss();
        console.error(`ERROR: ${error}`);
      },
    });
  }
}
