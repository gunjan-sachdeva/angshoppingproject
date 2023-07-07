import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback-material',
  templateUrl: './feedback-material.component.html',
  styleUrls: ['./feedback-material.component.css']
})
export class FeedbackMaterialComponent implements OnInit {

  contactForm: FormGroup;
  isSubmit = true;
  submitMessage = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      orderNumber: [null, Validators.required],
      subject: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  submitData(value: any): void {
    this.http.post<any>('http://localhost:8000/feedback', value).subscribe(
      (response) => {
        this.submitMessage = 'Submitted Successfully';
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    this.isSubmit = true;

    setTimeout(() => {
      this.isSubmit = false;
    }, 8000);
  }
}
