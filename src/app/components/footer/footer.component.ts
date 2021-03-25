import { APIService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
@Component({
  selector: 'df-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor(public api: APIService) { }

  public btnEdit: Boolean = false;
  public meeting: string;

  ngOnInit(): void {
    Feather.replace();
  }

  public setEditMode(mode) {
    window.sessionStorage.setItem('editMode', JSON.stringify(mode));
    return this.api.checkStatusMode(mode)
  }

  public createMeetingList(title) {
    window.sessionStorage.setItem('meetings', JSON.stringify({ title: title, movies: [], books: [], questions: [] }))
  }
  
  public saveList() {
    const data = JSON.parse(window.sessionStorage.getItem('meetings'));
    return this.api.saveMeet().subscribe(res => {
      window.sessionStorage.removeItem('meetings');
      window.location.reload();
    }, error => console.log(error))

  }

}
