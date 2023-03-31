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
  headerImgHome: string = `${this.PATH}pexels-fox-desktop.jpg`; // finalized
  headerImgAboutMe: string = `${this.PATH}pexels-about.jpg`; // finalized
  headerImgContact: string = `${this.PATH}pexels-sharad.jpg`; // finalized
  headerImgPortfolio: string = `${this.PATH}pexels-burst.jpg`; // finalized
  socialMediaImg: string = `${this.PATH}pexels-social-media.jpg`; // finalized

}
