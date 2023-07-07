import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';
import { LoggedUserService } from '../services/logged-user.service';

@Component({
  selector: 'app-feedback-mongo',
  templateUrl: './feedback-mongo.component.html',
  styleUrls: ['./feedback-mongo.component.css']
})
export class FeedbackMongoComponent implements OnInit {
  isloggedin = false;
constructor(private http : HttpClient, private cartService : CartService, private log : LoggedUserService){}
data:any = [];
searchText:any;
  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/items')
    .subscribe((res)=>{
      console.log(res)
      this.data = res;
    })
    this.isloggedin = this.log.isloggedIn;
  }
  addtocart(item : any){
    this.cartService.addToCart(item);
  }



}
