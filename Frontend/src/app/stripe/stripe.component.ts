import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {
  constructor(private router : Router, private cartService : CartService) { }
  amount:any;
  route(){
    this.router.navigate(['placed'])
  }
  handler:any = null;
  ngOnInit() {
    this.amount = this.cartService.getTotalPrice()
    this.loadStripe();
  }
 
  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51NBboxSGOhXQSt3ZowuRFazJ6lswsZUyWiKAHqlwdzzOvBNqFzTznAcuux0Lloc9X6p1ESsvKTGOK9FxSf4omIsF00FHh1b46Q',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
    
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });

    this.route();
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51NBboxSGOhXQSt3ZowuRFazJ6lswsZUyWiKAHqlwdzzOvBNqFzTznAcuux0Lloc9X6p1ESsvKTGOK9FxSf4omIsF00FHh1b46Q',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
 
}
