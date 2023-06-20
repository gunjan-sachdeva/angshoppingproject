import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit{
  todayDate:any;

  ngOnInit(): void {
    setInterval(() =>{
      this.todayDate = new Date();
      // console.log(this.todayDate)
    },1000)
    
  }
}
