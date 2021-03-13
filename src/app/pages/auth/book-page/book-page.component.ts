import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-book-page',
  templateUrl: './book-page.component.html',
  styles: [
  ]
})
export class BookPageComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  public loading = true;
  public data;

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.apollo.query({
      query: gql`
      { 
        moviesBooks(type: 2){
          data{
            id
            image
            title
          }
        }
      }
      `
    }).subscribe((res) => {
      console.log(res.data)
      this.data = res.data
      this.loading = res.loading
    },(error) => {
      console.log(error);
    });
  }

}
