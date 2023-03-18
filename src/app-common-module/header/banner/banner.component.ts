import { Component, OnInit } from '@angular/core';
import { Images } from '@assets/images';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',

  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  profileImg:string;
  constructor(private images: Images) {
    this.profileImg = images.profileImage;
  }
  // url("../../../assets/images/pexels-fox-desktop.jpg") no-repeat;
  ngOnInit(): void {
  }

}
