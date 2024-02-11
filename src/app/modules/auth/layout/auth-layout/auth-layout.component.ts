import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  template: `<div
    class="bg-white border-gray-200 dark:bg-gray-900 app-container"
  >
    <span class="mx-5 sm:mx-auto">
      <h1
        class="mt-8 mb-3 text-4xl font-bold leading-none tracking-tight text-white sm:mt-10"
      >
        Gestor de Subs
      </h1>
    </span>
    <main class="w-full max-w-md mx-auto my-auto main">
      <ng-content></ng-content>
    </main>
  </div> `,
})
export class AuthLayoutComponent {}
