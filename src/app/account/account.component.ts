import { Component } from '@angular/core';
import { InputGroup } from 'primeng/inputgroup';
import { InputText } from 'primeng/inputtext';
import { Card } from 'primeng/card';
import { SharedModule } from 'primeng/api';
import { Button, ButtonDirective } from 'primeng/button';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  imports: [
    InputGroup,
    InputText,
    SharedModule,
    Card,
    ButtonDirective,
    Button,
    FormsModule
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService) {
  }

  login() {
    console.log('login');
    this.apiService.signIn(this.username, this.password).subscribe((response: any) => {
      try {
        const jsonResponse = JSON.parse(response);
        console.log(jsonResponse);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    });
  }
}
