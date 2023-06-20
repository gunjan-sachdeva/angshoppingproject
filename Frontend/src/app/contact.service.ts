import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  firstName:string = "";
  lastName:string = "";
  phone:string = "";
  email:string = "";
  password = "";
}
