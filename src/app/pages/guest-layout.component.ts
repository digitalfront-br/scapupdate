import { fade } from './../app-animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'df-guest-layout',
  template: `
  <main [@routeAnimations]="prepareRoute(outlet)" class="uk-flex uk-flex-column uk-height-viewport main">
    <router-outlet  #outlet="outlet"></router-outlet>
  </main>
  `,
  animations: [
    fade
  ]
})
export class GuestLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
