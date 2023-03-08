import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Icons {
  private PATH: string = "../../assets/icons/";

  facebook: string  = `${this.PATH}facebook.png`;
  github: string  = `${this.PATH}github.png`;
  gmail: string = `${this.PATH}gmail.png`;
  instagram: string = `${this.PATH}instagram.png`;
  linkedin: string =  `${this.PATH}linkedin.png`;

}
