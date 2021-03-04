import { fade } from './../app-animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'df-auth-layout',
  template: `
  <main [@routeAnimations]="prepareRoute(outlet)" class="uk-flex uk-flex-column uk-height-viewport main">
    <df-header></df-header>
    <router-outlet  #outlet="outlet"></router-outlet>
    <df-footer></df-footer>
  </main>
  <df-sidebar></df-sidebar>
  `,
  animations: [
    fade
  ]
})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
