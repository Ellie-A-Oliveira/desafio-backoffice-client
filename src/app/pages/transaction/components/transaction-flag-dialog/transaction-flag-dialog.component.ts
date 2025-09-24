import { Component, inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TransactionFlagType } from 'src/app/models/transaction-flag/transaction-flag';

@Component({
  selector: 'app-transaction-flag-dialog',
  templateUrl: './transaction-flag-dialog.component.html',
  styleUrls: ['./transaction-flag-dialog.component.scss']
})
export class TransactionFlagDialogComponent {
  data = inject(MAT_DIALOG_DATA);
  flags = Object.values(TransactionFlagType);
  
  constructor() { }

  reason: string | undefined;
  selectedFlag: TransactionFlagType | undefined;
}
