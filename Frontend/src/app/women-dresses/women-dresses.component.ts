import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-women-dresses',
  templateUrl: './women-dresses.component.html',
  styleUrls: ['./women-dresses.component.css']
})
export class WomenDressesComponent implements OnInit {
  constructor(private cartService : CartService){}
  ngOnInit(): void {

    this.filteredWomenData = this.women_dresses;
    $("button").click(function(){
      $('#side').toggle();
    })
    }
    filteredWomenData:any;
  women_dresses = [
    {
      instock : true,
      quantity : 1,
      id: 201,
      image : "../../assets/images/dress1.jpg",
      title : "Coattire A R Collection",
      description : "Women's Crepe Designer Print Short Dress Black",
      price : 19.99,
      total : 19.99,
      rating :"⭐⭐⭐⭐⭐",
      brand: "biba",
    },
    {id: 202,
      quantity : 1,
      instock : false,
      image : "../../assets/images/dress2.jpg",
      title : "Marks & Spencer",
      description : "Women's Viscose A-Line Knee-Length Casual Dress.",
      price : 29.99,
      total : 29.99,
      rating :"⭐⭐⭐⭐",
      brand: "levi",
    },
    {
      id: 203,
      quantity : 1,
      instock : false,
      image : "../../assets/images/dress3.jpg",
      title : "Marks & Spencer",
      description : "Women's Rayon Classic Knee-Length Casual Dress",
      price : 39.99,
      total : 39.99,
      rating :"⭐⭐⭐⭐⭐",
      brand: "biba",
    },
    {
      id: 204,
      quantity : 1,
      instock : true,
      image : "../../assets/images/dress5.jpg",
      title : "RARE",
      description : "Women's Synthetic a-line Knee-Long Dress",
      price : 19.99,
      total : 19.99,
      rating :"⭐⭐⭐⭐⭐",
      brand: "allen",
    },
    {
      id: 205,
      quantity : 1,
      instock : true,
      image : "../../assets/images/dress6.jpg",
      title : "Harpa",
      description : "Women Maxi A-Line Dress",
      price : 29.99,
      total : 29.99,
      rating :"⭐⭐⭐⭐",
      brand: "biba",
    },
    {
      id: 206,
      quantity : 1,
      image : "../../assets/images/dress7.jpg",
      title : "Miss Chase ",
      description : "Polyester Blend Three Piece Suit ",
      price : 39.99,
      total : 39.99,
      rating :"⭐⭐⭐⭐⭐",
      brand: "levi",
    },
    {
      id: 207,
      quantity : 1,
      instock : true,
      image : "../../assets/images/dress8.jpg",
      title : "Leriya Fashion ",
      description : "Western Dresses for Women. Short A-Line Dress for Girls ",
      price : 19.99,
      total : 19.99,
      rating :"⭐⭐⭐⭐⭐",
      brand: "biba",
    },
    {
      id: 208,
      quantity : 1,
      instock : true,
      image : "../../assets/images/dress9.jpg",
      title : "PURVAJA ",
      description : " Women’s High-Low Knee Length Dress",
      price : 29.99,
      total : 29.99,
      rating :"⭐⭐⭐⭐",
      brand: "levi",

    },
    {
      id: 209,
      quantity : 1,
      instock : true,
      image : "../../assets/images/dress10.jpg",
      title : "Sheetal Associates ",
      description : "Women's Sleeveless V-Neck Fit & Flare Casual Maxi Dress",
      price : 39.99,
      total : 39.99,
      rating :"⭐⭐⭐⭐⭐",
      brand: "biba",
    },
    {
      id: 210,
      quantity : 1,
      instock : true,
      image : "../../assets/images/dress11.jpg",
      title : "Lymio Dresses for Women ",
      description : "Western Dresses for Women",
      price : 19.99,
      total : 19.99,
      rating :"⭐⭐⭐⭐⭐",
      brand: "allen",
    },
    {
      id: 211,
      quantity : 1,
      instock : true,
      image : "../../assets/images/dress12.jpg",
      title : " Eden & Ivy Women's ",
      description : "White Two Piece Suit Business Pants Set ",
      price : 29.99,
      total : 29.99,
      rating :"⭐⭐⭐⭐",
      brand: "allen",
    },
    {
      id: 212,
      instock : true,
      image : "../../assets/images/dress13.jpg",
      title : "My Swag Women's",
      description : "Printed Sleeveless Round Neck Asymmetric Dress",
      price : 39.99,
      total : 39.99,
      rating :"⭐⭐⭐⭐⭐",
      brand: "aurelia",
    },
  ];
 

    sortingOption: string = 'price';
    anotherSortingOption2 : string = 'brand';
    yetanotherSortingOption : string = 'rating';
    yetyetanotherSortingOption : string = 'instock';
    filteredSuits = this.women_dresses;
    sortWomenDresLow(): void {
      if (this.sortingOption === 'price') {
        this.women_dresses.sort((a, b) => a.price - b.price);
      }
    }
    sortWomenDresHigh(): void {
      if (this.sortingOption === 'price') {
        this.women_dresses.sort((a, b) => b.price - a.price);
      }
    }
   
    sortByBrandWomen(catItemWomen: string):void{
      var ele2 = document.getElementById("flexCheckDefault");
      if(!$("#flexDefault").prop("checked") && !$("#flexDefault2").prop("checked") && !$("#flexDefault3").prop("checked") && !$("#flexDefault4").prop("checked")){
        this.filteredWomenData = this.women_dresses;
      }
      else{
        if(this.anotherSortingOption2 === 'brand'){
          this.filteredWomenData = this.women_dresses.filter((items)=>{
            return items.brand == catItemWomen;
          
          })
          console.log(this.filteredWomenData);
        }
      }
     
    }
    sortByRating(catItemRating: string):void{
      var ele = document.getElementById("flexCheckDefault");
      if(!$("#flexCheckRating").prop("checked") && !$("#flexCheckRating1").prop("checked") && !$("#flexCheckRating2").prop("checked") && !$("#flexCheckRating4").prop("checked") && !$("#flexCheckRating3").prop("checked")){
        this.filteredWomenData = this.women_dresses;
      }
      else{
        if(this.yetanotherSortingOption === 'rating'){
          this.filteredWomenData = this.women_dresses.filter((items)=>{
            return items.rating == catItemRating;
            
          })
          console.log(catItemRating)
        }
      }
     
    }
    sortByAvailablity(catItemAvail: boolean):void{
      var ele = document.getElementById("flexCheckDefault");
      if(!$("#flexCheckAvail").prop("checked") && !$("#flexCheckAvail1").prop("checked")){
        this.filteredWomenData = this.women_dresses;
      }
      else{
        if(this.yetyetanotherSortingOption === 'instock'){
          this.filteredWomenData = this.women_dresses.filter((items)=>{
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
