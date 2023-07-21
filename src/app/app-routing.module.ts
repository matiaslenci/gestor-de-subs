import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { SubsPageComponent } from './modules/subscripcion/pages/subs-page/subs-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sub', component: SubsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
