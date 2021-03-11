import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-question-page',
  templateUrl: './question-page.component.html',
  styles: [
  ]
})
export class QuestionPageComponent implements OnInit {

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
        questions(first: 20){
          data{
            id
            title
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
