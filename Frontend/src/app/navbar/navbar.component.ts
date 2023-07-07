import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { LoggedUserService } from '../services/logged-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public totalItem : number = 0;
  constructor(private cartService : CartService, private http : HttpClient,
     private detail : ProductDetailsComponent
     , private log : LoggedUserService){}
  searchText:any;
  all:any = [];
  showSearch = false;

    logout(){
      this.log.loggedUser = null;
    }

    show(){
      this.showSearch = true;
    }
    hide(){
      this.showSearch = false;
    }
    hi(){
      console.log("hi")
      this.detail.ngOnInit()

    }
 
   ngOnInit(): void {
     this.cartService.getProducts()
     .subscribe(res=>{
      this.totalItem = res.length;
     });
     this.http.get('http://localhost:3000/all')
     .subscribe((res)=>{
      console.log(res);
      this.all = res;
     })
    
   }
}
