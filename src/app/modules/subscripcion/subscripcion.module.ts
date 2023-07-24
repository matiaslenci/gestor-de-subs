import { NgModule } from '@angular/core';
import { SubsPageComponent } from './pages/subs-page/subs-page.component';
import { CommonModule } from '@angular/common';
import { SubscripcionRoutingModule } from './subscripcion-routing.module';
import { OpcionesEliminarComponent } from './components/opciones-eliminar/opciones-eliminar.component';
import { MaterialModule } from '../material/material.module';
import { GestionarSubPageComponent } from './pages/gestionar-sub-page/gestionar-sub-page.component';

@NgModule({
  declarations: [SubsPageComponent, OpcionesEliminarComponent, GestionarSubPageComponent],
  imports: [CommonModule, SubscripcionRoutingModule, MaterialModule],
  exports: [SubsPageComponent],
})
export class SubscripcionModule {}
