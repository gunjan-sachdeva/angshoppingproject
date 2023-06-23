import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  constructor(private http: HttpClient) {}

  submitForm() {
    const orderData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      product: (document.getElementById('product') as HTMLInputElement).value,
      quantity: (document.getElementById('quantity') as HTMLInputElement).value,
      address: (document.getElementById('address') as HTMLInputElement).value,
    };

    this.http.post<any>('http://localhost:8000/orders', orderData).subscribe(
      response => {
        console.log(response);
        // Handle success response
      },
      error => {
        console.error(error);
        // Handle error response
      }
    );
  }
}
