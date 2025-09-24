import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionFlagComponent } from './transaction-flag.component';

const routes: Routes = [
  { path: '', component: TransactionFlagComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionFlagRoutingModule { }
