import { Routes } from '@angular/router';

export const RegistrationShellRouting: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        '@/registration/features/registration-shell/registration-shell.component'
      ).then((m) => m.RegistrationShellComponent),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('@/registration/features/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];
