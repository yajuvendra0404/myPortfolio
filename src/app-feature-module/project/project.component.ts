import { SharedService } from '@common-module/shared-services/shared.service';
import { Images } from '@app/assets/images';
import { Component, OnInit } from '@angular/core';
import { faQuoteLeft , faQuoteRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  faQuoteRight = faQuoteRight;
  faQuoteLeft = faQuoteLeft;
  constructor(
    private _sharedService: SharedService,
    private _image: Images
  ) { }

  ngOnInit(): void {
      this._sharedService.bannerStylingPropsSubject.next(
        {
          background : this._image.headerImgPortfolio,
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
