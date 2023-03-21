import { Component, Input, OnInit } from '@angular/core';
import { Images } from '@assets/images';
import { SharedService } from '@common-module/shared-services/shared.service';
import { ILayerStylingProps } from '@common-module/app-common-interface';
import { IbannerStylingProp } from '@common-module/app-common-interface';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',

  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input ("bannerImage") bannerImage: string ="";
  profileImg:string;
  bannerLayerStyling!:  ILayerStylingProps;
  bannerImageStyling!: IbannerStylingProp;
  constructor(
    private images: Images,
    private _sharedService: SharedService
  ){
    this.profileImg = images.profileImage;
    this._sharedService.bannerStylingPropsSubject.subscribe((stylingProps : any) => {
      console.log('IMage Props ---', stylingProps);
      this.bannerImageStyling = stylingProps;
    })
    this._sharedService.layerStylingPropsSubject.subscribe((stylingProps: any) => {
      console.log('layer Props ---', stylingProps);
      this.bannerLayerStyling = stylingProps;
    })
  }
  // url("../../../assets/images/pexels-fox-desktop.jpg") no-repeat;
  ngOnInit(): void {
  }

}
