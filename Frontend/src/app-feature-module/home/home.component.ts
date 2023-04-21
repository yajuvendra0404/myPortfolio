import { Component, HostListener, OnInit } from '@angular/core';
import { IStrength, IStrengthAnimation } from '@home/home.interface';
import { HomeService } from '@home/home.service';
import { SharedService } from '@common-module/shared-services/shared-services/shared.service';
import { Images } from '@assets/images';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  strength: IStrengthAnimation[] = [];
  isheaderVisible: string= "blue";

  constructor(
    private _homeService: HomeService,
    private _sharedService: SharedService,
    private _images:Images
  ) {
    this.strength = this._homeService.getStrengths();
  }

  ngOnInit(): void {
    this._sharedService.bannerStylingPropsSubject.next(
      {
        background : this._images.headerImgHome,
        height : "100vh",
        backgroundSize : "cover"
      }
    );

    this._sharedService.layerStylingPropsSubject.next(
      {
        backgroundimage: 'radial-gradient(  rgba(161, 201, 254, 0.8) 1%,rgba(4, 110, 248, 0.8) 99%)',
        position: 'relative',
        height: '100vh'
      }
    );

    this._sharedService.bannerText.next(
      {
        isTextVisible:true
      }
    )
  }
}
// E:\Angular-Projects\MyPortfolio\myPortfolio\node_modules\.bin\webpack-bundle-analyzer

