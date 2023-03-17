import { Component } from '@angular/core';
import { Icons } from '@assets/icons';
@Component({
  selector: 'app-gratitude',
  templateUrl: './gratitude.component.html',
  styleUrls: ['./gratitude.component.scss']
})
export class GratitudeComponent {
  linkedIn : string;
  constructor(private icons: Icons) {
    this.linkedIn = icons.linkedin;
  }
}
