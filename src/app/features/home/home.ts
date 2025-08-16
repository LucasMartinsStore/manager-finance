import { Component, signal } from '@angular/core';
import { BalanceCard } from './components/balance/components/balance-card/balance-card';
import { Balance } from './components/balance/balance';
import { TransactionItem } from './components/transaction-item/transaction-item';
import { Transaction } from '../../shared/transaction/interface/transaction';
import { TransactionType } from '../../shared/transaction/enums/transaction-type';

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  transactions = signal<Transaction[]>([
    { title: 'Transação 1', value: 200, type: TransactionType.OUTCOME },
    { title: 'Transação 2', value: 150, type: TransactionType.OUTCOME },
    { title: 'Transação 3', value: 200, type: TransactionType.INCOME },
    { title: 'Transação 4', value: 150, type: TransactionType.INCOME },
  ]);
}
