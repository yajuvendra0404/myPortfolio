import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Images } from '@assets/images';
import { IContactForm } from './contact-form.interface';
import { SharedValidatorsService } from '@common-module/shared-services/shared-validators.service';
import { DEFAULT_MESSAGES, MESSAGE_KEYS } from '@common-module/enums/errorMsg';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactMeForm: FormGroup;
  errorMessage: string ="some random error occured";
  emailError: boolean = false;
  subjectError: boolean = false;
  messageError: boolean = false;
  // formFieldConfiguration: IContactForm[] = [
  //   {
  //     type : "email",
  //     class: "form-control",
  //     label: "Email",
  //     formControlName:"emailFormControl",
  //     id:"inputEmail",
  //     ariadescribedby:"enter email",
  //     placeholder:"Enter Email"
  //   }, {
  //     type : "text",
  //     class: "form-control",
  //     label: "Subject",
  //     formControlName:"subjectFormControl",
  //     id:"inputSubject",
  //     ariadescribedby:"enter subject",
  //     placeholder:"Enter Subject"
  //   }
  // ];
  // !contactMeForm.get(inputConfig.formControlName)?.valid &&
  // contactMeForm.get(inputConfig.formControlName)?.touched &&
  // contactMeForm.get('messageFormControl')?.errors?.['required']

  // "!contactMeForm.get('messageFormControl')?.valid &&
  //  contactMeForm.get('messageFormControl')?.touched &&
  //  contactMeForm.get('messageFormControl')?.errors?.['required']"


  constructor(private _image:Images, private _sharedValidatorsService:SharedValidatorsService) {

    this.contactMeForm = new FormGroup({

      "emailFormControl": new FormControl(null,
        [
          Validators.required,
          Validators.email,
          this._sharedValidatorsService.noSpaceAllowed.bind(this),

      ]),
      "subjectFormControl": new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(50),
      ]),
      "messageFormControl": new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(200),
      ])

    })
  }
  ngAfterViewInit() {
    this.contactMeForm.valueChanges.subscribe( data => {

      Object.keys(data).forEach(key =>{
        let control = this.contactMeForm.get(key);
        if(control?.errors){
          let errorKey: string = Object.keys(control?.errors)[0];
          console.log("key ---", control?.errors)
          control.setErrors({ customError:  DEFAULT_MESSAGES[errorKey]});
        }
      })

    })
  }
}
