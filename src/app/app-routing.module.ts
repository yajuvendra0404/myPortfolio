import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home", loadChildren:() => import("@home/home.module").then(m => m.HomeModule)},
  {path:"aboutMe", loadChildren:() => import("@aboutMe/about-me.module").then( m => m.AboutMeModule)},
  {path:"contactMe", loadChildren:() => import("@contactMe/contact-me.module").then( m => m.ContactMeModule)},
  {path:"portfolio", loadChildren:() => import("@project/project.module").then(m => m.ProjectModule)},
  {path:"notFound",  loadChildren:() => import("@common-module/app-common-module").then(m => m.AppCommonModule)},
  {path:"**",redirectTo:"/notFound"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
