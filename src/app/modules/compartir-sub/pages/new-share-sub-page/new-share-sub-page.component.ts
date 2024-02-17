import { Component, OnInit } from '@angular/core';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

@Component({
  templateUrl: './new-share-sub-page.component.html',
  styleUrls: ['./new-share-sub-page.component.scss'],
})
export class NewShareSubPageComponent implements OnInit {
  /**
   * Subscripcion desde el rest
   */
  sub: any;
  constructor(private subSrv: SubscripcionesService) {}
  ngOnInit(): void {
    this.subSrv.getSubById('').subscribe({
      next: (res: any) => {
        this.sub = res;
      },
      error: (error: Error) => {
        console.error(`ERROR: No se pudo obtener la subscripción${error}`);
      },
    });
  }
}
