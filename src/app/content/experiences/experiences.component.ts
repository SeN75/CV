import { Component, OnInit } from '@angular/core';
import {animation} from '@angular/animations';
import { fade } from '../../animate';
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  animations: [
    fade
  ]
})
export class ExperiencesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
