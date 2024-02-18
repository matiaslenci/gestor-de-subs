import { NgModule } from '@angular/core';
import { SubsPageComponent } from './pages/subs-page/subs-page.component';
import { CommonModule } from '@angular/common';
import { SubscripcionRoutingModule } from './subscripcion-routing.module';

import { MaterialModule } from '../material/material.module';
import { GestionarSubPageComponent } from './pages/gestionar-sub-page/gestionar-sub-page.component';
import { BotonEliminarSubComponent } from 'src/app/shared/components/boton-eliminar-sub/boton-eliminar-sub.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoSubComponent } from 'src/app/shared/components/logo-sub/logo-sub.component';
import { AddInfoBtnComponent } from './components/add-info-btn/add-info-btn.component';

@NgModule({
  declarations: [SubsPageComponent, GestionarSubPageComponent, AddInfoBtnComponent],
  imports: [
    CommonModule,
    SubscripcionRoutingModule,
    MaterialModule,
    BotonEliminarSubComponent,
    FormsModule,
    ReactiveFormsModule,
    LogoSubComponent,
  ],
  exports: [SubsPageComponent],
})
export class SubscripcionModule {}
