import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  headerButton = [
    {
      class: 'xmark',
      img: '../../../assets/img/xmark.svg',

    },
    { class: 'xmark', img: '../../../assets/img/maximaize.svg', action: '' },
    { class: 'min', img: '../../../assets/img/minimaize.svg', action: '' },
  ];

  constructor(public router: Router, private helperSrv:HelperService) { }
  @ViewChild('window') window!: ElementRef;
  ngAfterViewInit() {
    this.window.nativeElement.classList.add('open_window')
    setTimeout(() => {
      this.window.nativeElement.classList.remove('open_window')

    },500)
  }
  actionButton(index: number) {
    if(index == 0) {
      this.window.nativeElement.classList.add('close_window');
      setTimeout(() => {
        this.window.nativeElement.classList.remove('close_window');
        this.helperSrv.showPor = false;
        this.router.navigateByUrl('/');
      }, 500)
    }
    else if (index == 1){
      if(this.window.nativeElement.classList.contains('window_bigger'))
      this.window.nativeElement.classList.remove('window_bigger')
      else
      this.window.nativeElement.classList.add('window_bigger')

    }
  }
  ngOnInit(): void {
  }
  replaceMethod(url: string) {
    return url.replace(/\//g, '\\');
  }
}
