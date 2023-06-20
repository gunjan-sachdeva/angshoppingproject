import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth1serviceService {

  login(): void {
    
    localStorage.setItem('isAuthenticated', 'true');
  }
  
  logout(): void {
   
    localStorage.removeItem('isAuthenticated');
  }
  
  isAuthenticatedUser(): boolean {
    
    return localStorage.getItem('isAuthenticated') === 'true';
  }
}
