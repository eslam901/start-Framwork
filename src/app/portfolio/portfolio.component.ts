import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  imgs: string[] = [
    './assets/images/1.jpg',
    './assets/images/2.jpg',
    './assets/images/3.jpg',
    './assets/images/1.jpg',
    './assets/images/2.jpg',
    './assets/images/3.jpg',
  ];
  imgSrc: string = '';
  click: boolean = false;
  modelOpen(i: number): void {
    this.imgSrc = this.imgs[i];
    this.click = true;
  }
  modelClose(e: Event): void {
    if (!(e?.target instanceof HTMLImageElement)) {
      this.click = false;
    }
  }
}
