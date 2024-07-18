import { Component, OnInit } from '@angular/core';
import { NavMenuConstants } from './nav-menu.constants';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent implements OnInit {

  public navItems: Array<any>;

  constructor() {
    this.navItems = [];
  }

  ngOnInit(): void {
    this.navItems = NavMenuConstants.MENU;
  }

}
