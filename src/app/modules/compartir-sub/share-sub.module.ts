import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewShareSubPageComponent } from './pages/new-share-sub-page/new-share-sub-page.component';
import { ListShareSubPageComponent } from './pages/list-share-sub-page/list-share-sub-page.component';
import { ShareSubRoutingModule } from './share-sub-routing.module';
import { CardAmigosComponent } from './components/card-amigos/card-amigos.component';
import { BotonAgregarComponent } from 'src/app/shared/components/boton-agregar/boton-agregar.component';

@NgModule({
  declarations: [
    NewShareSubPageComponent,
    ListShareSubPageComponent,
    CardAmigosComponent,
  ],
  imports: [CommonModule, ShareSubRoutingModule, BotonAgregarComponent],
  exports: [NewShareSubPageComponent, ListShareSubPageComponent],
})
export class ShareSubModule {}
