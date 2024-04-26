import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestPreviewPageComponent } from './pages/guest-preview-page/guest-preview-page.component';
import { GuestPreviewRoutingModule } from './guest-preview.routing';
import { MaterialModule } from '../material/material.module';
import { NewSubModule } from '../nueva-sub/new-sub.module';
import { SubscripcionModule } from '../subscripcion/subscripcion.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [GuestPreviewPageComponent],
  imports: [
    CommonModule,
    GuestPreviewRoutingModule,
    MaterialModule,
    NewSubModule,
    HomeModule,
    SubscripcionModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class GuestPreviewModule {}
