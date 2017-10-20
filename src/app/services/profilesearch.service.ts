import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfilesearchService {
  private userName: string;
  private client_id = 'c7fd56fe1f6d35d822e6';
  private client_secret = '2b4295e243a4c0acd0876c679b103c9b0a9edb7c' ;
  constructor(private _http: Http) {
    console.log('Profile Search service initialized.....');
    this.userName = 'Satya-Yelamanchili';
  }

  onProfileSearch() {
    return this._http
      .get('http://api.github.com/users/' + this.userName + '?client_id=' + this.client_id + '&clientsecret=' + this.client_secret)
        .map(res => res.json() );
  }

  getDataFromURL(url: string) {
    return this._http
    .get(url + '?client_id=' + this.client_id + '&clientsecret=' + this.client_secret)
      .map(res => res.json() );
  }

}
