import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../app.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: any;
  password: any;

  loggedIn = false;

  currentUser: UserAccount={
    userName: "jaynard",
    password: "jay1120"
  }

  login(userAccount: UserAccount){
    console.log(userAccount);
    // this.loggedIn = (this.currentUser.userName === userAccount.userName && this.currentUser.password === userAccount.password)? true: false; 
    if(this.currentUser.userName === userAccount.userName && this.currentUser.password === userAccount.password){
      this.route.navigate([''])
    }
  }

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

}
