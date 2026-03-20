import { Routes } from '@angular/router';

// app.routes.ts
export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes')
        .then(m => m.routes)
  },
  {
    path: 'logs',
    loadChildren: () =>
      import('./features/logs/logs.routes')
        .then(m => m.routes)
  },
  {
    path: 'operaciones',
    loadChildren: () =>
      import('./features/operaciones/operaciones.routes')
        .then(m => m.routes)
  },
  {
    path: 'reportes',
    loadChildren: () =>
      import('./features/reportes/reportes.routes')
        .then(m => m.routes)
  }
];