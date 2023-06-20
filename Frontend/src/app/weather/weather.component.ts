import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  city!: string;
  weatherData : any;

  constructor(private weatherService : WeatherService){

  }

  getWeather(){
    this.weatherService.getWeatherData(this.city)
    .subscribe(
      (data) =>{
        this.weatherData = data;
        // console.log(data);
      }
    )
  }
}
