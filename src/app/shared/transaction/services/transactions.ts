import { inject, Injectable } from '@angular/core';
import { Transaction } from '../interface/transaction';
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
}
