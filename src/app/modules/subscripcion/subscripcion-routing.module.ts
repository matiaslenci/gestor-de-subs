import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubsPageComponent } from './pages/subs-page/subs-page.component';
import { GestionarSubPageComponent } from './pages/gestionar-sub-page/gestionar-sub-page.component';

const routes: Routes = [
  { path: ':id', component: SubsPageComponent },
  { path: 'edit', component: GestionarSubPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscripcionRoutingModule {}
