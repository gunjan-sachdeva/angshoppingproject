import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  formGroup:any;
  contact = new ContactService();
  contactform:any = new FormGroup(
    {
      firstName: new FormControl(null,[Validators.required, Validators.pattern("^[A-Za-z]*$")]),
      lastName: new FormControl (null, [Validators.required]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl (null, [Validators.required, Validators.email]),
      password : new FormControl(null, [Validators.required]),

    }
  );
  submit(){
    this.contactform.firstName = this.contactform['firstName'].value;
    this.contactform.lastName = this.contactform['lastName'].value;
    this.contactform.phone = this.contactform['phone'].value;
    this.contactform.email = this.contactform['email'].value;
    this.contactform.password = this.contactform['password'].value;
    console.log(this.contact)
  }
}
