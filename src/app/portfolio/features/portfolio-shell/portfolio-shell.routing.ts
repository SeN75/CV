import { Routes } from '@angular/router';

export const PortfolioShell: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        '@/portfolio/features/portfolio-shell/portfolio-shell.component'
      ).then((m) => m.PortfolioShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@/portfolio/features/portfolio/portfolio.component').then(
            (m) => m.PortfolioComponent
          ),
      },
    ],
  },
];
