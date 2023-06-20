import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-placed',
  templateUrl: './placed.component.html',
  styleUrls: ['./placed.component.css']
})
export class PlacedComponent implements OnInit{

users:any = [];
userName: any;
constructor(private http : HttpClient,private cartService : CartService){
  this.http.get("http://localhost:8000/registeredUsers")
  .subscribe((res)=>{
    console.log(res);
    this.users = res;
    console.log(this.users[0].name)
    console.log(this.users.length);
    this.userName = this.users[0].name;
  })
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
