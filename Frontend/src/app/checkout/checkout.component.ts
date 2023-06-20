import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';
import { map } from 'rxjs';
import Swal from 'sweetalert2';
import { Router, RouterLink } from '@angular/router';
import { PaymentService } from '../services/payment.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  @Input() cartData: any;
  message!: string; 
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService, private http : HttpClient, private shared : SharedService, private router : Router
    , private payment : PaymentService, private getData : GetDataService){}

    transactionId = "";
  
  myArray: any;
  form = {
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    message: ""
  }
  integerRegex = /^\d+$/;
  emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;
  register : any = this.form ;

  
  resetForm() {
    this.form = {
      fname: '',
      lname: '',
      mobile: '',
      email: '',
      message: ''
    };
  }
 data :any
  registerfn(){
    console.log(this.form);
    this.myArray.push(this.form);
    this.resetForm();
    this.data = {
      fname: this.form.fname,
      lname: this.form.lname,
      mobile: this.form.mobile,
      email: this.form.email,
      message: this.form.message
     
    }
    console.log(this.myArray[0].email);
    console.log(this.data)
  }
 
  onSubmit(){
    
    
  }
  ngOnInit(): void {
    this.grandTotal = this.cartService.getTotalPrice();
    console.log("mydata" + this.grandTotal);
    let ele = document.getElementById("price");
    ele.innerHTML = this.grandTotal.toString();
    this.transactionId = this.payment.transactionID;
    this.http.get('http://localhost:3000/myArray2')
    .subscribe(res => {
      // console.log('res', res);
      this.myArray = res;
      this.myArray = res;
    })
    this.message = this.shared.getMessage();

    this.cartService.getProducts()
    .subscribe(res2=>{
       this.products = res2;
       this.grandTotal = this.cartService.getTotalPrice();
       console.log(res2)
       console.log(this.products.length)

    })

    this.grandTotal = this.getData.grandTotal;
    console.log("service data " + this.getData.grandTotal)
    }
    startNodeApplication() {
      this.http.get('http://localhost:8000/start').subscribe({
        next: () => {
          console.log('Node application started successfully!');
        },
        error: (error) => {
          console.error('Failed to start Node application:', error);
        }
      });
    }
    async orderDetails(): Promise<void>{

      const { value: text } = await Swal.fire({
        title: 'Enter Credit Card',
        
        input: 'text',
        inputLabel: 'Your Card Number:',
        inputPlaceholder: 'Enter your 12 Digit Card Number'
      })
   
      if (text.length === 12) {
        
        // Swal.fire(icon);
        Swal.fire({
          icon : 'success',
         
          
          title: 'Your Order is placed'
          
          
        })
        this.startNodeApplication();
        this.router.navigate(['/placed'])
        
      }
    }
    
}
