import { Component } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  value:any;
  mens_suit:any = [
    {
      image : "../../assets/images/feature1.jpg",
      title : "Van Heusen V ",
      description : "Dot Men's Poly Viscose Shawl Collar Suit ",
      price : 19.99,
      rating :"⭐⭐⭐⭐⭐"
    },
    {
      image : "../../assets/images/feature2.jpg",
      title : "Van Heusen Men's",
      description : "Men's Synthetic Notch Lapel Suit. ",
      price : 29.99,
      rating :"⭐⭐⭐⭐"
    },
    {
      image : "../../assets/images/shirt1.jpg",
      title : "KINGDOM OF WHITE",
      description : "Relaxer Half Sleeve White Casual Shirt with Cutaway Collar ",
      price : 19.99,
      rating :"⭐⭐⭐⭐⭐"
    },
    {
      image : "../../assets/images/shirt2.jpg",
      title : "Gewani Men's",
      description : "Checkered Slim Fit Cotton Casual Shirt",
      price : 29.99,
      rating :"⭐⭐⭐⭐"
    },
    {
      image : "../../assets/images/shirt3.jpg",
      title : "Dennis Lingo Men's ",
      description : "Solid Slim Fit Cotton Casual Shirt",
      price : 39.99,
      rating :"⭐⭐⭐⭐⭐"
    },
    {
      image : "../../assets/images/shirt4.jpg",
      title : "Dennis Lingo Men's ",
      description : "Checkered Slim fit Casual Shirt ",
      price : 19.99,
      rating :"⭐⭐⭐⭐⭐"
    },
    {
      image : "../../assets/images/shirt5.jpg",
      title : "U-TURN Casual Shirt for Men",
      description : "  Men Printed Striped Shirt ",
      price : 29.99,
      rating :"⭐⭐⭐⭐"
    },
    {
      image : "../../assets/images/shirt6.jpg",
      title : "HammerSmith ",
      description : "Men Casual Shirt",
      price : 39.99,
      rating :"⭐⭐⭐⭐⭐"
    },
    {
      image : "../../assets/images/shirt7.jpg",
      title : "Allen Solly",
      description : "Men's Slim Fit Shirt",
      price : 19.99,
      rating :"⭐⭐⭐⭐⭐"
    },
    {
      image : "../../assets/images/shirt8.jpg",
      title : "Van Heusen Men's Rayon",
      description : "White Two Piece Suit Business Pants Set ",
      price : 29.99,
      rating :"⭐⭐⭐⭐",
      category: "shirts"
    },
    {
      image : "../../assets/images/suit6.jpg",
      title : "Van Heusen ",
      description : "Men Suit ",
      price : 39.99,
      rating :"⭐⭐⭐⭐⭐",
      category: "suits"
    },
    {
      image : "../../assets/images/suit7.jpg",
      title : "Raymond ",
      description : "Dark Grey Suit ",
      price : 19.99,
      rating :"⭐⭐⭐⭐⭐",
      category: "suits"
    },
    {
      image : "../../assets/images/suit8.jpg",
      title : "Van Heusen Men's Cotton Blend ",
      description : "White Two Piece Suit Business Pants Set ",
      price : 29.99,
      rating :"⭐⭐⭐⭐",
      category: "suits"
    },
    {
      image : "../../assets/images/suit9.jpg",
      title : "Van Heusen Men Suit ",
      description : "Polyester Blend Four Piece Suit-Dress Set  ",
      price : 39.99,
      rating :"⭐⭐⭐⭐⭐",
      category: "suits"
    },
    // ... rest of the JSON data
  ];

  filteredSuits = this.mens_suit;

  onSortByPriceChange(value: string) {
    if (value === 'lowToHigh') {
      this.filteredSuits = this.mens_suit.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
    } else if (value === 'highToLow') {
      this.filteredSuits = this.mens_suit.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
    } else {
      this.filteredSuits = this.mens_suit;
    }
  }
  onSortByPriceAndCategoryChange(sortBy: string) {
    if (sortBy === "lowToHighPrice") {
      this.filteredSuits = this.mens_suit.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
    } else if (sortBy === "highToLowPrice") {
      this.filteredSuits = this.mens_suit.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
    } else if (sortBy === "suits") {
      this.filteredSuits = this.mens_suit.filter((item: { category: string; }) => item.category === "suits");
    } else if (sortBy === "shirts") {
      this.filteredSuits = this.mens_suit.filter((item: { category: string; }) => item.category === "shirts");
    } else if (sortBy === "trousers") {
      this.filteredSuits = this.mens_suit.filter((item: { category: string; }) => item.category === "trousers");
    } else if (sortBy === "accessories") {
      this.filteredSuits = this.mens_suit.filter((item: { category: string; }) => item.category === "accessories");
    } else {
      this.filteredSuits = this.mens_suit;
    }
  }
  
  onInputChange(event: Event) {
   
    const target = <HTMLInputElement>event.target;
    console.log(target.value);
  }
}
