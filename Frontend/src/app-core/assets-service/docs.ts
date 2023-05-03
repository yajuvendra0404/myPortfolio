import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
@Injectable({
  providedIn: 'root'
})
export class Docs {
  PATH: string = `${environment.ASSETS_PATH}`;

  acedemicAward: string =`${this.PATH}/AwardLetter.pdf`;
  resume: string =`${this.PATH}/0_Yajuvendra_Singh_Resume.pdf`;

}
