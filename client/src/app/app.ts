import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Nav } from "../layout/nav/nav";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected router = inject(Router);

  // async ngOnInit() {
  //   this.setCurrentUser();
  //   this.Members.set(await this.getMembers());
  //   }


// setCurrentUser(){
//   const userString = localStorage.getItem('user');
//   if(! userString) return;
//   const user = JSON.parse(userString);
//   this.accountService.currentUser.set(user);
// }


    // async getMembers(){
    //   try{
    //     return lastValueFrom(this.http.get<user[]>("https://localhost:7141/api/Members"));
    //   }
    //   catch(error){
    //     console.log(error);
    //     throw error;
    //   }
    // }
  }
