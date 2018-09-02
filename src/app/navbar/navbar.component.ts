import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  MyLogo: string;
  View = 'Aboutme';
  constructor() {
    this.MyLogo = 'src/images/Logo.png';
    console.log(this.View);
  }
  ngOnInit() {
  }


}
