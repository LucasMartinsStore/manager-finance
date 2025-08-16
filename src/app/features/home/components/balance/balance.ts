import { Component, computed, input } from '@angular/core';
import { BalanceCard } from './components/balance-card/balance-card';
import { Transaction } from '../../../../shared/transaction/interface/transaction';

@Component({
  selector: 'app-balance',
  imports: [BalanceCard],
  templateUrl: './balance.html',
  styleUrl: './balance.scss',
})
export class Balance {
  transactions = input.required<Transaction[]>();

  totalIncomes = computed(() => {
    return this.transactions()
      .filter((item) => item.type === 'income')
      .reduce((total, item) => total + item.value, 0);
  });

  totalOutcomes = computed(() => {
    return this.transactions()
      .filter((item) => item.type === 'outcome')
      .reduce((total, item) => total + item.value, 0);
  });

  totalBalance = computed(() => {
    return this.totalIncomes() - this.totalOutcomes();
  });
}
