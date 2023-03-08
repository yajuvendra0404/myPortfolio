import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './header/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { ConnectComponent } from './connect/connect.component';
import { NavComponent } from './header/nav/nav.component';
import { NavDirective } from './header/nav/nav.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
    BannerComponent,
    NotFoundComponent,
    ConnectComponent,
    NavComponent,
    NavDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
