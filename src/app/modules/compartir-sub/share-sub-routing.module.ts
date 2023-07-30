import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListShareSubPageComponent } from './pages/list-share-sub-page/list-share-sub-page.component';
import { NewShareSubPageComponent } from './pages/new-share-sub-page/new-share-sub-page.component';

const routes: Routes = [
  { path: '', component: NewShareSubPageComponent },
  { path: 'list', component: ListShareSubPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareSubRoutingModule {}
