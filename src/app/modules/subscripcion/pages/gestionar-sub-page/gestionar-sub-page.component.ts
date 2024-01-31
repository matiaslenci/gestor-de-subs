import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IDefaultSub } from 'src/app/core/interfaces';

@Component({
  templateUrl: './gestionar-sub-page.component.html',
  styleUrls: ['./gestionar-sub-page.component.scss'],
})
export class GestionarSubPageComponent implements OnInit, OnDestroy {
  formSub: FormGroup = new FormGroup({});

  /**
   * Subscription de rxjs para guardar subscripciones y desuscribirse en el
   * NgOnDestroy
   */
  private subscriptions!: Subscription[];

  sub: any;
  estados: any;

  /**
   * id de la suscripción que se recupera por query params para
   * setear subscripción
   */
  id: string | null = '';

  /**
   * Bool que inidica si ya agrego amigos a la subscripcion
   * Modifica el boton de compartir subscripción por otro si es true
   */
  compartido: boolean = true;

  /**
   * Oculta o muestra la contraseña
   */
  hidePassword: boolean = true;

  /**
   * Cuando se quiere editar una subscripción esta en true
   * Cuando se crea una nueva sub se setea en false y resetea todos los campos
   * y oculta el boton de eliminar
   */
  editMode = false;

  constructor(
    public subSrv: SubscripcionesService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    this.formSub = this.fb.group({
      nombre: ['', Validators.required],
      estado: '',
      precio: ['', Validators.required],
      vencimiento: '',
      usuario: '',
      password: '',
    });

    if ((this.editMode = false)) {
      this.subSrv.getDefaultSubById(this.id ?? '').subscribe({
        next: (res: any) => {
          this.sub = res;

          this.formSub.patchValue(res);
        },
        error: (error: Error) => {
          console.error(`ERROR: No se pudo obtener la subscripción${error}`);
        },
      });
    }

    this.subSrv.getDefaultSubById(this.id ?? '').subscribe({
      next: (res: IDefaultSub) => {
        this.sub = res;
        console.log(res);

        this.formSub.patchValue({ nombre: res.name });
      },
      error: (error: Error) => {
        console.error(`ERROR: No se pudo obtener la subscripción${error}`);
      },
    });

    this.subSrv.getEstadosPago().subscribe({
      next: (res: any) => {
        this.estados = res;
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

  /**
   * Permite editar el icono del la sub
   */
  editIcon() {}
  ngOnDestroy(): void {}
}
