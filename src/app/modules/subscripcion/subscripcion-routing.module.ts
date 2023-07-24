import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubsPageComponent } from './pages/subs-page/subs-page.component';

const routes: Routes = [{ path: '', component: SubsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscripcionRoutingModule {}
