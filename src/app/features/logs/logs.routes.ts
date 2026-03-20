export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./presentation/pages/logs-page.component')
        .then(m => m.LogsPageComponent),
    children: [
      {
        path: 'errores',
        loadComponent: () =>
          import('./presentation/pages/errors.component')
            .then(m => m.ErrorsComponent)
      },
      {
        path: 'auditoria',
        loadComponent: () =>
          import('./presentation/pages/audit.component')
            .then(m => m.AuditComponent)
      }
    ]
  }
];