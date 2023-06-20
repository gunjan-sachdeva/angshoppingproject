import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private login : LoginService, private http : HttpClient){}
  form = {
    name: "",
    mobile: "",
    email: "",
    address: "",
    password: ''
  }
  integerRegex = /^\d+$/;
  emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;
  passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/ ;

  resetForm() {
    this.form = {
      name: '',
      mobile: '',
      email: '',
      address: '',
      password: ''
    };
  }
  registerfn(){
    console.log(this.form);
    this.resetForm();
  }
  sendData() {
    const observer: Observer<any> = {
      next: (response) => {
        console.log(response);
        // Handle the response here if needed
      },
      error: (error) => {
        console.log(error);
        // Handle the error here if needed
      },
      complete: () => {
        // Handle the completion here if needed
      }
    };
  
    this.http.post("http://localhost:8000/register", this.form)
      .subscribe(observer);
  }
}
