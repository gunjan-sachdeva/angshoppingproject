import { Component, EventEmitter, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService : FirebaseService){}
  logout(){
    this.firebaseService.logout();
    this.isLogout.emit();
  }
}
