import { Component, OnInit } from '@angular/core';
import {animation} from '@angular/animations';
import { fade, fadeIn } from '../../animate';
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  animations: [
    fade,
    fadeIn
  ]
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
