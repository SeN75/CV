import { Component, OnInit } from '@angular/core';
import {SKIL} from "./arr-skils";
@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent implements OnInit {
 skils = SKIL;
  constructor() { }

  ngOnInit() {
  }

}