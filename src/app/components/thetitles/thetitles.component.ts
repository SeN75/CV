import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thetitles',
  templateUrl: './thetitles.component.html',
  styleUrls: ['./thetitles.component.scss'],
})
export class ThetitlesComponent implements OnInit {
  title = 'Front end Developer';
  constructor() {}

  ngOnInit(): void {}
}
