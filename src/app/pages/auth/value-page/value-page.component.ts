import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-value-page',
  templateUrl: './value-page.component.html',
  styles: [
  ]
})
export class ValuePageComponent implements OnInit {

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
        personValues(first: 30){
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
