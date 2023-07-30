import { NgModule } from '@angular/core';
import { NewSubPageComponent } from './pages/new-sub-page/new-sub-page.component';
import { CommonModule } from '@angular/common';
import { NewSubRoutingModule } from './new-sub-routing.module';
import { CardNewSubComponent } from './components/card-new-sub/card-new-sub.component';
import { BotonAgregarComponent } from 'src/app/shared/components/boton-agregar/boton-agregar.component';
import { LogoSubComponent } from 'src/app/shared/components/logo-sub/logo-sub.component';

@NgModule({
  declarations: [NewSubPageComponent, CardNewSubComponent],
  imports: [
    CommonModule,
    NewSubRoutingModule,
    BotonAgregarComponent,
    LogoSubComponent,
  ],
  exports: [NewSubPageComponent],
})
export class NewSubModule {}
