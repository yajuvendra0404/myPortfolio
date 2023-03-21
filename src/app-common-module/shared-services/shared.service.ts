import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IbannerStylingProp, IbannerText, ILayerStylingProps } from '@common-module/app-common-interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  bannerStylingPropsSubject: Subject<IbannerStylingProp> = new Subject<IbannerStylingProp>();
  layerStylingPropsSubject: Subject<ILayerStylingProps> = new Subject<ILayerStylingProps>();
  bannerText: Subject<IbannerText> = new Subject<IbannerText>();

  constructor() { }
}
