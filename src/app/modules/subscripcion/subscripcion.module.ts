import { NgModule } from '@angular/core';
import { SubsPageComponent } from './pages/subs-page/subs-page.component';
import { CommonModule } from '@angular/common';
import { SubscripcionRoutingModule } from './subscripcion-routing.module';

import { MaterialModule } from '../material/material.module';
import { GestionarSubPageComponent } from './pages/gestionar-sub-page/gestionar-sub-page.component';
import { BotonEliminarSubComponent } from 'src/app/shared/components/boton-eliminar-sub/boton-eliminar-sub.component';

@NgModule({
  declarations: [SubsPageComponent, GestionarSubPageComponent],
  imports: [
    CommonModule,
    SubscripcionRoutingModule,
    MaterialModule,
    BotonEliminarSubComponent,
  ],
  exports: [SubsPageComponent],
})
export class SubscripcionModule {}
