import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

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
        me{
          id
          name
          profile_photo_url
          meetings{
            title
            questions{
              title
            }
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
  
  checkout() {
    window.sessionStorage.removeItem('user');
    window.sessionStorage.removeItem('wizard');
    window.indexedDB.deleteDatabase('SCAP_DB');
    window.location.reload();
  }

}
