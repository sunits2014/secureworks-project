import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  public headerInfo: any;

  constructor(
    private activeRoute: ActivatedRoute
  ) {    
  }
  ngOnInit(): void {
    this.headerInfo = this.activeRoute.snapshot.data['headerInfo'];
  }

}
