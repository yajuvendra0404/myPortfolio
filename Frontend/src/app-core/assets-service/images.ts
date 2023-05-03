import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
@Injectable({
  providedIn: 'root'
})
export class Images {
  private PATH: string = `${environment.ASSETS_PATH}/images/`;

  ////// ----- Profile page Image ----- ///////
  profileImage: string = `${this.PATH}image.jpg`;
  myselgImage: string = `${this.PATH}myself.jpg`;

  ////// ----- Header Images ----- ////////
  headerImgHome: string = `${this.PATH}pexels-fox-desktop.jpg`; // finalized
  headerImgAboutMe: string = `${this.PATH}pexels-about.jpg`; // finalized
  headerImgContact: string = `${this.PATH}pexels-sharad.jpg`; // finalized
  headerImgPortfolio: string = `${this.PATH}pexels-burst.jpg`; // finalized
  socialMediaImg: string = `${this.PATH}pexels-social-media.jpg`; // finalized

  ////// ----- Project, Achievement And Certificate Images ----- ////////
  jcpImg1: string =  `${this.PATH}Jcp1Src.png`;
  jcpImg2: string =  `${this.PATH}Jcp2Src.png`;
  portfolio: string = `${this.PATH}myPortfolio.png`;
  az900: string = `${this.PATH}az-900.png`;
  conestoga: string = `${this.PATH}_conestoga.png`;
}

