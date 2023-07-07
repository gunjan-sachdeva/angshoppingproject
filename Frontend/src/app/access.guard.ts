import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ChoiceService } from './services/choice.service'; 

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  constructor(private choiceService: ChoiceService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.choiceService.isAdmin) {
      return true; // Allow access to the dashboard
    } else if (this.choiceService.isCustomer) {
      return true; // Allow access to the profile component
    } else {
      return this.router.parseUrl('/'); // Redirect to another route if not an admin or customer
    }
  }
}
