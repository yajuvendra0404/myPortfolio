import { Component } from '@angular/core';
import { Icons } from '@assets/icons';
import { Images } from '@assets/images';
@Component({
  selector: 'app-gratitude',
  templateUrl: './gratitude.component.html',
  styleUrls: ['./gratitude.component.scss']
})
export class GratitudeComponent {
  linkedIn : string;
  myselfImg: string;
  constructor(private icons: Icons, private images: Images) {
    this.linkedIn = icons.linkedin;
    this.myselfImg = images.myselgImage;
  }
}
