import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile.routing';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { EditProfilePageComponent } from './pages/edit-profile-page/edit-profile-page.component';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  declarations: [ProfilePageComponent, EditProfilePageComponent, AvatarComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    RouterModule,
  ],
  exports: [ProfileRoutingModule],
})
export class ProfileModule {}
