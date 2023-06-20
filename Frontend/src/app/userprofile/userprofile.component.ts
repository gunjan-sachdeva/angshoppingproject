import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaypalDataService } from '../paypal-data.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  users:any = [];
  constructor(private http : HttpClient, private paypal : PaypalDataService){
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
  length = this.users.length - 1;
}
