import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts:any = [];

  constructor(private postService : JsonPlaceholderService, private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(res => {
      console.log('res', res);
      this.posts = res;
     
    })
    console.log(this.posts)
  }

}
