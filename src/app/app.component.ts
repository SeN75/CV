import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from './service/helper.service';
import { ColorsSchemeService } from 'colors-scheme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'CV';
  container_width = 100;
  // @ViewChild('bg_container') bg_container!: ElementRef;
  constructor(public helperSrv: HelperService, router: Router, private colorSrv:ColorsSchemeService) {
    router.navigateByUrl('/')
    console.log('colors:: ', this.colorSrv.createSwatches('#66CC99'))
  }
  ngAfterViewInit(): void {

  }
}
