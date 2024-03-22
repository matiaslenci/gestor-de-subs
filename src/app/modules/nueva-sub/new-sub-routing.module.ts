import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSubPageComponent } from './pages/new-sub-page/new-sub-page.component';
import { GestionarSubPageComponent } from '../subscripcion/pages/gestionar-sub-page/gestionar-sub-page.component';

const routes: Routes = [
  { path: '', component: NewSubPageComponent },
  {
    path: ':term',
    component: GestionarSubPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewSubRoutingModule {}
