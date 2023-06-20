import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.css']
})
export class UpiComponent implements OnInit {

  constructor(private http : HttpClient){}
  memes : any;
  myMemes : any;
  ngOnInit(): void {
    this.http.get("https://picsum.photos/v2/list")
    .subscribe((res)=>{
      console.log(res);
      this.memes = res;
     
    })
  }

}
