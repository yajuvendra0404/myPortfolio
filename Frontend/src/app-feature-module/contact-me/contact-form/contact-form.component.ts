import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Images } from '@assets/images';
import { IContactForm } from './contact-form.interface';
import { SharedValidatorsService } from '@common-module/shared-services/validator-services/shared-validators.service';
// import { DEFAULT_MESSAGES, MESSAGE_KEYS } from '@common-module/enums/errorMsg';

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
  isSpinnerVisible:boolean = false;
  isOTPFieldVisible:boolean = false;

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
  generateOTP() {
    this.isSpinnerVisible = !this.isSpinnerVisible
    setTimeout(() => {
      this.isSpinnerVisible = !this.isSpinnerVisible;
      this.isOTPFieldVisible =!this.isOTPFieldVisible
     }, 3000);
  }
  onSubmit () {

  }
  ngAfterViewInit() {
    // this.contactMeForm.valueChanges.subscribe( data => {
    // Object.keys(data).forEach(key =>{
    //   let control = this.contactMeForm.get(key);
    //   // MESSAGE_KEYS.maxLength = control?.errors?.['maxlength']?.requiredLength;
    //   // MESSAGE_KEYS.minLength = control?.errors?.['minlength']?.requiredLength;;
    //   // MESSAGE_KEYS.propertyName ;
    //   // console.log("---- message keys -----", MESSAGE_KEYS);
    //   // console.log("---- message keys -----", control);
    //   if(control?.errors){
    //     let errorKey: string = Object.keys(control?.errors)[0];
    //     control.setErrors({ customError: DEFAULT_MESSAGES[errorKey]});
    //   }
    //   })
    // })
  }

}
