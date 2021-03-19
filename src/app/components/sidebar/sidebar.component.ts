import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import Dexie from 'dexie';

@Component({
  selector: 'df-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  public loading = true;
  private table: Dexie.Table<any>
  public data;

  ngOnInit(): void {
    this.loadData();
  }

  private async saveData() {
    try {
      const db = await window.indexedDB.open('SCAP_DB');
      console.log('db: ',db)
    } catch (error) {
      console.log('db error: ', error)
    }
  }

  loadData() {
    this.apollo.query({
      query: gql`
      { 
        me{
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
      this.saveData();
      console.log(res.data)
      this.data = res.data
      this.loading = res.loading
    },(error) => {
      console.log(error);
    });
  }
  
  checkout() {
    window.sessionStorage.removeItem('user');
    window.indexedDB.deleteDatabase('SCAP_DB');
    window.location.reload();
  }

}
