import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  scroll: boolean = true;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    if (e.target.documentElement.scrollTop) {
      this.scroll = false;
    } else {
      this.scroll = true;
    }
  }
}
