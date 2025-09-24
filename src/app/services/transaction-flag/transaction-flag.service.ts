import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from '../base-http/base-http.service';
import { TransactionFlag } from 'src/app/models/transaction-flag/transaction-flag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionFlagService  extends BaseHttpService<TransactionFlag> {
  private readonly uri = `api/${environment.transactionMonitorApiVersion}/transaction-flag`;

  constructor(protected override readonly http: HttpClient) {
    super(http);
  }
  
  getAllTransactionFlags(): Observable<TransactionFlag[]> {
    return this.getAll(this.uri);
  }
}
