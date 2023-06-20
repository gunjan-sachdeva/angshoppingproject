import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  apiKey = "c02a5dedace2e942862746d45080697f";

  getWeatherData(city : string){
   return  this.http.get("https://api.openweathermap.org/data/2.5/weather?q={city}&appid={this.apiKey}")
  }
}
