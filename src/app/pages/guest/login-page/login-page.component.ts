import { Component, DoBootstrap, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UIkit from 'uikit';
import { AuthService } from 'src/app/services/auth.service';
import Dexie from "dexie";

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
  private db: Dexie = null;
  private table: Dexie.Table<any> = null
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

  createDb() {
    this.db = new Dexie("SCAP_DB");
    this.db.version(1).stores({
      user: 'id'
    });
    this.table = this.db.table('user');
  }

  private async saveUser(user) {
    try {
      await this.table.add(user);
    } catch (error) {
      console.log('Erro: ', error.message);
    }
  }

  public onSubmit(body){
    this.disableBtn = true;
    return this.http.makeLogin(body)
    .subscribe(
      user => {
        this.createDb();
        this.saveUser(user);
        window.sessionStorage.setItem('user', JSON.stringify(user));
        this.disableBtn = false;
        return this.router.navigate(['/']);
      },
      error => {
        this.messages = error.error
        this.infoDanger(error.error)
        this.disableBtn = false
      }
      
    );
  }

}
