import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaypalDataService } from '../paypal-data.service';
import { LoggedUserService } from '../services/logged-user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit{
  users:any = [];
  loggedUser:any;
  constructor(private http : HttpClient, private paypal : PaypalDataService, private userService : LoggedUserService){
    this.http.get("http://localhost:8000/registeredUsers")
    .subscribe((res)=>{
      console.log(res);
    
      this.users = res;
      this.paypal.users = this.users;
      console.log("users: " , this.users)
      console.log(this.users[this.length].name)
      console.log(this.users.length);
      
    })
  }
  ngOnInit(): void {
    this.loggedUser = this.userService.loggedUser;
  }
  length = this.users.length - 1;
}
