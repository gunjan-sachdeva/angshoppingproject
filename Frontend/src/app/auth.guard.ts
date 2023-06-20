import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CartService } from './services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router : Router, private cartservice : CartService){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.cartservice.cartItemList.length == 0){
        Swal.fire({
          icon: 'error',
          title: 'Oops... Your cart is empty!!!',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        this.router.navigate(['/']);
        return false;
      }
      else{
        return true;
      }
  
  }
  
}
