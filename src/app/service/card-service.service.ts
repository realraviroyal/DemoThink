import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  _getCardData= "https://api.spaceXdata.com/v3/launches?limit=100";

  constructor(private _http: HttpClient) { }

  cardList(){
    return this._http.get(this._getCardData);
}
}
