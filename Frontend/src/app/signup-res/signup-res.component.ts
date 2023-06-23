import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
Router

@Component({
  selector: 'app-signup-res',
  templateUrl: './signup-res.component.html',
  styleUrls: ['./signup-res.component.css']
})
export class SignupResComponent implements OnInit{
  name = '';

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService : FirebaseService, private router : Router){}
  ngOnInit(): void {
    this.name = this.firebaseService.name;
  }
  logout(){
    this.firebaseService.logout();
    this.isLogout.emit();
  }
  continue(){
    this.router.navigate(['/customer_login']);
  }
}
