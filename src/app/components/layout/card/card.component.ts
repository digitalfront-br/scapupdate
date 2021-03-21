import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'df-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {
  @Input() id: String;
  @Input() title: String;
  @Input() link: String;
  @Input() image: String;
  @Input() tipo: Number;

  constructor() { }
  public edit;

  ngOnInit(): void {
    this.edit = JSON.parse(window.sessionStorage.getItem('editMode'));
  }

}
