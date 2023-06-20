import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  localStorageData: any;
  constructor(private login : LoginService, private http : HttpClient, private router :Router){}
  public form = {
    email: "",
    password: ""
  }
  integerRegex = /^\d+$/;
  emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;

  passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/ ;
  resetForm() {
    this.form = {
      email: '',
      password: ''
    };
  }
  registerfn(){
    console.log(this.form);
    this.resetForm();
  }

  loginForm() {
    console.log(this.form);
    localStorage.setItem('id', '22');
    localStorage.setItem('name', JSON.stringify(this.form));
    this.localStorageData = this.form; // Assign loginArray to localStorageData
    console.log(this.localStorageData)
    this.resetForm(); // Call resetForm function
  }
  navigate(){
    this.router.navigate(["/profile"]);
  }
  sendData() {
    const observer: Observer<any> = {
      next: (response) => {
        console.log(response);
        
       
      },
      error: (error) => {
        console.log(error);
        
      },
      complete: () => {
        
        
      }
      
    };
  
    this.http.post("http://localhost:8000/login", this.form)
      .subscribe(observer);
    
      this.loginForm();
      
      
  }
  
}
