import { Component, OnInit } from '@angular/core';
import { fade, fadeIn } from '../../animate';
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  animations: [
    fade, fadeIn
  ]
})
export class ExperiencesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
