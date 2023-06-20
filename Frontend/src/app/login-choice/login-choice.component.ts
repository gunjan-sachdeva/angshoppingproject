import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-choice',
  templateUrl: './login-choice.component.html',
  styleUrls: ['./login-choice.component.css']
})
export class LoginChoiceComponent {
  log = false;
  custom = false;
  constructor(private router: Router){}
  redirectToAdminLogin(){
    this.router.navigate(['/admin_login']);
  }
  redirectToCustomerLogin(){
    this.log = true;
    this.custom = true;
    // this.router.navigate(['/profile']);
  }
  cust_login(){
    this.router.navigate(['/customer_login']);
  }
  cust_signup(){
    this.router.navigate(['/customer_signup']);
  }
 
}
