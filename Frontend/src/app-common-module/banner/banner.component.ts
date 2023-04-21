import { Component, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { Images } from '@assets/images';
import { SharedService } from '@common-module/shared-services/shared-services/shared.service';
import { IbannerText, ILayerStylingProps } from '@common-module/app-common-interface';
import { IbannerStylingProp } from '@common-module/app-common-interface';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',

  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  profileImg:string;
  bannerLayerStyling!: ILayerStylingProps;
  bannerImageStyling!: IbannerStylingProp;
  bannerTextStyling!: IbannerText;
  text: string = "";
  subscriptionStore: Subscription[] =[];

  constructor(
    private images: Images,
    private _sharedService: SharedService,
    private renderer: Renderer2
  ){

    this.profileImg = images.profileImage;

    this.subscriptionStore.push (
      this._sharedService.bannerStylingPropsSubject.subscribe((stylingProps : any) => {
        console.log('Image Props ---', stylingProps);
        this.bannerImageStyling = stylingProps;
      })
    );

    this.subscriptionStore.push (
      this._sharedService.layerStylingPropsSubject.subscribe((stylingProps: any) => {
        console.log('layer Props ---', stylingProps);
        this.bannerLayerStyling = stylingProps;
      })
    );


    this.subscriptionStore.push (
      this._sharedService.bannerText.subscribe((stylingProps) => {
        console.log('text Props ---', stylingProps);
        this.bannerTextStyling = stylingProps;
      })
    );


  }
  // url("../../../assets/images/pexels-fox-desktop.jpg") no-repeat;

  ngOnInit(): void {
    this.text = `
    <div class="parallax-col-2 text-end m-5">
    <h4>Hello, I am </h4>
    <h1>Yajuvendra</h1>
    <h6>Angular | Full Stack | Web Developer</h6>
    <button class="btn btn-danger"><i class="bi bi-printer"></i> Resume </button>
    </div>
    `;
  }

  ngDestory(){
    this.subscriptionStore.forEach( ele => {
      ele.unsubscribe();
    })
  }
}
