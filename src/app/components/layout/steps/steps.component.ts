import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-steps',
  templateUrl: './steps.component.html',
  styles: [
  ]
})
export class StepsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  completeWizard() {
    window.sessionStorage.setItem('wizard', JSON.stringify({status: 'disabled'}))
  }

}
