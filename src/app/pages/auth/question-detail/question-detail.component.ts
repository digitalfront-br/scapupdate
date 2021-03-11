import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-question-detail',
  templateUrl: './question-detail.component.html',
  styles: [
  ]
})
export class QuestionDetailComponent implements OnInit {

  constructor(private apollo: Apollo, private route: ActivatedRoute) { }

  public loading = true;
  public data;
  public id = this.route.snapshot.params.id;

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.apollo.query({
      query: gql`
      query question($id: ID) { 
        question(id: $id){
          id
          title
        }
      }
      `,
      variables: { id: this.id }
    }).subscribe((res) => {
      console.log(res.data)
      this.data = res.data
      this.loading = res.loading
    },(error) => {
      console.log(error);
    });
  }

}
