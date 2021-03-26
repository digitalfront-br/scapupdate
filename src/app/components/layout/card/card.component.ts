import { Component, OnInit, Input } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

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
  @Input() entidade: String;
  @Input() tipo: Number;

  constructor(public editService: APIService) { }
  public edit = JSON.parse(window.sessionStorage.getItem('editMode'));

  ngOnInit(): void {
    this.whatchMode();
  }

  public whatchMode() {
    APIService.statusMode.subscribe(res => this.edit = res)
  }

  public addMeetingList(id) {
    var lista = JSON.parse(window.sessionStorage.getItem('meetings'));
    if(this.entidade == 'questions') {
      lista.questions.push(id)
    }
    if(this.entidade == 'movies') {
      lista.movies.push(id)
    }
    if(this.entidade == 'books') {
      lista.books.push(id)
    }
    window.sessionStorage.setItem('meetings', JSON.stringify(lista))
    console.log(lista);
  }

}
