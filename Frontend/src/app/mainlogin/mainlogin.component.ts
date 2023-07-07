import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedUserService } from '../services/logged-user.service';
import { ChoiceService } from '../services/choice.service';
declare var $:any;

@Component({
  selector: 'app-mainlogin',
  templateUrl: './mainlogin.component.html',
  styleUrls: ['./mainlogin.component.css']
})
export class MainloginComponent {
  login:FormGroup|any;
  isloggedIn = false;
  loggedUer:any;
  constructor(private _http:HttpClient, private _route:Router, private loggedUser : LoggedUserService
    , private choice : ChoiceService) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'fname': new FormControl(),
      'password': new FormControl()
    })
  }
  logindata(login:FormGroup){

   // console.log(this.login.value);
    this._http.get<any>("http://localhost:8000/signup")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.fname === this.login.value.fname && a.password === this.login.value.password
      });

      this.loggedUer = user;
      this.loggedUser.loggedUser = this.loggedUer;
      if(user){
        alert('you are successfully login');
        this.login.reset();
        $('.form-box').css('display','none');
        this.isloggedIn = true;
        this.loggedUser.isloggedIn = this.isloggedIn;
        this.choice.isCustomer = true;
        this._route.navigate(['profile']);
      }else{
        alert('User Not Found');
        this._route.navigate(['mainlogin']);
      }

    }, err=>{
      alert('Something was wrong');
    })
   

  }

  sbtn1(){
    $('.form-box').css('display','none');
    $('.form-box1').css('display','block');
  }

}
