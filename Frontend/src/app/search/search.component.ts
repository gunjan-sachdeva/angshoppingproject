import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchText:any;
  all:any = [];
  constructor(private http : HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/all')
    .subscribe((res)=>{
      console.log(res);
      this.all = res;
    })
  }


}
