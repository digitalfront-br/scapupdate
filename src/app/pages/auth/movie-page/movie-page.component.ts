import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-movie-page',
  templateUrl: './movie-page.component.html',
  styles: [
  ]
})
export class MoviePageComponent implements OnInit {

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
        moviesBooks(type: 1){
          data{
            id
            title
            image
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
