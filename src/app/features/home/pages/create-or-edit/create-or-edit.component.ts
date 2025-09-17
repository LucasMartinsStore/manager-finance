import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TransactionType } from '../../../../shared/transaction/enums/transaction-type';
import { NgxMaskDirective } from 'ngx-mask';
import { TransactionsService } from '../../../../shared/transaction/services/transactions.service';
import { TransactionPayload } from '../../../../shared/transaction/interface/transaction';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedbackService } from '../../../../shared/services/feedback/feedback.service';

@Component({
  selector: 'app-create',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    NgxMaskDirective,
  ],
  templateUrl: './create-or-edit.component.html',
  styleUrl: './create-or-edit.component.scss',
})
export class CreateOrEditComponent implements OnInit {
  readonly transactionType = TransactionType;

  private _transactionService = inject(TransactionsService);
  private _router = inject(Router);
  private _feedbackService = inject(FeedbackService);
  private _activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log(this._activatedRoute.snapshot.data);
  }

  form = new FormGroup({
    type: new FormControl('', {
      validators: [Validators.required],
    }),
    title: new FormControl('', {
      validators: [Validators.required],
    }),
    value: new FormControl(0, { validators: [Validators.required] }),
  });

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const payload: TransactionPayload = {
      title: this.form.value.title as string,
      type: this.form.value.type as TransactionType,
      value: this.form.value.value as number,
    };
    this._transactionService.post(payload).subscribe({
      next: () => {
        this._feedbackService.messageSuccess('Transação criada com sucesso!');
        this._router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error creating transaction:', error);
      },
    });
  }
}
