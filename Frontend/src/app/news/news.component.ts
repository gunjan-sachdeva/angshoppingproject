import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
  resData:any;
  newsData:any;
  constructor(public http:HttpClient){

  }

  ngOnInit(): void {
    const url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=110abf5e50324d0a8cca6c6d1c2a6213";

    this.http.get(url).subscribe(res=>
      {
        this.resData = res;
        if(this.resData.status == "ok"){
          this.newsData = this.resData.articles;
          console.log(this.newsData);
        }
      })
  }
}
