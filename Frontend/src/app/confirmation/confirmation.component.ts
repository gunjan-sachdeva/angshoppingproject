import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { PaypalDataService } from '../paypal-data.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  grandTotal : number;
transactionID = "";
users = [];

constructor(private payment : PaymentService, private paypal : PaypalDataService, private cart : CartService){
  this.users = this.paypal.users;
}

ngOnInit(): void {
  this.transactionID = this.payment.transactionID;
 
 
  this.grandTotal = this.cart.getTotalPrice();
  console.log(this.paypal.users);
}

}
