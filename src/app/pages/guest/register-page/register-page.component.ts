import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import UIkit from 'uikit';

@Component({
  selector: 'df-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent implements OnInit {

  constructor(private http: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public messages = null;
  public disableBtn = false;

  infoDanger(msg){
    UIkit.notification({
      message: `<div class="uk-text-center">
      ${ msg['name'] ? '<span>'+msg['name']+'</span><br>' : '' }
      ${ msg['phone'] ? '<span>'+msg['phone']+'</span><br>' : '' }
      ${ msg['email'] ? '<span>'+msg['email']+'</span><br>' : '' }
      ${ msg['status'] ? '<span>'+msg['status']+'</span><br>' : '' }
      ${ msg['password'] ? '<span>'+msg['password']+'</span>' : '' }
      </div>`,
      status: 'danger',
      pos: 'top-center',
      timeout: 5000
    });
}
infoSuccess(msg){
  UIkit.notification({
    message: `<div class="uk-text-center"><span>${msg}</span></div>`,
    status: 'success',
    pos: 'top-center',
    timeout: 5000
  });
}
  onSubmit(body){
    this.disableBtn = true;
    return this.http.makeRegister(body).subscribe(
      success => {
        this.infoSuccess('Por favor, verifique seu email')
        console.log(success);
        this.disableBtn = false;
        return this.router.navigate(['/login'])
      },
      error => {
        this.infoDanger(error.error),
        console.log(error)
        this.disableBtn = false;
      }
      
    );
  }

}
