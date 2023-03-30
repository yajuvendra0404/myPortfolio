import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { AppCommonModule } from '@common-module/app-common-module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { HireMeComponent } from './hire-me/hire-me.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    MyResumeComponent,
    HireMeComponent,
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    AppCommonModule,
    FontAwesomeModule
  ]
})
export class AboutMeModule { }
