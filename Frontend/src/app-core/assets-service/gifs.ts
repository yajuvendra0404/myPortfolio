import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
@Injectable({
  providedIn: 'root'
})
export class Gifs {
  private PATH: string = `${environment.ASSETS_PATH}/gifs/`;

  ////// ----- Profile page Image ----- ///////
  underConstruction: string = `${this.PATH}under_construction.gif`;

}



