import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-category-page',
  templateUrl: './category-page.component.html',
  styles: [
  ]
})
export class CategoryPageComponent implements OnInit {

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
        categories(first: 25){
          data{
            id
            title
            image
          }
        }
      }
      `
    }).subscribe((res) => {
      this.data = res.data
      this.loading = res.loading
    },(error) => {
      console.log(error);
    });
  }

}
