import { Component, EventEmitter, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
Router

@Component({
  selector: 'app-signup-res',
  templateUrl: './signup-res.component.html',
  styleUrls: ['./signup-res.component.css']
})
export class SignupResComponent {
  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService : FirebaseService, private router : Router){}
  logout(){
    this.firebaseService.logout();
    this.isLogout.emit();
  }
  continue(){
    this.router.navigate(['/customer_login']);
  }
}
