import { Component, OnInit } from '@angular/core';
import { fade, fadeIn } from '../../animate';

@Component({
  selector: 'app-skilss',
  templateUrl: './skilss.component.html',
  styleUrls: ['./skilss.component.css'],
  animations: [
    fade, fadeIn
  ]
})
export class SkilssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
