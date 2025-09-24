import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TransactionFlagComponent } from './transaction-flag.component';
import { TransactionFlagService } from 'src/app/services/transaction-flag/transaction-flag.service';
import { TransactionFlagRoutingModule } from './transaction-flag-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    TransactionFlagComponent
  ],
  imports: [
    CommonModule,
    TransactionFlagRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    TransactionFlagService,
    DatePipe
  ]
})
export class TransactionFlagModule { }
