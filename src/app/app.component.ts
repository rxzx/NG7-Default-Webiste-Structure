import { Component, AfterViewInit, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'NGTestWebsite';


  constructor() {

  }


  getState(outlet) {
    console.log(outlet);
    return outlet.activatedRouteData.state;
  }

  ngOnInit() {

  }



  initiateJquery(){
  }






}


