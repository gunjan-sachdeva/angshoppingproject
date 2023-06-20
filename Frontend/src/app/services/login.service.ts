import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  registerUser(){
    this.http.get("http://localhost:8000/login").subscribe(
      res =>{
        console.log(res)
      }
    )
  }
  feedback(){
    this.http.get("http://localhost:8000/feedbackUser").subscribe(
      res =>{
        console.log(res)
      }
    )
  }
}
