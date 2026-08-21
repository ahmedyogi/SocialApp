import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { user, RegisterCreds, LoginCreds } from '../../types';
import { tap } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  protected http = inject(HttpClient);
  currentUser = signal<user | null>(null);

  baseUrl = 'https://localhost:7141/api/';

  login(creds: LoginCreds){
    return this.http.post<user>(this.baseUrl + 'Account/login',creds).pipe(
      tap(user =>{
        localStorage.setItem('user', JSON.stringify(user))
        this.currentUser.set(user)
      })
    )
  }

  register(creds: RegisterCreds){
    return this.http.post<user>(this.baseUrl + 'Account/register', creds).pipe(
      tap(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.set(user);
      })
    );
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
