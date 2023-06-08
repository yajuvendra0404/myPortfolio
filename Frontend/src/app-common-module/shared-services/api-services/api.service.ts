import { Injectable } from '@angular/core';
import { HttpService } from '@common-module/shared-services/http-services/http.service';
import { IContactFormData } from '@common-module/shared-services/api-services/api.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpService: HttpService) {}

  generateOTP( formData: IContactFormData ): Observable<{[key:string]:string}>{
    return this._httpService.sendPostRequest("generateOTP",formData);
  }
  submitMessage( formData: IContactFormData ): Observable<{[key:string]:string}>{
    return this._httpService.sendPostRequest("submitMessage", formData);
  }

}
