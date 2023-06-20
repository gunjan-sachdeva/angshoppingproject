import { Component } from '@angular/core';
import { MensAccessoriesService } from '../mens-accessories.service';

@Component({
  selector: 'app-mens-accessories',
  templateUrl: './mens-accessories.component.html',
  styleUrls: ['./mens-accessories.component.css']
})
export class MensAccessoriesComponent {
  access =[];
  constructor(private accessories : MensAccessoriesService){}
  

}
