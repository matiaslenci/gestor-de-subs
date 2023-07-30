import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HomeModule } from './modules/home/home.module';
import { SubscripcionModule } from './modules/subscripcion/subscripcion.module';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es-ES');

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    SubscripcionModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
