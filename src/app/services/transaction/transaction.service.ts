import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';
import { HttpClient } from '@angular/common/http';
import { Transaction } from 'src/app/models/transaction/transaction';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CreateTransactionFlagDto } from 'src/app/types/create-transaction-flag.dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends BaseHttpService<Transaction> {
  private readonly uri = `/api/${environment.transactionMonitorApiVersion}/transaction`;

  constructor(protected override readonly http: HttpClient) {
    super(http);
  }
  
  getAllTransactions(): Observable<Transaction[]> {
    return this.getAll(this.uri);
  }

  getTransaction(transactionId: string): Observable<Transaction> {
    return this.get(`${this.uri}/${transactionId}`);
  }

  flagTransaction(transactionId: string, flag: CreateTransactionFlagDto): Observable<string> {
    return this.post(`${this.uri}/${transactionId}/flag`, flag);
  }
}
