import { Component, OnInit } from '@angular/core';
import { SKIL, SKIL2 } from './arr-skils';
import { style } from '@angular/animations';
@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent implements OnInit {
  skils = SKIL;
  skils2 = SKIL2;
  constructor() { }

  ngOnInit() {
  }
  setWidth(widht) {
    const styles = {
      'width': [widht]
    };
    console.log(widht);
    return styles;
  }
}
