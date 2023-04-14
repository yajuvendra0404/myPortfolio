import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from '@home/home-routing.module';
import { AppCommonModule } from '@common-module/app-common-module';

import { HomeComponent } from '@home/home.component';
import { GratitudeComponent } from '@home/gratitude/gratitude.component';
import { StrengthComponent } from '@home/strength/strength.component';
import { SkillsComponent } from '@home/skills/skills.component';
import { MyBriefComponent } from '@home/my-brief/my-brief.component';

@NgModule({
  declarations: [
    StrengthComponent,
    MyBriefComponent,
    SkillsComponent,
    HomeComponent,
    GratitudeComponent,
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    NgxBootstrapMultiselectModule,
    FormsModule,
    HomeRoutingModule,
    AppCommonModule
  ]
})
export class HomeModule { }
