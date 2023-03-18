import { Component } from '@angular/core';
import { Icons } from '@assets/icons';
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent {
  facebook: string;
  github:string;
  linkedIn: string;
  gmail: string;
  instagram: string;
  constructor( private icons: Icons) {
    this.facebook = icons.facebook;
    this.github = icons.github;
    this.linkedIn = icons.linkedin;
    this.gmail = icons.gmail;
    this.instagram = icons.instagram;
  }
}
