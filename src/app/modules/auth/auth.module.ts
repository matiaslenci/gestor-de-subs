import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth.routing';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LoginPageComponent],
  imports: [CommonModule, AuthRoutingModule],
  exports: [AuthRoutingModule],
})
export class AuthModule {}
