import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { AppCommonModule } from '@common-module/app-common-module';
import { MyHobbiesComponent } from './my-hobbies/my-hobbies.component';
import { MyQualificationComponent } from './my-qualification/my-qualification.component';
import { MyExperienceComponent } from './my-experience/my-experience.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyResumeComponent } from './my-resume/my-resume.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    MyHobbiesComponent,
    MyQualificationComponent,
    MyExperienceComponent,
    MyResumeComponent,
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    AppCommonModule,
    FontAwesomeModule
  ]
})
export class AboutMeModule { }
