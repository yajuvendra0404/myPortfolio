import { Injectable } from '@angular/core';
import { HttpService } from '@common-module/shared-services/http-services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpService: HttpService) {}
  
}
