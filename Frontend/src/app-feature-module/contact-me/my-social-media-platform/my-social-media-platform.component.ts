import { Component, OnInit } from '@angular/core';
import { Icons } from '@assets/icons';
import { Images } from '@assets/images';
@Component({
  selector: 'app-my-social-media-platform',
  templateUrl: './my-social-media-platform.component.html',
  styleUrls: ['./my-social-media-platform.component.scss']
})
export class MySocialMediaPlatformComponent implements OnInit{

  // facebook, github, gmail, instagram, linkedin

  facebook: string ="";
  github: string ="";
  gmail: string ="";
  instagram: string ="";
  linkedin: string ="";
  socialMediaImg: string ="";

  constructor(
    private _icons: Icons,
    private _images: Images
    ) {  }

  ngOnInit(): void {
    this.facebook = this._icons.facebook;
    this.github = this._icons.github;
    this.gmail = this._icons.gmail;
    this.instagram = this._icons.instagram;
    this.linkedin = this._icons.linkedin;
    this.socialMediaImg = this._images.socialMediaImg;
  }

}
