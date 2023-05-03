import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { AppCommonModule } from '@common-module/app-common-module';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PetProjectsComponent } from './pet-projects/pet-projects.component';
import { CertAndAchieveComponent } from './cert-and-achieve/cert-and-achieve.component';
import { ProfessionalProjectComponent } from './professional-project/professional-project.component';
@NgModule({
  declarations: [
    ProjectComponent,
    PetProjectsComponent,
    CertAndAchieveComponent,
    ProfessionalProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    AppCommonModule,
    FontAwesomeModule
  ],

})
export class ProjectModule {

}
