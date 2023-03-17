import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  {path:"home", loadChildren:() => import("@home/home.module").then(m => m.HomeModule)},
  {path:"contactMe", loadChildren:() => import("@aboutMe/about-me.module").then( m => m.AboutMeModule)},
  {path:"portfolio", loadChildren:() => import("@project/project.module").then(m => m.ProjectModule)},
  {path:"notFound",component:NotFoundComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",redirectTo:"/notFound"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
