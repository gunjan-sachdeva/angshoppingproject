import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  StudentArray : any[] = [];
  constructor(private http : HttpClient){
    this.getAllStudent();
    
  }
  ngOnInit(): void {
    
  }
  
  getAllStudent() {
 
    this.http.get("http://localhost:8000/user/getAll")
    .subscribe((resultData: any)=>
    {
      
        console.log(resultData);
        this.StudentArray = resultData.data;
    });
 
 
  }
}
