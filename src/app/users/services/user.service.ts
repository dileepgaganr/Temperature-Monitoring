import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Configuration } from '../../shared/configuration';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService {

  private _api: string;

  constructor(private _http: Http, private _config: Configuration) { }

  get(url: string): Observable<any> {

    this._api = this._config.ServerWithApiUrl + url;

    return this._http.get(this._api).map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.statusText);
  }

}
