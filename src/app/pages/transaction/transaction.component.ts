import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Transaction } from 'src/app/models/transaction/transaction';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { TransactionFlagDialogComponent } from './components/transaction-flag-dialog/transaction-flag-dialog.component';
import { TransactionFlagType } from 'src/app/models/transaction-flag/transaction-flag';
import { switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Column {
  id: string;
  displayName: string;
  isAction?: boolean;
  applyPipe?: CallableFunction;
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit, OnDestroy {
  public transactions: Transaction[] = [];
  public displayedColumns: Column[] = [
    { id: 'transactionId', displayName: 'Transaction ID' },
    { id: 'accountId', displayName: 'Account ID' },
    { id: 'amount', displayName: 'Amount' },
    { id: 'currency', displayName: 'Currency' },
    { id: 'timestamp', displayName: 'Date', applyPipe: (date: Date) => this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss') },
    { id: 'transactionType', displayName: 'Transaction Type' },
    { id: 'status', displayName: 'Status' },
    { id: 'flag', displayName: 'Flag Transaction', isAction: true },
  ];
  public displayedColumnsIds: string[] = this.displayedColumns.map((column) => column.id);
  private subscriptions: any[] = [];

  constructor(
    private readonly transactionService: TransactionService,
    private readonly datePipe: DatePipe,
    private readonly dialog: MatDialog,
    private readonly snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.transactionService.getAllTransactions().subscribe((transactions) => {
        this.transactions = transactions;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public openFlagTransactionDialog(enterAnimationDuration: string, exitAnimationDuration: string, transaction: Transaction): void {
    const dialogRef = this.dialog.open(TransactionFlagDialogComponent, {
      data: transaction,
      enterAnimationDuration,
      exitAnimationDuration,
    });

    this.subscriptions.push(dialogRef.afterClosed()
      .subscribe((transactionFlag) => {
        if (transactionFlag) {
          this.flagTransaction(transaction.transactionId, transactionFlag.reason, transactionFlag.flag);
        }
      }));
  }

  public flagTransaction(transactionId: string, reason: string, flag: TransactionFlagType): void {
    this.subscriptions.push(this.transactionService.flagTransaction(transactionId, { reason, type: flag })
      .pipe(
        tap(() => {
          this.snackBar.open('Transaction flagged successfully', 'Close', { duration: 3000 });
        }),
        switchMap(() => this.transactionService.getAllTransactions()),
        tap((transactions) => this.transactions = transactions)
      )
      .subscribe());
  }
}
