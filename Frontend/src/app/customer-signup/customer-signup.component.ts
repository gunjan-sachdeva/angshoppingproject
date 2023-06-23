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
  name: string = '';

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true;
    else
      this.isSignedIn = false;

    this.firebaseService.name = this.name;
  }

  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isSignedUp = true;
      this.name = this.extractName(email);
    }
  }

  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
  }

  handleLogout() {
    this.isSignedIn = false;
  }

  extractName(email: string): string {
    const name = email.substring(0, email.indexOf('@'));
    console.log(name)
    return name;
  }

  success() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'User Created Successfully.',
      showConfirmButton: false,
      timer: 1500
    });
  }
}
