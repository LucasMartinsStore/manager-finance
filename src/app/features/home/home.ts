import { Component, inject, OnInit, signal } from '@angular/core';
import { Balance } from './components/balance/balance';
import { TransactionItem } from './components/transaction-item/transaction-item';
import { Transaction } from '../../shared/transaction/interface/transaction';
import { NoTransactions } from './components/no-transactions/no-transactions';
import { TransactionsService } from '../../shared/transaction/services/transactions';

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem, NoTransactions],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  transactions = signal<Transaction[]>([]);

  private _transactionService = inject(TransactionsService);

  ngOnInit(): void {
    this._getTransactions();
  }

  private _getTransactions() {
    this._transactionService.getAll().subscribe({
      next: (transactions) => this.transactions.set(transactions),
      error: (error) => console.error('Error fetching transactions:', error),
    });
  }
}
