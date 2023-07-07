import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  constructor(private http : HttpClient) { }
  isloggedIn = false;
  loggedUser:any;

  logout(){
    this.loggedUser === null;
  }
}
