import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
constructor(private http : HttpClient){}
orders:any = [];
allOrders:any = [];

ngOnInit(): void {
  this.http.get("http://localhost:8000/orders")
  .subscribe((res)=>{
    this.orders = res;
this.allOrders = this.orders.orders
    console.log("orders" )
    console.log(this.orders)

    console.log(res)
  })
}
}
