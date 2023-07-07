import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { LoggedUserService } from '../services/logged-user.service';

@Component({
  selector: 'app-women-saree',
  templateUrl: './women-saree.component.html',
  styleUrls: ['./women-saree.component.css']
})
export class WomenSareeComponent {
  isloggedin = false;
  constructor(private cartService : CartService, private log : LoggedUserService){}
  sarees = [
    {
      id: 401,
      image: "../../assets/images/saree1.jpg",
      title: "Red Silk Saree",
      description: "Traditional Indian Red Silk Saree with Gold Border",
      price: 49.99,
      total: 49.99,
      instock : true,
      quantity: 1,
      rating: "⭐⭐⭐⭐",
      brand: 'mimosa',
    },
    {
      id: 402,
      image: "../../assets/images/saree2.jpg",
      title: "Blue Georgette Saree",
      description: "Blue Georgette Saree with Silver Embroidery",
      price: 59.99,
      total: 59.99,
      instock : true,
      quantity: 1,
      rating: "⭐⭐⭐⭐⭐",
      brand: 'glory'
    },
    {
      id: 403,
      image: "../../assets/images/saree3.jpg",
      title: "Green Cotton Saree",
      description: "Light Green Cotton Saree with Floral Print",
      price: 39.99,
      total : 39.99,
      instock : true,
      quantity: 1,
      rating: "⭐⭐⭐",
      brand: 'mimosa',
    },
    {
      id: 404,
      image: "../../assets/images/saree4.jpg",
      title: "Yellow Banarasi Silk Saree",
      description: "Yellow Banarasi Silk Saree with Zari Border",
      price: 79.99,
      total: 79.99,
      instock : true,
      quantity: 1,
      rating: "⭐⭐⭐⭐⭐",
      brand: 'gaurang',
    },
    {
      id: 405,
      image: "../../assets/images/saree5.jpg",
      title: "Pink Chiffon Saree",
      description: "Pink Chiffon Saree with Silver Embellishments",
      price: 69.99,
      total: 69.99,
      instock : true,
      quantity: 1,
      rating: "⭐⭐⭐⭐",
      brand: 'mimosa',
    },
    {
      id: 406,
      image: "../../assets/images/saree6.jpg",
      title: "Orange Net Saree",
      description: "Orange Net Saree with Gold Sequins",
      price: 49.99,
      total: 49.99,
      rating: "⭐⭐⭐⭐⭐",
      instock : true,
      quantity: 1,
      brand: 'mimosa',
    },
    {
      id: 407,
      image: "../../assets/images/saree7.jpg",
      title: "Black Crepe Saree",
      description: "Black Crepe Saree with White Stripes",
      price: 59.99,
      total: 59.99,
      rating: "⭐⭐⭐",
      instock : true,
      quantity: 1,
      brand: 'kalanjali'
    },
    {
      id: 408,
      image: "../../assets/images/saree8.jpg",
      title: "Purple Velvet Saree",
      description: "Purple Velvet Saree with Silver Border",
      price: 89.99,
      total: 89.99,
      rating: "⭐⭐⭐⭐⭐",
      brand: 'mimosa',
    },
    {
      id: 409,
      image: "../../assets/images/saree9.jpg",
      title: "Turquoise Silk Saree",
      description: "Turquoise Silk Saree with Gold Embroidery",
      price: 79.99,
      total: 79.99,
      rating: "⭐⭐⭐⭐",
      instock : true,
      quantity: 1,
      brand: 'kalanjali'
    },
    {
      id: 410,
      image: "../../assets/images/saree10.jpg",
      title: "Magenta Satin Saree",
      description: "Magenta Satin Saree with Gold Embellishments",
      price: 69.99,
      total: 69.99,
      rating: "⭐⭐⭐⭐⭐",
      instock : true,
      quantity: 1,
      brand: 'mimosa',
    },
    {
      id: 411,
      image: "../../assets/images/saree11.jpg",
      title: "Green Banarasi Saree",
      description: "Green Banarasi Saree with Zari Buttas",
      price: 89.99,
      total: 89.99,
      rating: "⭐⭐⭐⭐",
      instock : true,
      quantity: 1,
      brand: 'kalanjali'
    },
    {
      id: 412,
      "image": "../../assets/images/saree12.jpg",
      "title": "Chiffon Saree",
      "description": "Women's Chiffon Saree with Zari Border",
      "price": 49.99,
      "total": 49.99,
      "rating": "⭐⭐⭐⭐",
      instock : true,
      quantity: 1,
      brand: 'mimosa',
    }
  ]
  ngOnInit(): void {

    this.filteredWomenData = this.sarees;
    $("button").click(function(){
      $('#side').toggle();
    })
    this.isloggedin = this.log.isloggedIn;
    }
    filteredWomenData:any;
    sortingOption: string = 'price';
    anotherSortingOption2 : string = 'brand';
    yetanotherSortingOption : string = 'rating';
    yetyetanotherSortingOption : string = 'instock';
    filteredSuits = this.sarees;
    sortWomenDresLow(): void {
      if (this.sortingOption === 'price') {
        this.sarees.sort((a, b) => a.price - b.price);
      }
    }
    sortWomenDresHigh(): void {
      if (this.sortingOption === 'price') {
        this.sarees.sort((a, b) => b.price - a.price);
      }
    }
   
    sortByBrandWomen(catItemWomen: string):void{
      var ele2 = document.getElementById("flexCheckDefault");
      if(!$("#flexDefault").prop("checked") && !$("#flexDefault2").prop("checked") && !$("#flexDefault3").prop("checked") && !$("#flexDefault4").prop("checked")){
        this.filteredWomenData = this.sarees;
      }
      else{
        if(this.anotherSortingOption2 === 'brand'){
          this.filteredWomenData = this.sarees.filter((items)=>{
            return items.brand == catItemWomen;
          
          })
          console.log(this.filteredWomenData);
        }
      }
     
    }
    sortByRating(catItemRating: string):void{
      var ele = document.getElementById("flexCheckDefault");
      if(!$("#flexCheckRating").prop("checked") && !$("#flexCheckRating1").prop("checked") && !$("#flexCheckRating2").prop("checked") && !$("#flexCheckRating4").prop("checked") && !$("#flexCheckRating3").prop("checked")){
        this.filteredWomenData = this.sarees;
      }
      else{
        if(this.yetanotherSortingOption === 'rating'){
          this.filteredWomenData = this.sarees.filter((items)=>{
            return items.rating == catItemRating;
            
          })
          console.log(catItemRating)
        }
      }
     
    }
    sortByAvailablity(catItemAvail: boolean):void{
      var ele = document.getElementById("flexCheckDefault");
      if(!$("#flexCheckAvail").prop("checked") && !$("#flexCheckAvail1").prop("checked")){
        this.filteredWomenData = this.sarees;
      }
      else{
        if(this.yetyetanotherSortingOption === 'instock'){
          this.filteredWomenData = this.sarees.filter((items)=>{
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
