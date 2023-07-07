import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { LoggedUserService } from '../services/logged-user.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  isloggedin = false;
  constructor(private cartService: CartService, private log : LoggedUserService){}
  ngOnInit(): void {
    this.isloggedin = this.log.isloggedIn;
  }
  featured = [
    {
      id : 30,
      image : "../../assets/images/feature1.jpg",
      title : "Van Heusen V ",
      description : "Dot Men's Poly Viscose Shawl Collar Suit ",
      price : 19.99,
      total : 19.99,
      quantity : 1,
      rating :"⭐⭐⭐⭐⭐",

    },
    {
      id : 31,
      image : "../../assets/images/feature2.jpg",
      title : "Van Heusen Men's",
      description : "Men's Synthetic Notch Lapel Suit. ",
      price : 29.99,
      total: 29.99,
      quantity : 1,
      rating :"⭐⭐⭐⭐"
    },
    {
      id : 32,
      image : "../../assets/images/feature3.jpg",
      title : "Van Heusen Men Suit ",
      description : "Dress Set ",
      quantity : 1,
      price : 39.99,
      total: 39.99,
      rating :"⭐⭐⭐⭐⭐"
    },
  ];
  addtocart(item : any){
    this.cartService.addToCart(item);
  }
  
}
