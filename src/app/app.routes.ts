import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'egress',
    loadChildren: () =>
      import('./shared/modules/egress/egress.module').then((m) => m.EgressModule)
  },
  {
    path: 'income',
    loadChildren: () =>
      import('./shared/modules/income/income.module').then((m) => m.IncomeModule)
  },
  {
    path: 'summary',
    loadChildren: () =>
      import('./shared/modules/summary/summary.module').then((m) => m.SummaryModule)
  },
  { path: '', redirectTo: '/egress', pathMatch: 'full' }

];
