import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
  isSignedIn = false;
  searchText:any;
  constructor(private firebaseService : FirebaseService){}
  ngOnInit() {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn = true;
    else
    this.isSignedIn = false;
console.log(this.searchText)
  }

  
  async onSignup(email:string, password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true;
  }
  async onSignin(email:string, password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true;
  }
  handleLogout(){
    this.isSignedIn = false;
  }
}
