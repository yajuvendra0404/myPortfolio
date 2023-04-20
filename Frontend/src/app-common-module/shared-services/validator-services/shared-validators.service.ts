import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedValidatorsService {
  noSpaceAllowed(controlName: FormControl):{[key:string]:boolean} | null {
    if(controlName.value?.indexOf(" ") > -1){
      return { "noSpaceAllowed": true}
    }
    return null
  }

  constructor() { }
}
