import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endPoint } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor( private http: HttpClient) { }

  getQuote(){
    return this.http.get( endPoint + 'api/quotes');
  }
}
