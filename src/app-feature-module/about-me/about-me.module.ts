import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { AppCommonModule } from '@common-module/app-common-module';

@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    AppCommonModule
  ]
})
export class AboutMeModule { }
