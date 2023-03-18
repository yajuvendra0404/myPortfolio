import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeRoutingModule } from './contact-me-routing.module';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AppCommonModule } from '@common-module/app-common-module';

@NgModule({
  declarations: [
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    ContactMeRoutingModule,
    AppCommonModule
  ]
})
export class ContactMeModule { }
