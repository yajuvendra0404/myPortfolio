import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Images {
  private PATH: string = "assets/images/";

  ////// ----- Profile Image ----- ///////
  profileImage: string = `${this.PATH}image.jpg`;
  myselgImage: string = `${this.PATH}myself.jpg`;
  // ../../../assets/images/image.jpg
}
