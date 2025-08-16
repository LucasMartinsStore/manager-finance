import { Component, computed, input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { CardType } from '../../../../../../shared/types/card-type';
import { CssClass } from '../../../../../../shared/types/css-class';

@Component({
  selector: 'app-balance-card',
  imports: [MatCardModule],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss',
})
export class BalanceCard {
  type = input.required<CardType>();
  label = input.required<string>();
  value = input.required<number>();

  cssClass = computed<CssClass>(() => {
    if (this.type() === 'income') {
      return 'income';
    }
    if (this.type() === 'outcome') {
      return 'outcome';
    }
    if (this.value() === 0) {
      return 'zero';
    }
    return this.value() > 0 ? 'income' : 'outcome';
  });
}
