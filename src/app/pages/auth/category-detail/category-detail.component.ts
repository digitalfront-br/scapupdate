import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'df-category-detail',
  templateUrl: './category-detail.component.html',
  styles: [
  ]
})
export class CategoryDetailComponent implements OnInit {

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
      query category($id: ID) { 
        category(id: $id){
          id
          title
          image
          questions {
            title
          }
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
