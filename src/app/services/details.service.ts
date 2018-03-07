import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
// import {HttpClientModule, HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../shared/configuration';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DetailsService {

  private _api: string;

  constructor(private _http: Http, private _config: Configuration) {
  }

  getById(url: string, Id: any) {

  }

  get(url: string): Observable<any> {
   
    this._api = this._config.ServerWithApiUrl + url;
   
    return this._http.get(this._api).map((response: Response) => <any>response.json())
      .catch(this.handleError);
     
  }

  getExternal(url: string): Observable<any> {

   
    return this._http.get(url).map((response: Response) => <any>response.json())
      .catch(this.handleError);
     
  }
  post(url: string, data: any) {

  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.statusText);
  }


}
