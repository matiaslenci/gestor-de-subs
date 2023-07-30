import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomePageComponent, CardsComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
