import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller){}
  
  scrollTo(anchor: string): void{
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
