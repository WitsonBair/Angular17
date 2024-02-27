import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'form',
    title: 'Form',
    loadComponent: () =>
      import('./form/form.component').then((m) => m.FormComponent),
  },
];
