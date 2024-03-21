import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubsPageComponent } from './pages/subs-page/subs-page.component';
import { GestionarSubPageComponent } from './pages/gestionar-sub-page/gestionar-sub-page.component';
import { UrlGuard } from 'src/app/core/guards';

const routes: Routes = [
  { path: ':id', component: SubsPageComponent, canActivate: [UrlGuard] },
  {
    path: 'edit/:id',
    canActivate: [UrlGuard],
    component: GestionarSubPageComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscripcionRoutingModule {}
