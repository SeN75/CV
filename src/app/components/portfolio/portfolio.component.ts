import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  headerButton = [
    {
      class: 'xmark',
      img: '../../../assets/img/xmark.svg',

    },
    { class: 'xmark', img: '../../../assets/img/maximaize.svg', action: '' },
    { class: 'min', img: '../../../assets/img/minimaize.svg', action: '' },
  ];

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  replaceMethod(url: string) {
    return url.replace(/\//g, '\\');
  }
}
