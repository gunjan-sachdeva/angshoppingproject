import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  constructor(private login : LoginService, private http : HttpClient){}

  form = {
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    message: ""
  }
  integerRegex = /^\d+$/;
  emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;

  resetForm() {
    this.form = {
      fname: '',
      lname: '',
      mobile: '',
      email: '',
      message: ''
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
        
      },
      error: (error) => {
        console.log(error);
        
      },
      complete: () => {
        
      }
    };
  
    this.http.post("http://localhost:8000/feedback", this.form)
      .subscribe(observer);
  }
}
