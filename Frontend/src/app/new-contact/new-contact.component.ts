import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {
  contactForm: FormGroup;
  isSubmit = true;
  submitMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      orderNumber: [null, Validators.required],
      subject: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  submitData(value: any) {
    this.httpClient.post('http://localhost:8000/contacts', value)
      .subscribe(
        () => {
          this.submitMessage = "Submitted Successfully";
        },
        (error) => {
          console.log(error);
        }
      );

    console.log(value);
    this.isSubmit = true;

    setTimeout(() => {
      this.isSubmit = false;
    }, 8000);
  }
}
