import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardsComponent } from './components/cards/cards.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomePageComponent, CardsComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
