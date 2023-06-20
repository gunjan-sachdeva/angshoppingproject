import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  filteredData:any;

constructor(private http : HttpClient){}
ngOnInit(): void {
  this.http.get('http://localhost:3000/mens_suit')
  .subscribe(res => {
    console.log('res', res);
    this.filteredData = res;
  })
}
}
