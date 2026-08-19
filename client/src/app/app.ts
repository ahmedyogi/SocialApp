import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "../layout/nav/nav";
import { lastValueFrom } from 'rxjs';
import { AccountService } from '../core/services/account-service';
import { Home } from "../features/home/home";
import { user } from '../types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private accountService = inject(AccountService);
  private http = inject(HttpClient);
  protected readonly title = signal('Social-app');
  protected Members = signal<user[]>([])

  async ngOnInit() {
    this.setCurrentUser();
    this.Members.set(await this.getMembers());
    }


setCurrentUser(){
  const userString = localStorage.getItem('user');
  if(! userString) return;
  const user = JSON.parse(userString);
  this.accountService.currentUser.set(user);
}


    async getMembers(){
      try{
        return lastValueFrom(this.http.get<user[]>("https://localhost:7141/api/Members"));
      }
      catch(error){
        console.log(error);
        throw error;
      }
    }
  }
