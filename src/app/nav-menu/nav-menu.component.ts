import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavMenuConstants } from './nav-menu.constants';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent implements OnInit {

  public smallMenuOpen: boolean;
  public navItems: Array<any>;

  constructor(private elemRef: ElementRef) {
    this.navItems = [];
  }

  @HostListener('document:click', ['$event'])
  onClick(event) {
    if (!this.elemRef.nativeElement.contains(event.target)) {
      this.smallMenuOpen = false;
    }
  }

  ngOnInit(): void {
    this.navItems = NavMenuConstants.MENU;
  }

  public toggleMenu() {
    this.smallMenuOpen = !this.smallMenuOpen;
  }

}
