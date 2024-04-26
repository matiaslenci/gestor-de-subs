import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestPreviewPageComponent } from './pages/guest-preview-page/guest-preview-page.component';
import { GuestPreviewRoutingModule } from './guest-preview.routing';

@NgModule({
  declarations: [GuestPreviewPageComponent],
  imports: [CommonModule, GuestPreviewRoutingModule],
})
export class GuestPreviewModule {}
