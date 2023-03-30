import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { ConnectComponent } from './connect/connect.component';
import { NavComponent } from './nav/nav.component';
import { NavDirective } from './nav/nav.directive';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';
import { UnderlineSvgComponent } from './underline-svg/underline-svg.component';
import { CustomCardComponent } from './custom-card/custom-card.component';

@NgModule({
  declarations: [
    FooterComponent,
    BannerComponent,
    NotFoundComponent,
    ConnectComponent,
    NavComponent,
    NavDirective,
    HeaderComponent,
    UnderlineSvgComponent,
    CustomCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    BannerComponent,
    NotFoundComponent,
    ConnectComponent,
    NavComponent,
    NavDirective,
    HeaderComponent,
    UnderlineSvgComponent,
    CustomCardComponent
  ]
})
export class AppCommonModule { }
