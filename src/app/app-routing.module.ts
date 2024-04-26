import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './core/pages/pages.component';
import {
  isAuthenticatedGuard,
  isNotAuthenticatedGuard,
  UrlGuard,
} from './core/guards';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'inicio',
        canActivate: [isAuthenticatedGuard],
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'sub',
        canActivate: [UrlGuard, isAuthenticatedGuard],
        loadChildren: () =>
          import('./modules/subscripcion/subscripcion.module').then(
            (m) => m.SubscripcionModule
          ),
      },
      {
        path: 'new',
        loadChildren: () =>
          import('./modules/nueva-sub/new-sub.module').then(
            (m) => m.NewSubModule
          ),
      },
      {
        path: 'share',
        canActivate: [isAuthenticatedGuard],
        loadChildren: () =>
          import('./modules/compartir-sub/share-sub.module').then(
            (m) => m.ShareSubModule
          ),
      },
      {
        path: 'perfil',
        canActivate: [isAuthenticatedGuard],
        loadChildren: () =>
          import('./modules/perfil/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'preview',
        loadChildren: () =>
          import('./modules/guest-preview/guest-preview.module').then(
            (m) => m.GuestPreviewModule
          ),
      },

      { path: '', redirectTo: 'preview', pathMatch: 'full' },
    ],
  },

  {
    path: 'auth',
    canActivate: [isNotAuthenticatedGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
