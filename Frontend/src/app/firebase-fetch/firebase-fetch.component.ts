import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-firebase-fetch',
  templateUrl: './firebase-fetch.component.html',
  styleUrls: ['./firebase-fetch.component.css']
})
export class FirebaseFetchComponent {
  mens_suit:any = [];

  constructor(private http : HttpClient){
    this.http.get("http://localhost:8000/preview")
    .subscribe((res)=>{
      console.log(res);
      this.mens_suit = res;
    })
  }
}
