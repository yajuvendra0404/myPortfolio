import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { StrengthComponent } from './strength/strength.component';
import { SkillsComponent } from './skills/skills.component';
import { MyBriefComponent } from './my-brief/my-brief.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GratitudeComponent } from './gratitude/gratitude.component';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    StrengthComponent,
    MyBriefComponent,
    SkillsComponent,
    HomeComponent,
    GratitudeComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    NgxBootstrapMultiselectModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
