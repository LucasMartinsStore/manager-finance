import { inject, Injectable } from '@angular/core';
import { Transaction, TransactionPayload } from '../interface/transaction';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  readonly ENPOINT = 'http://localhost:3000/transactions';
  private _httpClient = inject(HttpClient);

  getAll() {
    return this._httpClient.get<Transaction[]>(this.ENPOINT);
  }

  post(post: TransactionPayload) {
    return this._httpClient.post<Transaction>(this.ENPOINT, post);
  }
}
