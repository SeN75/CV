import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
export const routes: Routes = [
  {
    path: 'cms',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@/cms/features/cms-shell/cms-shell.routing').then(
        (m) => m.CmsShellRouting
      ),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import(
        '@/portfolio/features/portfolio-shell/portfolio-shell.routing'
      ).then((m) => m.PortfolioShell),
  },
  {
    path: 'r',
    loadChildren: () =>
      import(
        '@/registration/features/registration-shell/registration-shell.routing'
      ).then((m) => m.RegistrationShellRouting),
  },
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full',
  },
];
