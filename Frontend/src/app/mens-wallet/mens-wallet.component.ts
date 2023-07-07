import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';
import { LoggedUserService } from '../services/logged-user.service';
@Component({
  selector: 'app-mens-wallet',
  templateUrl: './mens-wallet.component.html',
  styleUrls: ['./mens-wallet.component.css']
})
export class MensWalletComponent {
  isloggedin = false;
  constructor(private cartService : CartService, private http : HttpClient, private log : LoggedUserService){}
  ngOnInit(): void {
    
  this.filteredData = this.mens_shirt;
  $("button").click(function(){
    $('#side').toggle();
  })
  this.http.get('http://localhost:3000/wallets')
  .subscribe(res => {
    console.log('res', res);
    this.mens_shirt = res;
    this.filteredData=this.mens_shirt;
  })
  this.isloggedin = this.log.isloggedIn;
  }
  filteredData:any;
  mens_shirt:any = [];
  sortingOption: string = 'price';
  anotherSortingOption : string = 'brand';
  yetanotherSortingOption : string = 'rating';
  yetyetanotherSortingOption : string = 'instock';
  filteredSuits = this.mens_shirt;
  sortMensSuitLow(): void {
    if (this.sortingOption === 'price') {
      this.mens_shirt.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
    }
  }
  sortMensSuitHigh(): void {
    if (this.sortingOption === 'price') {
      this.mens_shirt.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
    }
  }
 
  sortByBrand(catItem: string):void{
    var ele = document.getElementById("flexCheckDefault");
    if(!$("#flexCheckDefault").prop("checked") && !$("#flexCheckDefault2").prop("checked") && !$("#flexCheckDefault3").prop("checked") && !$("#flexCheckDefault4").prop("checked")){
      this.filteredData = this.mens_shirt;
    }
    else{
      if(this.anotherSortingOption === 'brand'){
        this.filteredData = this.mens_shirt.filter((items: { brand: string; })=>{
          return items.brand == catItem;
          
        })
        console.log(catItem)
      }
    }
   
  }
  sortByRating(catItemRating: string):void{
    var ele = document.getElementById("flexCheckDefault");
    if(!$("#flexCheckRating").prop("checked") && !$("#flexCheckRating1").prop("checked") && !$("#flexCheckRating2").prop("checked") && !$("#flexCheckRating4").prop("checked") && !$("#flexCheckRating3").prop("checked")){
      this.filteredData = this.mens_shirt;
    }
    else{
      if(this.yetanotherSortingOption === 'rating'){
        this.filteredData = this.mens_shirt.filter((items: { rating: string; })=>{
          return items.rating == catItemRating;
          
        })
        console.log(catItemRating)
      }
    }
   
  }
  sortByAvailablity(catItemAvail: boolean):void{
    var ele = document.getElementById("flexCheckDefault");
    if(!$("#flexCheckAvail").prop("checked") && !$("#flexCheckAvail1").prop("checked")){
      this.filteredData = this.mens_shirt;
    }
    else{
      if(this.yetyetanotherSortingOption === 'instock'){
        this.filteredData = this.mens_shirt.filter((items: { instock: boolean; })=>{
          return items.instock == catItemAvail;
          
        })
        console.log(catItemAvail)
      }
    }
   
   
  }
  addtocart(item : any){
    this.cartService.addToCart(item);
  }

  
  onInputChange(event: Event) {
   
    const target = <HTMLInputElement>event.target;
    console.log(target.value);
  }

}
