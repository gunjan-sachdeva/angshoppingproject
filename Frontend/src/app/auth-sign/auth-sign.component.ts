import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-auth-sign',
  templateUrl: './auth-sign.component.html',
  styleUrls: ['./auth-sign.component.css']
})
export class AuthSignComponent implements OnInit {
  isSignedIn = false;
  constructor(private firebaseService : FirebaseService){}
  ngOnInit() {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn = true;
    else
    this.isSignedIn = false;

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
