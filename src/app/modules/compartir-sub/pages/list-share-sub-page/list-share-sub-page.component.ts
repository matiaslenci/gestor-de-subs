import { Component } from '@angular/core';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

@Component({
  templateUrl: './list-share-sub-page.component.html',
  styleUrls: ['./list-share-sub-page.component.scss'],
})
export class ListShareSubPageComponent {
  /**
   * Subscripcion desde el rest
   */
  sub: any;
  constructor(private subSrv: SubscripcionesService) {}
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
}
