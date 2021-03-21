import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public url: string = "http://localhost:8000/api/auth/";
  public url2: string = "http://localhost:8000/";
  public headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*/*' };

  makeLogin(body) {
    return this.http.post(this.url+'login', body, {headers: this.headers});
  }
  makeRegister(body) {
    return this.http.post(this.url+'create-account', body,  {headers: this.headers});
  }
  makeForgot(body) {
    return this.http.post(this.url2+'forgot-password', body,  {headers: this.headers});
  }
}
