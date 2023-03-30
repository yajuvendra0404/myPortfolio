import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeRoutingModule } from '@contactMe/contact-me-routing.module';
import { ContactMeComponent } from '@contactMe/contact-me.component';
import { AppCommonModule } from '@common-module/app-common-module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MySocialMediaPlatformComponent } from './my-social-media-platform/my-social-media-platform.component';
@NgModule({
  declarations: [
    ContactMeComponent,
    MySocialMediaPlatformComponent
  ],
  imports: [
    CommonModule,
    ContactMeRoutingModule,
    AppCommonModule,
    FontAwesomeModule
  ]
})
export class ContactMeModule { }
