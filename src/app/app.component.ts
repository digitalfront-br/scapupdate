import { fade } from './app-animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'df-root',
  template: `
    <div [@routeAnimations]="prepareRoute(outlet)" >
    <router-outlet #outlet="outlet"></router-outlet>
  </div>
  `,
  animations: [
    fade
  ]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
