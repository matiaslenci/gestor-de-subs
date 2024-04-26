import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestPreviewPageComponent } from './pages/guest-preview-page/guest-preview-page.component';

const routes: Routes = [{ path: '', component: GuestPreviewPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestPreviewRoutingModule {}
