import { Component, input, signal } from '@angular/core';
import { Register } from '../account/register/register';
import { user } from '../../types/types';

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected RegisterMode = signal(false);

  showRegister(value: boolean) {
    this.RegisterMode.set(value);
  }
}
