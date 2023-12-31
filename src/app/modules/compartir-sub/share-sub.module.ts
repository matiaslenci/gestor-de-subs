import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewShareSubPageComponent } from './pages/new-share-sub-page/new-share-sub-page.component';
import { ListShareSubPageComponent } from './pages/list-share-sub-page/list-share-sub-page.component';
import { ShareSubRoutingModule } from './share-sub-routing.module';
import { CardAmigosComponent } from './components/card-amigos/card-amigos.component';
import { BotonAgregarComponent } from 'src/app/shared/components/boton-agregar/boton-agregar.component';
import { BotonEliminarSubComponent } from 'src/app/shared/components/boton-eliminar-sub/boton-eliminar-sub.component';
import { LogoSubComponent } from 'src/app/shared/components/logo-sub/logo-sub.component';

@NgModule({
  declarations: [
    NewShareSubPageComponent,
    ListShareSubPageComponent,
    CardAmigosComponent,
  ],
  imports: [
    CommonModule,
    ShareSubRoutingModule,
    BotonAgregarComponent,
    BotonEliminarSubComponent,
    LogoSubComponent,
  ],
  exports: [NewShareSubPageComponent, ListShareSubPageComponent],
})
export class ShareSubModule {}
