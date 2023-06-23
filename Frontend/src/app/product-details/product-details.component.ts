import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ApiService } from '../services/api.service';
import { NavigationEnd } from '@angular/router';
import * as $ from 'jquery';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  quantity: number = 0;
  filteredData:any;
  all:any = [];
  api_data = [];
constructor(private activeRoute: ActivatedRoute, private http : HttpClient, private cartService : CartService, private api : ApiService
  , private router: Router){
    this.detail()
   
}
prevprice :any;
totalpr :any;


ngOnInit(): void {
  this.router.events.subscribe((event)=>{
    if(event instanceof NavigationEnd){
      this.detail();
    }
  })
}
detail(): void {
  let productId = this.activeRoute.snapshot.paramMap.get('productId');
  //  console.warn(productId);

   
   this.http.get('http://localhost:3000/all')
  .subscribe(res => {
    this.all = res;
    this.filteredData=this.all.find((obj:any)=>{
     return obj.id==productId;
      
    });
    this.prevprice = this.filteredData.price;
    this.quantity = this.filteredData.quantity;
    console.log(this.quantity)
    this.totalpr = this.filteredData.price * this.filteredData.quantity;
    console.log(this.filteredData);
    console.log(this.totalpr)

   
    $("#apply").click(function(){
      $("#prevprice").css("text-decoration", "line-through");
      $("#prevprice").css("font-weight", "200");
    });
    
  })
}
couponCode!: string;
couponApplied = false;

calculateTotalPrice() {
  this.totalpr = this.filteredData.price * this.quantity;
  this.prevprice = this.totalpr
  this.filteredData.total = this.totalpr
  this.filteredData.quantity = this.quantity
}

increase() {
  this.quantity++;
  this.calculateTotalPrice();
}

decrease() {
  if (this.quantity > 0) {
    this.quantity--;
    this.calculateTotalPrice();
  }
}


onSubmit() {
  this.filteredData.total = this.totalpr;
  this.filteredData.quantity = this.quantity;
  let productId = this.activeRoute.snapshot.paramMap.get('productId');
  this.filteredData=this.all.find((obj:any)=>{
    return obj.id==productId;
     
   });
  
  if (this.couponCode == "GUNJAN") {
    // this.filteredData.price = 0;
   
    this.totalpr = 0;
    this.filteredData.total = this.totalpr;
    
    this.couponApplied = true;
    $()
  }
  else  if (this.couponCode == "NEHU") {
    // this.filteredData.price = 0.5 * this.filteredData.price;
    
    this.totalpr = 0.5 * this.totalpr;
    this.filteredData.total = this.totalpr;
    this.couponApplied = true;
   
    $()
  }
  else  if (this.couponCode == "OMPRAKASH") {
    // this.filteredData.price = 1.5 * this.filteredData.price;
    
    this.totalpr = 1.5 * this.totalpr;
    this.filteredData.total = 1.5 * this.totalpr;
    this.couponApplied = true;
    $()
  }
  else  if (this.couponCode == "SAKSHAM") {
    // this.filteredData.price = 1.5 * this.filteredData.price;
    
    this.totalpr = 0 * this.totalpr;
    this.filteredData.total = 0 * this.totalpr;
    this.couponApplied = true;
    $()
  }
}
addtocart(item : any){
  this.cartService.addToCart(item);
}

}
