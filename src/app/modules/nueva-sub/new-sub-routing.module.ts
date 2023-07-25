import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSubPageComponent } from './pages/new-sub-page/new-sub-page.component';

const routes: Routes = [{ path: '', component: NewSubPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewSubRoutingModule {}
