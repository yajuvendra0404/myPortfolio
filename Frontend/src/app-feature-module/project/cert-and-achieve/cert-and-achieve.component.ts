import { Component } from '@angular/core';
import { Images } from '@assets/images';
import { Docs } from '@assets/docs';
import { Urls } from '@assets/urls';
@Component({
  selector: 'app-cert-and-achieve',
  templateUrl: './cert-and-achieve.component.html',
  styleUrls: ['./cert-and-achieve.component.scss']
})
export class CertAndAchieveComponent {

  content: {href: string, imageSrc: string}[] =[];
  constructor (
    public _images: Images,
    public _docs: Docs,
    public _urls: Urls
  ){
    this.content = [
      {
        href: _urls.jcp1,
        imageSrc:_images.conestoga
      },
      {
        href:_urls.jcp2,
        imageSrc:_images.az900
      },

    ]
  }

}
