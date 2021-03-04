import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
@Component({
  selector: 'df-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  public btnEdit: Boolean = false;

  ngOnInit(): void {
    Feather.replace();
  }

}
