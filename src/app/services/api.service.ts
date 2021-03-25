import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  static statusMode = new EventEmitter();

  constructor(public http: HttpClient) {
    this.body
  }

  public token = JSON.parse(window.sessionStorage.getItem('user'))
  public url: string = "http://localhost:8000/api/";
  public body = JSON.parse(window.sessionStorage.getItem('meetings'))
  public headers = { authorization: `Bearer ${this.token.api_token}`, 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*/*' };


  checkStatusMode(valor) {
    console.log('o valor entra aqui', valor)
    return APIService.statusMode.emit(valor);
  } 

  public saveMeet() {
    console.log(this.body)
    return this.http.post(this.url + 'createmeeting', this.body, {headers: this.headers})
  }
}
