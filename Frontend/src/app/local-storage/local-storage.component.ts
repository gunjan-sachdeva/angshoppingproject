import { Component } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent {

  loginArray:any = {};
  localStorageData: any;

  login() {
    console.log(this.loginArray);
    localStorage.setItem('id', '22');
    localStorage.setItem('name', JSON.stringify(this.loginArray));
    this.localStorageData = this.loginArray; // Assign loginArray to localStorageData
    this.resetForm(); // Call resetForm function
  }
  logout(){
    // localStorage.removeItem('name');
    localStorage.clear();
    this.localStorageData = null;
  }
  
  resetForm() {
    this.loginArray = {}; // Reset the loginArray object to clear the form
  }
}
