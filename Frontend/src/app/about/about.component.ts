import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    $("#button").click(function()
    {
      alert("welcome");
    })
   
  }

}
