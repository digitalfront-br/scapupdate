import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-auth-layout',
  template: `
  <main class="uk-flex uk-flex-column uk-height-viewport main">
    <df-header></df-header>
    <p>auth layout</p>
    <router-outlet></router-outlet>
    <df-footer></df-footer>
  </main>
  <df-sidebar></df-sidebar>
  `,
  styles: [
  ]
})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
