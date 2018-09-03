import { Component, OnInit } from '@angular/core';
import { fade } from '../../animate';

@Component({
  selector: 'app-skilss',
  templateUrl: './skilss.component.html',
  styleUrls: ['./skilss.component.css'],
  animations: [
    fade
  ]
})
export class SkilssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
