import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Router } from '@angular/router';
import { ISub } from 'src/app/core/interfaces';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

@Component({
  templateUrl: './subs-page.component.html',
  styleUrls: ['./subs-page.component.scss'],
})
export class SubsPageComponent implements OnInit {
  id: string | null = '';
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
  password = '';

  /**
   * Subscripcion desde el rest
   */
  sub!: ISub;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private subSrv: SubscripcionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    this.subSrv.getSubById(this.id ?? '').subscribe({
      next: (res: any) => {
        this.sub = res;
        this.password = res.password;
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

  onEdit() {
    this.router.navigate(['/sub/edit', this.id]);
  }
}
