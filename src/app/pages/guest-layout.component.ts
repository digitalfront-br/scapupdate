import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-guest-layout',
  template: `
  <p>guest layout </p>
  <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class GuestLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
