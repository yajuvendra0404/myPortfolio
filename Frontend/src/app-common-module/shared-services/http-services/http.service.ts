import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseURL: string= "http://localhost/";
  constructor(private _http: HttpClient) {}

  sendFetchRequest(url: string): Observable<any> {
    return this._http.get<any>(`${this.baseURL}${url}`)
    .pipe(catchError(this.errorHandler.bind(this)))
  }
  sendPostRequest(url: string, Json:any) : Observable<any> {
    return this._http.post<any>(`${this.baseURL}${url}`,Json,{})
    .pipe(catchError(this.errorHandler.bind(this)))
  }
  errorHandler() {
    return "error occured";
  }
}