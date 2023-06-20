import { Injectable } from '@angular/core';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   message!: string;

  constructor() { }
  setMessage(data: string){
    this.message = data;
  }
  getMessage(){
    return this.message;
  }
}
