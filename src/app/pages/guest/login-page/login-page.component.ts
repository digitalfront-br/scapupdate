import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UIkit from 'uikit';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'df-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent implements OnInit {

  constructor(public http: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public messages = null;
  public disableBtn = false;
  public user = {
    email: '', password: ''
  }

  infoDanger(msg){
      UIkit.notification({
        message: `<div class="uk-text-center">
        ${ msg['email'] ? '<span>'+msg['email']+'</span><br>' : '' }
        ${ msg['password'] ? '<span>'+msg['password']+'</span>' : '' }
        </div>`,
        status: 'danger',
        pos: 'top-center',
        timeout: 5000
      });
  }
  infoSuccess(msg){
    UIkit.notification({
      message: `<div class="uk-text-center"><span>Olá ${msg.name}</span></div>`,
      status: 'success',
      pos: 'top-center',
      timeout: 5000
    });
}

  onSubmit(body){
    this.disableBtn = true;
    return this.http.makeLogin(body).subscribe(
      success => {
        const user: object = success;
        window.sessionStorage.setItem('user', JSON.stringify(user))
        if(window.localStorage.getItem('lista')) {
          window.localStorage.removeItem('lista')
        }
        this.disableBtn = false;
        this.infoSuccess(user)
        return this.router.navigate(['/'])
      },
      error => {
        this.messages = error.error
        this.infoDanger(error.error)
        this.disableBtn = false
      }
      
    );
  }

}
