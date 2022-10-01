import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HelperService } from './service/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'CV';
  container_width = 100;
  // @ViewChild('bg_container') bg_container!: ElementRef;
  constructor(public helperSrv: HelperService) {


  }
  ngAfterViewInit(): void {

  }
}
