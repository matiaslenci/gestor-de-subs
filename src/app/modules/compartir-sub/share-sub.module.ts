import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewShareSubPageComponent } from './pages/new-share-sub-page/new-share-sub-page.component';
import { ListShareSubPageComponent } from './pages/list-share-sub-page/list-share-sub-page.component';
import { ShareSubRoutingModule } from './share-sub-routing.module';

@NgModule({
  declarations: [NewShareSubPageComponent, ListShareSubPageComponent],
  imports: [CommonModule, ShareSubRoutingModule],
  exports: [NewShareSubPageComponent, ListShareSubPageComponent],
})
export class ShareSubModule {}
