import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'sub',
    loadChildren: () =>
      import('./modules/subscripcion/subscripcion.module').then(
        (m) => m.SubscripcionModule
      ),
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./modules/nueva-sub/new-sub.module').then((m) => m.NewSubModule),
  },
  {
    path: 'share',
    loadChildren: () =>
      import('./modules/compartir-sub/share-sub.module').then(
        (m) => m.ShareSubModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

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
