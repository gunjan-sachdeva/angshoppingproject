import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit{
 ngOnInit(): void {
  $('.flipTimer').flipTimer({ 

    // count up or countdown
    direction: 'down', 
    
    // the target <a href="https://www.jqueryscript.net/time-clock/">date</a>
    date: 'January 20, 2015 08:30:30', 
    
    // callback works only with direction = "down"
    callback: function() { alert('times up!'); }
    
    });
 }
}
