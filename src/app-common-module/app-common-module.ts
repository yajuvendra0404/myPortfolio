import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '@notFound/not-found.component';
import { HeaderComponent } from '@header/header.component';
import { ConnectComponent } from '@connect/connect.component';
import { NavComponent } from '@nav/nav.component';
import { NavDirective } from '@nav/nav.directive';
import { FooterComponent } from '@footer/footer.component';
import { BannerComponent } from '@banner/banner.component';
import { RouterModule } from '@angular/router';
import { UnderlineSvgComponent } from '@underlineSvg/underline-svg.component';
import { CustomCardComponent } from '@customCard/custom-card.component';
import { ChatBoxComponent } from '@chatBox/chat-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChatAreaComponent } from './chat-box/chat-area/chat-area.component';

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
    CustomCardComponent,
    ChatBoxComponent,
    ChatAreaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
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
    CustomCardComponent,
    ChatBoxComponent,
  ]
})
export class AppCommonModule { }
