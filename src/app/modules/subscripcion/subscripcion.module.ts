import { NgModule } from '@angular/core';
import { SubsPageComponent } from './pages/subs-page/subs-page.component';
import { CommonModule } from '@angular/common';
import { SubscripcionRoutingModule } from './subscripcion-routing.module';

@NgModule({
  declarations: [SubsPageComponent],
  imports: [CommonModule, SubscripcionRoutingModule],
  exports: [SubsPageComponent],
})
export class SubscripcionModule {}
