import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Images } from '@assets/images';
import { IContactForm } from './contact-form.interface';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactMeForm: FormGroup;
  formFieldConfiguration: IContactForm[] = [
    {
      type : "email",
      class: "form-control",
      label: "Email",
      formControlName:"emailFormControl",
      id:"inputEmail",
      ariadescribedby:"enter email",
      placeholder:"Enter Email"
    }, {
      type : "text",
      class: "form-control",
      label: "Subject",
      formControlName:"subjectFormControl",
      id:"inputSubject",
      ariadescribedby:"enter subject",
      placeholder:"Enter Subject"
    }
  ];

  constructor(private _image : Images) {
    this.contactMeForm = new FormGroup({
      "emailFormControl": new FormControl(null,Validators.required),
      "subjectFormControl": new FormControl(null,Validators.required),
      "messageFormControl": new FormControl(null,Validators.required)
    })
  }
}
