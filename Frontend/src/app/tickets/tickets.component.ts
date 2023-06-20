import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  ticketsArray : any[] = [];

    
  constructor(private http: HttpClient )
  {
    this.tickets();
  }

  tickets() {
 
    this.http.get("http://localhost:8000/myfeed")
    .subscribe((resultData: any)=>
    {
      
        console.log(resultData);
        this.ticketsArray = resultData;
    });
 
 
  }
}
