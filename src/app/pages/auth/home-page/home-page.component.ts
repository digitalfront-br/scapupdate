import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'df-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  public loading = true;
  public personValues;

  ngOnInit(): void {
    this.loadPersonValue();
  }

  loadPersonValue() {
    this.apollo.query({
      query: gql`
      { 
        personValues(first: 250){
          data{
            id
            title
          }
        }
      }
      `
    }).subscribe((res) => {
      this.personValues = res.data
      this.loading = res.loading
    },(error) => {
      console.log(error);
    });
  }

}
