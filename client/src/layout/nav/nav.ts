import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { ToastService } from '../../core/services/toast-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  private toast = inject(ToastService);
  private router = inject(Router);
  protected accountService = inject(AccountService);
  protected creds: any = {};
  protected isLoggedIn = signal(false);
  login(){
    this.accountService.login(this.creds).subscribe({ 
      next: result => 
        {
          this.toast.success('Logged in successfuly!');
          this.isLoggedIn.set(true);
          this.creds = {};
          this.router.navigateByUrl('/members');
      },
      error: error => {
        const message = error?.error;
        if (typeof message === 'string' && message) {
          this.toast.error(message);
        } else if (typeof message === 'object' && message !== null) {
          const text = message.message || message.title || JSON.stringify(message);
          this.toast.error(text);
        } else {
          this.toast.error(error?.message || 'An error occurred');
        }
      }
    })
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}