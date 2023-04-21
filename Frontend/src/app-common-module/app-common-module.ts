import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '@notFound/not-found.component';
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
import { ChatAreaComponent } from '@chatBox/chat-area/chat-area.component';
// import { ShowFormErrorDirective } from './shared-Directive/show-form-error.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    FooterComponent,
    BannerComponent,
    NotFoundComponent,
    ConnectComponent,
    NavComponent,
    NavDirective,
    UnderlineSvgComponent,
    CustomCardComponent,
    ChatBoxComponent,
    ChatAreaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  exports:[
    FooterComponent,
    BannerComponent,
    NotFoundComponent,
    ConnectComponent,
    NavComponent,
    NavDirective,
    UnderlineSvgComponent,
    CustomCardComponent,
    ChatBoxComponent
  ]
})
export class AppCommonModule { }
