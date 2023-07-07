import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { LoggedUserService } from '../services/logged-user.service';

@Component({
  selector: 'app-placed',
  templateUrl: './placed.component.html',
  styleUrls: ['./placed.component.css']
})
export class PlacedComponent implements OnInit{

users:any = [];
myuser:any;
userName: any;
constructor(private http : HttpClient,private cartService : CartService, private log : LoggedUserService){
  
  this.userName = this.log.loggedUser.fname;
  this.myuser = this.log.loggedUser;
}
length = this.users.length;
array : any;
ngOnInit(): void {
  this.cartService.getProducts()
  .subscribe(
    (res)=>{
      this.array = res;
      console.log(res);
    }
  )
}

}
