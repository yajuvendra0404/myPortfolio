import { Component } from '@angular/core';
import { Images } from '@assets/images';
import { Urls } from '@assets/urls';

@Component({
  selector: 'app-professional-project',
  templateUrl: './professional-project.component.html',
  styleUrls: ['./professional-project.component.scss']
})

export class ProfessionalProjectComponent {

  projectContent : { href: string,imageSrc: string } [] =[];

  constructor(
    public _images: Images,
    public _urls:Urls
  ) {
    this.projectContent = [
      {
        href: _urls.jcp1,
        imageSrc:_images.jcpImg2
      },
      {
        href:_urls.jcp2,
        imageSrc:_images.jcpImg1
      },
      {
        href:_urls.portfolio,
        imageSrc:_images.portfolio
      }
    ]
  }

}
