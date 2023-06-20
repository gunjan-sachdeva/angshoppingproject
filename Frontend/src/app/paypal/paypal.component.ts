import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { PaymentService } from '../services/payment.service';
import { GetDataService } from '../services/get-data.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
  constructor(private router: Router, private payment : PaymentService, private getData : GetDataService,
    private cart : CartService
    ){}
@ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;

grandTotal:any;
amount : number = this.cart.getTotalPrice();
ngOnInit(): void {
  console.log("amount: " + this.amount)
  window.paypal.Buttons(
    {
      style:{
        layout: 'horizontal',
        color: 'blue',
        shape: 'rect',
        label : 'paypal',
      },
      createOrder : (data:any, actions: any) =>{
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: this.amount.toString(),
                currency_code : 'USD'
              }
            }
          ]
        })
      },
      onApprove : (data:any , actions : any) =>{
        return actions.order.capture().then((details : any)=>{
          if(details.status === 'COMPLETED'){
            this.payment.transactionID = details.id;
            this.router.navigate(['confirm'])
          }
        });
      },
      onError: (error:any) =>{
        console.log(error)
      }
    }
  ).render(this.paymentRef.nativeElement);
}
}
