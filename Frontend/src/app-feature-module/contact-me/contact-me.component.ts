import { SharedService } from '@common-module/shared-services/shared.service';
import { Images } from '@assets/images';
import { Component } from '@angular/core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;

  constructor(
    private _sharedService: SharedService,
    private _image: Images
  ) {

  }

  ngOnInit(): void {
    this._sharedService.bannerStylingPropsSubject.next(
      {
        background : this._image.headerImgContact,
        height : "75vh",
        backgroundSize : "cover"
      }
    );

    this._sharedService.layerStylingPropsSubject.next(
      {
        backgroundimage: 'radial-gradient(  rgba(161, 201, 254, 0.8) 1%,rgba(4, 110, 248, 0.8) 99%)',
        position: 'relative',
        height: '75vh'
      }
    );
    this._sharedService.bannerText.next({
      isTextVisible: true
    })
  }
}
