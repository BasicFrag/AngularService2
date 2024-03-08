import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  accounts: {name:string, status: string}[] = [];

  constructor(private accountService: AccountService) {
    
  }
  
  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    
  }
 
}
