import { Component, OnInit, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
view: string;
  constructor(navbar: NavbarComponent) {
    this.view = navbar.View;
    console.log(this.view);
   }
  ngOnInit() {
  }

}
