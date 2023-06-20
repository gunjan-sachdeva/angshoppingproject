import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent {
  isSignedIn = false;
  isSignedUp = false;
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
    this.isSignedUp = true;
  }
  async onSignin(email:string, password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true;
  }
  handleLogout(){
    this.isSignedIn = false;
  }
  success(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'User Created Successfully.',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
