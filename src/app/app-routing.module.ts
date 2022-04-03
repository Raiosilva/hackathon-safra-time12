import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/service/auth-guard.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'invest-feature/main' },
  {
    path: 'invest-feature',
    loadChildren: () => import('./feature/invest-feature/invest-feature.module').then(m => m.InvestModule),
    canActivate: [AuthGuard]
  },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
