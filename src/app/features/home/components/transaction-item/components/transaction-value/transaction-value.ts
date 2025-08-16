import { Component, computed, input } from '@angular/core';
import { Transaction } from '../../../../../../shared/transaction/interface/transaction';
import { TransactionType } from '../../../../../../shared/transaction/enums/transaction-type';

const ClssClass = {
  [TransactionType.INCOME]: 'income',
  [TransactionType.OUTCOME]: 'outcome',
};

@Component({
  selector: 'app-transaction-value',
  imports: [],
  template: ` {{ transaction().value }} `,
  styleUrl: './transaction-value.scss',
  host: {
    '[class]': 'cssClass()',
  },
})
export class TransactionValue {
  transaction = input.required<Transaction>();

  cssClass = computed(() => {
    return ClssClass[this.transaction().type];
  });
}
