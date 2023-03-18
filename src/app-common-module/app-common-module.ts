import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { ConnectComponent } from './connect/connect.component';
import { NavComponent } from './header/nav/nav.component';
import { NavDirective } from './header/nav/nav.directive';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './header/banner/banner.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    BannerComponent,
    NotFoundComponent,
    ConnectComponent,
    NavComponent,
    NavDirective,
    HeaderComponent,
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
  ]
})
export class AppCommonModule { }
