import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Images } from '@assets/images';
import { IContactForm } from './contact-form.interface';
import { SharedValidatorsService } from '@common-module/shared-services/validator-services/shared-validators.service';
import { ApiService } from '@common-module/shared-services/api-services/api.service';
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

  constructor(
    private _image:Images,
    private _sharedValidatorsService:SharedValidatorsService,
    private _apiService: ApiService) {
    this.contactMeForm = new FormGroup({
      "emailId": new FormControl(null,
        [
          Validators.required,
          Validators.email,
          this._sharedValidatorsService.noSpaceAllowed.bind(this),

      ]),
      "subject": new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(50),
      ]),
      "message": new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(200),
      ])

    })
  }
  generateOTP() {
    this.isSpinnerVisible = !this.isSpinnerVisible
    this._apiService.generateOTP(this.contactMeForm.value).subscribe(data => {
        this.isSpinnerVisible = !this.isSpinnerVisible;
        this.isOTPFieldVisible =!this.isOTPFieldVisible
      console.log("data ---", data);
    });

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
