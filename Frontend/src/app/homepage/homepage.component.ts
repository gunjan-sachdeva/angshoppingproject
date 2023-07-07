import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from '../services/logged-user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  userName:any;
  fullname: string;
  constructor(private log : LoggedUserService){

  }
  logout(){
    // this.log.loggedUser = null;
    // this.fullname = '';
    this.log.loggedUser == null;
    this.resetObject();
    this.fullname = '';
    this.log.isloggedIn = false;
    console.log(this.log.loggedUser);
    
  }
   resetObject() {
    this.log.loggedUser.fname = '';
    this.log.loggedUser.lname = '';
    this.log.loggedUser.email = '';
    this.log.loggedUser.phone = '';
    this.log.loggedUser.password = '';
    this.log.loggedUser.id = null;
  }
  ngOnInit(): void {
    this.userName = this.log.loggedUser.fname;
    this.fullname = `${this.userName} is logged in`
    console.log(this.userName)
    console.log(this.log.loggedUser)
  }
  
}
