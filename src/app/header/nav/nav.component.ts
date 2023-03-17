import { Images } from '@assets/images';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
	isMenuCollapsed = true;
  profileImg:string;
  constructor(private images: Images) {
    this.profileImg = images.profileImage;
  }
}
