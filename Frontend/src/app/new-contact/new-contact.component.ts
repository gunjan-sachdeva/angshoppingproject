import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {
  contactForm : FormGroup;
  isSubmit = true;
  submitMessage = '';

  private myForm : AngularFirestoreCollection<any>;

constructor(private formBuilder : FormBuilder, private firestore : AngularFirestore){}

ngOnInit(): void {
  
  this.myForm = this.firestore.collection('contact');
  this.contactForm = this.formBuilder.group({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    orderNumber: [null, Validators.required],
    subject: [null, Validators.required],
    message: [null, Validators.required],
    
  })
}
submitData(value : any){

  this.myForm.add(value).then(res =>{
    this.submitMessage = "Submitted Successfully";
  })
  .catch(err =>{
    console.log(err)
  })

console.log(value)
this.isSubmit = true;

setTimeout(() => {
  this.isSubmit = false;
}, 8000);
}
}
