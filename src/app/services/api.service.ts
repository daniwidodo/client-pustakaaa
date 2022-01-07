import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endPoint } from './../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private messageSource = new BehaviorSubject('kosong');
  // eslint-disable-next-line @typescript-eslint/member-ordering
  currentMessage = this.messageSource.asObservable();

  constructor( private http: HttpClient) { }

  getQuote(){
    return this.http.get( endPoint + 'api/quotes');
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
