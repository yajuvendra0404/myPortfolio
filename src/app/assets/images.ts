import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Images {
  private PATH: string = "assets/images/";


  ////// ----- Profile page Image ----- ///////
  profileImage: string = `${this.PATH}image.jpg`;
  myselgImage: string = `${this.PATH}myself.jpg`;



  ////// ----- Header Images ----- ////////
  headerImgHome: string = `${this.PATH}pexels-fox-desktop.jpg`;
  headerImgAboutMe: string = `${this.PATH}pexels-about.jpg`;
  headerImgContact: string = `${this.PATH}pexels-contact.jpg`;
  headerImgPortfolio: string = `${this.PATH}pexels-portfolio.jpg`;

}
