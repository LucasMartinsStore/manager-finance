import { ResolveFn } from '@angular/router';
import { Transaction } from '../../../../../shared/transaction/interface/transaction';
import { inject } from '@angular/core';
import { TransactionsService } from '../../../../../shared/transaction/services/transactions.service';

export const getTransactionByIdResolver: ResolveFn<Transaction> = (
  route,
  state
) => {
  const _transactionService = inject(TransactionsService);
  const id = route.paramMap.get('id') as string;

  return _transactionService.getById(id);
};
