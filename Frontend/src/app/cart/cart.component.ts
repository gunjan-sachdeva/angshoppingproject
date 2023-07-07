import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthGuard } from '../auth.guard';
import Swal from 'sweetalert2';
import { SharedService } from '../shared/shared.service';
import { LoggedUserService } from '../services/logged-user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
 
 public products : any = [];
 public grandTotal !: number;
 public finalPrice !: number;
 user:any;
 constructor(private cartService : CartService, private shared : SharedService, private log : LoggedUserService){}
 message = "hi";
 ngOnInit(): void {
   this.cartService.getProducts()
   .subscribe(res=>{
      this.products = res;
      this.finalPrice = this.products.price * this.products.quantity;
      console.log(this.finalPrice)
      this.grandTotal = this.cartService.getTotalPrice();
   })
   this.shared.setMessage(this.message);
   this.user = this.log.loggedUser;
 }
 removeItem(item :any){
  Swal.fire({
    title: 'Do you want to remove the item from the cart?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes, remove',
    denyButtonText: `Don't remove`,
  }).then((result) => {

    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {   
       this.cartService.removeCartItem(item);

      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
 }
 emptycart(){
  this.cartService.removeAllCart();
 }



 
}
// cartItems = [
//   {
//     name: 'Suit 1',
//     image: '../../assets/images/suit1.jpg',
//     quantity: 1,
//     price: '$79.99'
//   },
//   {
//     name: 'Suit 2',
//     image: '../../assets/images/suit2.jpg',
//     quantity: 2,
//     price: '$49.99'
//   },
//   {
//     name: 'Suit 3',
//     image: '../../assets/images/suit3.jpg',
//     quantity: 1,
//     price: '$59.99'
//   },
//   {
//     name: 'Suit 4',
//     image: '../../assets/images/suit4.jpg',
//     quantity: 1,
//     price: '$34.99'
//   },
//   {
//     name: 'Suit 5',
//     image: '../../assets/images/suit5.jpg',
//     quantity: 3,
//     price: '$29.99'
//   }
// ];
// subtotal = "$300";