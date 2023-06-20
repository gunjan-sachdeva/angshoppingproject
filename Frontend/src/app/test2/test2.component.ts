import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit , OnDestroy {


constructor(private cartService : CartService, private http : HttpClient){}
ngOnInit(): void {

this.filteredData = this.mens_suit;
$("button").click(function(){
  $('#side').toggle();
})
this.http.get('http://localhost:3000/mens_suit')
.subscribe(res => {
  // console.log('res', res);
  this.mens_suit = res;
  this.filteredData=this.mens_suit;
  this.totalprc = this.filteredData.price * this.filteredData.quantity;
})
console.log(this.totalprc);

}
filteredData:any;
mens_suit:any = [];
//   {
//     id: 501,
//     image : "../../assets/images/feature1.jpg",
//     title : "Van Heusen V ",
//     description : "Dot Men's Poly Viscose Shawl Collar Suit ",
//     price : 19.99,
//     total : 19.99,
//     rating :"⭐⭐⭐⭐⭐",
//     brand: "gucci",
//     instock : true,
//     quantity : 1,
//   },
//   {
//     id: 502,
//     image : "../../assets/images/feature2.jpg",
//     title : "Van Heusen Men's",
//     description : "Men's Synthetic Notch Lapel Suit. ",
//     price : 29.99,
//     total : 29.99,
//     rating :"⭐⭐⭐⭐",
//     brand: "gucci",
//     instock : true,
//     quantity : 1,
//   },
//   {
//     id: 503,
//     image : "../../assets/images/feature3.jpg",
//     title : "Van Heusen Men Suit ",
//     description : "Dress Set ",
//     price : 39.99,
//     total : 39.99,
//     rating :"⭐⭐⭐⭐⭐",
//     brand: "gucci",
//     instock : true,
//     quantity : 1,
//   },
//   {
//     id: 504,
//     image : "../../assets/images/suit1.jpg",
//     title : "Van Heusen Men ",
//     description : "Business Suit Pants Set ",
//     price : 19.99,
//     total : 19.99,
//     rating :"⭐⭐⭐⭐⭐",
//     brand: "gucci",
//     instock : true,
//     quantity : 1,
//   },
//   {
//     id: 505,
//     image : "../../assets/images/suit2.jpg",
//     title : "Van Heusen Men's Polyester",
//     description : " Blend Three Piece Suit-Dress Set  ",
//     price : 29.99,
//     total : 29.99,
//     rating :"⭐⭐⭐⭐",
//     brand: "gucci",
//     instock : false,
//     quantity : 1,
//   },
//   {
//     id: 506,
//     image : "../../assets/images/suit3.jpg",
//     title : "Van Heusen Men's  ",
//     description : "Polyester Blend Three Piece Suit ",
//     price : 39.99,
//     total : 39.99,
//     rating :"⭐⭐⭐⭐⭐",
//     brand: "blackberry",
//     instock : true,
//     quantity : 1,
//   },
//   {
//     id: 507,
//     image : "../../assets/images/suit4.jpg",
//     title : "Van Heusen ",
//     description : "Men Suit ",
//     price : 19.99,
//     total : 19.99,
//     rating :"⭐⭐⭐⭐⭐",
//     brand: "gucci",
//     instock : true,
//     quantity : 1,
//   },
//   {
//     id: 508,
//     image : "../../assets/images/suit5.jpg",
//     title : "Van Heusen Men's Rayon",
//     description : "White Two Piece Suit Business Pants Set ",
//     price : 29.99,
//     total : 29.99,
//     rating :"⭐⭐⭐⭐",
//     brand: "blackberry",
//     instock : true,
//     quantity : 1,
//   },
//   {
//     id: 509,
//     image : "../../assets/images/suit6.jpg",
//     title : "Van Heusen ",
//     description : "Men Suit ",
//     price : 39.99,
//     total : 39.99,
//     rating :"⭐⭐⭐⭐⭐",
//     brand: "gucci",
//     instock : true,
//     quantity : 1,
//   },
//   {
//     id: 510,
//     image : "../../assets/images/suit7.jpg",
//     title : "Raymond ",
//     description : "Dark Grey Suit ",
//     price : 19.99,
//     total : 19.99,
//     rating :"⭐⭐⭐⭐⭐",
//     brand: "blackberry",
//     instock : false,
//     quantity : 1,
//   },
//   {
//     id: 511,
//     image : "../../assets/images/suit8.jpg",
//     title : "Van Heusen Men's Cotton Blend ",
//     description : "White Two Piece Suit Business Pants Set ",
//     price : 29.99,
//     total : 29.99,
//     rating :"⭐⭐⭐⭐",
//     brand: "van",
//     instock : true,
//     quantity : 1,
//   },
//   {
//     id: 512,
//     image : "../../assets/images/suit9.jpg",
//     title : "Van Heusen Men Suit ",
//     description : "Polyester Blend Four Piece Suit-Dress Set  ",
//     price : 39.99,
//     total : 39.99,
//     rating :"⭐⭐⭐⭐⭐",
//     quantity : 1,
//     brand: "raymond",
//     instock : true,
//   },
// ];
totalprc : any;

sortingOption: string = 'price';
anotherSortingOption : string = 'brand';
yetanotherSortingOption : string = 'rating';
yetyetanotherSortingOption : string = 'instock';
filteredSuits = this.mens_suit;
sortMensSuitLow(): void {
  if (this.sortingOption === 'price') {
    this.mens_suit.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
  }
}
sortMensSuitHigh(): void {
  if (this.sortingOption === 'price') {
    this.mens_suit.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
  }
}

sortByBrand(catItem: string):void{
  var ele = document.getElementById("flexCheckDefault");
  if(!$("#flexCheckDefault").prop("checked") && !$("#flexCheckDefault2").prop("checked") && !$("#flexCheckDefault3").prop("checked") && !$("#flexCheckDefault4").prop("checked")){
    this.filteredData = this.mens_suit;
  }
  else{
    if(this.anotherSortingOption === 'brand'){
      this.filteredData = this.mens_suit.filter((items: { brand: string; })=>{
        return items.brand == catItem;
        
      })
      console.log(catItem)
    }
  }
 
}
sortByRating(catItemRating: string):void{
  var ele = document.getElementById("flexCheckDefault");
  if(!$("#flexCheckRating").prop("checked") && !$("#flexCheckRating1").prop("checked") && !$("#flexCheckRating2").prop("checked") && !$("#flexCheckRating4").prop("checked") && !$("#flexCheckRating3").prop("checked")){
    this.filteredData = this.mens_suit;
  }
  else{
    if(this.yetanotherSortingOption === 'rating'){
      this.filteredData = this.mens_suit.filter((items: { rating: string; })=>{
        return items.rating == catItemRating;
        
      })
      console.log(catItemRating)
    }
  }
 
}
sortByAvailablity(catItemAvail: boolean):void{
  var ele = document.getElementById("flexCheckDefault");
  if(!$("#flexCheckAvail").prop("checked") && !$("#flexCheckAvail1").prop("checked")){
    this.filteredData = this.mens_suit;
  }
  else{
    if(this.yetyetanotherSortingOption === 'instock'){
      this.filteredData = this.mens_suit.filter((items: { instock: boolean; })=>{
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

ngOnDestroy(): void {
  
}
cards = [
  { title: 'Card 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Card 2', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
  { title: 'Card 3', content: 'Integer vitae augue sit amet leo porta facilisis.' },
  { title: 'Card 4', content: 'Sed ultricies ligula quis nibh pellentesque, vitae facilisis justo efficitur.' },
  { title: 'Card 5', content: 'Vivamus sagittis magna non lectus laoreet, non vestibulum felis bibendum.' },
  { title: 'Card 6', content: 'Duis maximus nunc non libero bibendum, vel feugiat justo ornare.' },
];

}
