import { Component, OnInit } from '@angular/core';
import {nav} from './nav-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  MyLogo: string;
  constructor() {
    this.MyLogo = 'src/images/Logo.png';
  }
  ngOnInit() {
  }

}
