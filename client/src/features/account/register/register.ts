import { Component, inject, input, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, user } from '../../../types';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  protected accountService = inject(AccountService);
  cancelRegister = output<boolean>();
  protected creds = {} as RegisterCreds;
  protected selectedMember = '';

  register() {
    this.accountService.register(this.creds).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
