import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-women-accessories',
  templateUrl: './women-accessories.component.html',
  styleUrls: ['./women-accessories.component.css']
})
export class WomenAccessoriesComponent implements OnInit {
  
  constructor(private cartSrvice : CartService){}
  women_purses = [
    {
      id : 112,
      "image": "../../assets/images/purse1.jpg",
      "title": "Leather Crossbody Bag",
      "description": "Stylish and functional leather crossbody bag for women",
      "price": 49.99,
      quantity : 1,
      "total": 49.99,
      "rating": "⭐⭐⭐⭐⭐",
      brand: "lavie",
      instock : true,
    },
    {
      id : 111,
      "image": "../../assets/images/purse2.jpg",
      "title": "Canvas Tote Bag",
      "description": "Large capacity canvas tote bag for women",
      "price": 39.99,
      "total": 39.99,
      "rating": "⭐⭐⭐⭐",
      quantity : 1,
      brand: 'ladida',
      instock : false,
    },
    {
      id : 110,
      "image": "../../assets/images/purse3.jpg",
      "title": "Shoulder Bag",
      "description": "Casual shoulder bag for women",
      "price": 29.99,
      "total": 29.99,
      "rating": "⭐⭐⭐⭐",
      quantity : 1,
      brand: "lavie",
      instock : true,
    },
    {
      id : 109,
      "image": "../../assets/images/purse4.jpg",
      "title": "Satchel Bag",
      "description": "Elegant satchel bag for women",
      "price": 59.99,
      "total": 59.99,
      quantity : 1,
      "rating": "⭐⭐⭐⭐⭐",
      brand: 'ladida',
      instock : false,
    },
    {
      id : 108,
      "image": "../../assets/images/purse5.jpg",
      "title": "Clutch Bag",
      "description": "Chic and versatile clutch bag for women",
      "price": 19.99,
      "total": 19.99,
      "rating": "⭐⭐⭐⭐",
      quantity : 1,
      brand: "lavie",
      instock : true,
    },
    {
      id : 107,
      "image": "../../assets/images/purse6.jpg",
      "title": "Backpack",
      "description": "Functional and stylish backpack for women",
      "price": 49.99,
      "total": 49.99,
      "rating": "⭐⭐⭐⭐",
      quantity : 1,
      brand: 'hidesign',
      instock : true,
    },
    {
      id : 106,
      "image": "../../assets/images/purse7.jpg",
      "title": "Hobo Bag",
      "description": "Casual hobo bag for women",
      "price": 39.99,
      quantity : 1,
      "total": 39.99,
      "rating": "⭐⭐⭐⭐",
      brand: "lavie",
      instock : true,
    },
    {
      id : 105,
      "image": "../../assets/images/purse8.jpg",
      "title": "Tote Bag",
      "description": "Classic and versatile tote bag for women",
      "price": 29.99,
      "total": 29.99,
      quantity : 1,
      "rating": "⭐⭐⭐⭐⭐",
      brand: 'esbeda',
      instock : true,
    },
    {
      id : 104,
      "image": "../../assets/images/purse9.jpg",
      "title": "Crossbody Clutch",
      "description": "Elegant crossbody clutch for women",
      "price": 59.99,
      "total": 59.99,
      "rating": "⭐⭐⭐⭐",
      quantity : 1,
      brand: "lavie",
      instock : true,
    },
    {
      id : 103,
      "image": "../../assets/images/purse10.jpg",
      "title": "Mini Backpack",
      "description": "Small and cute mini backpack for women",
      "price": 19.99,
      "total": 19.99,
      "rating": "⭐⭐⭐⭐⭐",
      quantity : 1,
      brand: 'hidesign',
      instock : true,
    },
    { id : 102,
      "image": "../../assets/images/purse11.jpg",
      "title": "Sling Bag",
      "description": "Casual and convenient sling bag for women",
      "price": 49.99,
      "total": 49.99,
      "rating": "⭐⭐⭐⭐",
      quantity : 1,
      brand: "lavie",
      instock : true,
    },
    {
      id : 101,
      "image": "../../assets/images/purse12.jpg",
      "title": "Wristlet",
      "description": "Versatile and stylish wristlet for women",
      "price": 39.99,
      "total": 39.99,
      "rating":  "⭐⭐⭐⭐",
      "quantity" : 1,
      brand: 'esbeda',
      instock : true,
    },
  ]
  ngOnInit(): void {

    this.filteredWomenData = this.women_purses;
    $("button").click(function(){
      $('#side').toggle();
    })
    }
    filteredWomenData:any;
    sortingOption: string = 'price';
    anotherSortingOption2 : string = 'brand';
    yetanotherSortingOption : string = 'rating';
    yetyetanotherSortingOption : string = 'instock';
    filteredSuits = this.women_purses;
    sortWomenDresLow(): void {
      if (this.sortingOption === 'price') {
        this.women_purses.sort((a, b) => a.price - b.price);
      }
    }
    sortWomenDresHigh(): void {
      if (this.sortingOption === 'price') {
        this.women_purses.sort((a, b) => b.price - a.price);
      }
    }
   
    sortByBrandWomen(catItemWomen: string):void{
      var ele2 = document.getElementById("flexCheckDefault");
      if(!$("#flexDefault").prop("checked") && !$("#flexDefault2").prop("checked") && !$("#flexDefault3").prop("checked") && !$("#flexDefault4").prop("checked")){
        this.filteredWomenData = this.women_purses;
      }
      else{
        if(this.anotherSortingOption2 === 'brand'){
          this.filteredWomenData = this.women_purses.filter((items)=>{
            return items.brand == catItemWomen;
          
          })
          console.log(this.filteredWomenData);
        }
      }
     
    }
    sortByRating(catItemRating: string):void{
      var ele = document.getElementById("flexCheckDefault");
      if(!$("#flexCheckRating").prop("checked") && !$("#flexCheckRating1").prop("checked") && !$("#flexCheckRating2").prop("checked") && !$("#flexCheckRating4").prop("checked") && !$("#flexCheckRating3").prop("checked")){
        this.filteredWomenData = this.women_purses;
      }
      else{
        if(this.yetanotherSortingOption === 'rating'){
          this.filteredWomenData = this.women_purses.filter((items)=>{
            return items.rating == catItemRating;
            
          })
          console.log(catItemRating)
        }
      }
     
    }
    sortByAvailablity(catItemAvail: boolean):void{
      var ele = document.getElementById("flexCheckDefault");
      if(!$("#flexCheckAvail").prop("checked") && !$("#flexCheckAvail1").prop("checked")){
        this.filteredWomenData = this.women_purses;
      }
      else{
        if(this.yetyetanotherSortingOption === 'instock'){
          this.filteredWomenData = this.women_purses.filter((items)=>{
            return items.instock == catItemAvail;
            
          })
          console.log(catItemAvail)
        }
      }
     
     
    }
    
    onInputChange(event: Event) {
     
      const target = <HTMLInputElement>event.target;
      console.log(target.value);
    }
    addtocart(item : any){
      this.cartSrvice.addToCart(item);
    }
}
