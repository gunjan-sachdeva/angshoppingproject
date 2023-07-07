import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChoiceService {
  static isCustomer: any;

  constructor() { }

  isAdmin = false;
  isCustomer = false;
  isloggedIn = false;
}
