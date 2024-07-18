import { Component, OnInit } from '@angular/core';
import { HomeConstants } from './home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public homeData: any;

  constructor() {
    this.homeData = {
      header: '',
      intro: '',
      reqs: [],
      techStack: []
    }
  }

  ngOnInit(): void {
    this.homeData = {
      reqs: HomeConstants.HOME_REQS,
      techStack: HomeConstants.TECH_STACK
    }
  }

}
