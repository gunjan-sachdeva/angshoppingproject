import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-women-footwear',
  templateUrl: './women-footwear.component.html',
  styleUrls: ['./women-footwear.component.css'],
})
export class WomenFootwearComponent {
  constructor(private cartService : CartService){}
  women_footwear = [
    {
      id : '2201',
      image: '../../assets/images/footwear1.jpg',
      title: 'Black Heels',
      description: "Women's High Heel Shoes",
      price: 49.99,
      quantity: 1,
      total: 49.99,
      rating: '⭐⭐⭐⭐',
      brand: 'adidas',
      instock : true,
    },
    {
      id : '2202',
      image: '../../assets/images/footwear2.jpg',
      title: 'White Sneakers',
      description: "Women's Casual Shoes",
      price: 39.99,
      total: 39.99,
      rating: '⭐⭐⭐⭐',
      brand: 'reebok',
      quantity: 1,
      instock : true,
    },
    {
      id : '2203',
      image: '../../assets/images/footwear3.jpg',
      title: 'Leather Boots',
      description: "Women's Knee-High Boots",
      price: 89.99,
      total: 89.99,
      rating: '⭐⭐⭐⭐⭐',
      brand: 'adidas',
      quantity: 1,
      instock : true,
    },
    {
      id : '2204',
      image: '../../assets/images/footwear4.jpg',
      title: 'Ballet Flats',
      description: "Women's Comfortable Flat Shoes",
      price: 29.99,
      total: 29.99,
      quantity: 1,
      instock : true,
      rating: '⭐⭐⭐⭐',
      brand: 'adidas'
    },
    {
      id : '2205',
      image: '../../assets/images/footwear5.jpg',
      title: 'Wedge Sandals',
      description: "Women's Platform Sandals",
      price: 59.99,
      total: 59.99,
      quantity: 1,
      instock : true,
      rating: '⭐⭐⭐⭐⭐',
      brand: 'sparx'
    },
    {
      id : '2206',
      image: '../../assets/images/footwear6.jpg',
      title: 'Ankle Boots',
      description: "Women's Chunky Heel Booties",
      price: 69.99,
      total: 69.99,
      instock : true,
      quantity: 1,
      rating: '⭐⭐⭐⭐',
      brand: 'adidas'
    },
    {
      id : '2207',
      image: '../../assets/images/footwear7.jpg',
      title: 'Espadrilles',
      description: "Women's Summer Shoes",
      price: 39.99,
      quantity: 1,
      total: 39.99,
      rating: '⭐⭐⭐⭐⭐',
      instock : false,
      brand: 'reebok',
    },
    {
      id : '2208',
      image: '../../assets/images/footwear8.jpg',
      title: 'Stiletto Heels',
      description: "Women's Pointed Toe Shoes",
      price: 49.99,
      quantity: 1,
      total: 49.99,
      rating: '⭐⭐⭐⭐',
      instock : true,
      brand: 'adidas'
    },
    {
      id : '2209',
      image: '../../assets/images/footwear9.jpg',
      title: 'Lace-Up Boots',
      description: "Women's Combat Boots",
      price: 79.99,
      quantity: 1,
      total: 79.99,
      rating: '⭐⭐⭐⭐⭐',
      brand : 'nike',
    },
    {
      id : '2210',
      image: '../../assets/images/footwear10.jpg',
      title: 'Flat Sandals',
      description: "Women's Strappy Sandals",
      price: 29.99,
      total: 29.99,
      quantity: 1,
      rating: '⭐⭐⭐⭐',
      instock : false,
      brand: 'adidas'
    },
    {
      id : '2211',
      image: '../../assets/images/footwear11.jpg',
      title: 'Pumps',
      description: "Women's Classic High Heel Shoes",
      price: 59.99,
      total: 59.99,
      rating: '⭐⭐⭐⭐⭐',
      quantity: 1,
      instock : true,
      brand : 'nike',
    },
    {
      id : '2212',
      image: '../../assets/images/footwear12.jpg',
      title: 'Sneaker Boots',
      description: "Women's Fashionable High-Top Sneakers",
      price: 69.99,
      total: 69.99,
      rating: '⭐⭐⭐⭐',
      instock : true,
      quantity: 1,
      brand: 'sparx'
    },
  ];
  ngOnInit(): void {

    this.filteredWomenData = this.women_footwear;
    $("button").click(function(){
      $('#side').toggle();
    })
    }
    filteredWomenData:any;
    sortingOption: string = 'price';
    anotherSortingOption2 : string = 'brand';
    yetanotherSortingOption : string = 'rating';
    yetyetanotherSortingOption : string = 'instock';
    filteredSuits = this.women_footwear;
    sortWomenDresLow(): void {
      if (this.sortingOption === 'price') {
        this.women_footwear.sort((a, b) => a.price - b.price);
      }
    }
    sortWomenDresHigh(): void {
      if (this.sortingOption === 'price') {
        this.women_footwear.sort((a, b) => b.price - b.price);
      }
    }
   
    sortByBrandWomen(catItemWomen: string):void{
      var ele2 = document.getElementById("flexCheckDefault");
      if(!$("#flexDefault").prop("checked") && !$("#flexDefault2").prop("checked") && !$("#flexDefault3").prop("checked") && !$("#flexDefault4").prop("checked")){
        this.filteredWomenData = this.women_footwear;
      }
      else{
        if(this.anotherSortingOption2 === 'brand'){
          this.filteredWomenData = this.women_footwear.filter((items)=>{
            return items.brand == catItemWomen;
          
          })
          console.log(this.filteredWomenData);
        }
      }
     
    }
    sortByRating(catItemRating: string):void{
      var ele = document.getElementById("flexCheckDefault");
      if(!$("#flexCheckRating").prop("checked") && !$("#flexCheckRating1").prop("checked") && !$("#flexCheckRating2").prop("checked") && !$("#flexCheckRating4").prop("checked") && !$("#flexCheckRating3").prop("checked")){
        this.filteredWomenData = this.women_footwear;
      }
      else{
        if(this.yetanotherSortingOption === 'rating'){
          this.filteredWomenData = this.women_footwear.filter((items)=>{
            return items.rating == catItemRating;
            
          })
          console.log(catItemRating)
        }
      }
     
    }
    sortByAvailablity(catItemAvail: boolean):void{
      var ele = document.getElementById("flexCheckDefault");
      if(!$("#flexCheckAvail").prop("checked") && !$("#flexCheckAvail1").prop("checked")){
        this.filteredWomenData = this.women_footwear;
      }
      else{
        if(this.yetyetanotherSortingOption === 'instock'){
          this.filteredWomenData = this.women_footwear.filter((items)=>{
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
