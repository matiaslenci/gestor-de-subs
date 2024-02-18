import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeRoutingModule } from './home-routing.module';
import { LogoSubComponent } from 'src/app/shared/components/logo-sub/logo-sub.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomePageComponent, CardsComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, LogoSubComponent],
  exports: [HomePageComponent],
})
export class HomeModule {}
