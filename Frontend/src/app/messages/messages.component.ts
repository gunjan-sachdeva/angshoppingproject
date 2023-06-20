import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  ticketsArray : any[] = [];

    
  constructor(private http: HttpClient )
  {
    this.tickets();
  }

  tickets() {
 
    this.http.get("http://localhost:8000/cont")
    .subscribe((resultData: any)=>
    {
      
        console.log(resultData);
        this.ticketsArray = resultData;
    });
 
 
  }
}
