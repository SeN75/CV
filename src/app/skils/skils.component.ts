import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent implements OnInit {
  Name = 'html';
  Style = 100;
  skil = [{name: this.Name, style: this.Style}];
  constructor() { }

  ngOnInit() {
  }

}
