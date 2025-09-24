import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TransactionFlag } from 'src/app/models/transaction-flag/transaction-flag';
import { TransactionFlagService } from 'src/app/services/transaction-flag/transaction-flag.service';

interface Column {
  id: string;
  displayName: string;
  isAction?: boolean;
  applyPipe?: CallableFunction;
}

@Component({
  selector: 'app-transaction-flag',
  templateUrl: './transaction-flag.component.html',
  styleUrls: ['./transaction-flag.component.scss']
})
export class TransactionFlagComponent {
public transactionFlags: TransactionFlag[] = [];
  public displayedColumns: Column[] = [
    { id: 'flagId', displayName: 'Flag ID' },
    { id: 'flagType', displayName: 'Flag Type' },
    { id: 'reason', displayName: 'Reason' },
    { id: 'createdAt', displayName: 'Created At', applyPipe: (date: Date) => this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss') },
    { id: 'status', displayName: 'Status' },
    { id: 'severity', displayName: 'Severity' },
  ];
  public displayedColumnsIds: string[] = this.displayedColumns.map((column) => column.id);
  private subscriptions: any[] = [];

  constructor(
    private readonly transactionFlagService: TransactionFlagService,
    private readonly datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.transactionFlagService.getAllTransactionFlags().subscribe((transactionFlags) => {
        this.transactionFlags = transactionFlags;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
