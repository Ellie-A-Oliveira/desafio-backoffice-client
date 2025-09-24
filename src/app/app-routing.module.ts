import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'transaction', loadChildren: () => import('./pages/transaction/transaction.module').then(m => m.TransactionModule) },
  { path: 'flag', loadChildren: () => import('./pages/transaction-flag/transaction-flag.module').then(m => m.TransactionFlagModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
