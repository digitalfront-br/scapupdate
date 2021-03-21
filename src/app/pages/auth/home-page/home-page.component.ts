import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import UIkit  from 'uikit';

let pristine = true;

@Component({
  selector: 'df-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})

export class HomePageComponent implements OnInit {

  constructor(private apollo: Apollo) { 
  }

  public loading = true;
  public data;
  public personValues;

  ngOnInit(): void {
    this.loadPersonValue();
    this.openModal();
  }

  completeWizard() {
    window.sessionStorage.setItem('wizard', JSON.stringify({status: 'disabled'}))
  }

  openModal(){
    const pristine = JSON.parse(window.sessionStorage.getItem('wizard'));
    if(!pristine){
      UIkit.modal('#steps').show();
    }
  }

  loadPersonValue() {
    this.apollo.query({
      query: gql`
      { 
        questions(first: 10){
          count:paginatorInfo{
            total
          }
          data{
            title
          }
        }
        movies:moviesBooks(first: 5, type: 1){
          count:paginatorInfo{
            total
          }
          data{
            title
          }
        }
        books:moviesBooks(first: 5, type: 2){
          count:paginatorInfo{
            total
          }
          data{
            title
          }
        }
        categories(first: 5){
          count:paginatorInfo{
            total
          }
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
