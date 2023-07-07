import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  change(){
    this.isLoggedIn = true;
  }
  isLoggedIn = true;
  selectedSection: string = 'form';

  showSection(section: string) {
    this.selectedSection = section;
  }
  StudentArray : any[] = [];
  ticketsArray : any[] = [];
  currentStudentID = "";
 
  id!: string;
  image: string ="";
  title: string ="";
  description: string = "";
  price!: string;
  total!: string;
  rating: string = "";
  brand: string = "";
  instock!: string;
  quantity: string = "";

  
  constructor(private http: HttpClient )
  {
    this.getAllStudent();
    this.tickets();
  }
  getAllStudent() {
 
    this.http.get("http://localhost:8000/user/getAll")
    .subscribe((resultData: any)=>
    {
      
        console.log(resultData);
        this.StudentArray = resultData.data;
    });
 
 
  }
  tickets() {
 
    this.http.get("http://localhost:8000/myfeed")
    .subscribe((resultData: any)=>
    {
      
        console.log(resultData);
        this.ticketsArray = resultData.data;
    });
 
 
  }
 
  setUpdate(data: any)
  {
   this.id = data.id;
   this.image = data.image;
   this.title = data.title;
   this.description = data.description;
   this.price = data.price;
   this.total = data.total;
   this.rating = data.rating;
   this.brand = data.brand;
   this.instock = data.instock;
   this.quantity = data.quantity;
 
   this.currentStudentID = data._id;
  
  }
 
  UpdateRecords()
  {
    let bodyData = {
      "id" : this.id,
      "image" : this.image,
      "title" : this.title,
      "description" : this.description,
      "price" : this.price,
      "total" : this.total,
      "rating" : this.rating,
      "brand" : this.brand,
      "instock" : this.instock,
      "quantity" : this.quantity,
 
    };
    
    this.http.patch("http://localhost:8000/user/update"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Updateddd")
        this.getAllStudent();
      
    });
  }
  
  setDelete(data: any) {
    this.http.delete("http://localhost:8000/user/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Deletedddd")
        this.getAllStudent();
  
    });
    }
    
  save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
 
register()
  {
 
    let bodyData = {
      "id" : this.id,
      "image" : this.image,
      "title" : this.title,
      "description" : this.description,
      "price" : this.price,
      "total" : this.total,
      "rating" : this.rating,
      "brand" : this.brand,
      "instock" : this.instock,
      "quantity" : this.quantity,
  };
    this.http.post("http://localhost:8000/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Added Successfully")
         //this.getAllEmployee();
        this.id = '';
        this.image = '';
        this.title  = '';
        this.description = '';
        this.price = '';
        this.total  = '';
        this.rating = '';
        this.brand = '';
        this.instock  = '';
        this.quantity  = '';
        this.getAllStudent();
    });
  }
}
