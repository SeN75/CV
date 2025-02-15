import { Routes } from '@angular/router';

export const CmsShellRouting: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@/cms/features/cms-shell/cms-shell.component').then(
        (m) => m.CmsShellComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@/cms/features/cms/cms.component').then(
            (m) => m.CmsComponent
          ),
      },
    ],
  },
];
