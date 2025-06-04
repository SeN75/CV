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
      {
        path: 'contents',
        loadComponent: () =>
          import('@/cms/features/cms-contents/cms-contents.component').then(
            (c) => c.CmsContentsComponent
          ),
      },
      {
        path: 'resumes',
        loadComponent: () =>
          import('@/cms/features/cms-resumes/cms-resumes.component').then(
            (c) => c.CmsResumesComponent
          ),
      },
    ],
  },
];
