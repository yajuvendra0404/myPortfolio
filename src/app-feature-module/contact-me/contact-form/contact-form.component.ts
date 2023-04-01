import { Component } from '@angular/core';
// import { formGroup} from '@ang'
import { Images } from '@assets/images';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  constructor(private _image : Images) {

  }

}
