import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'desktop-icon',
  templateUrl: './desktop-icon.component.html',
  styleUrls: ['./desktop-icon.component.scss'],
})
export class DesktopIconComponent implements OnInit {
  @Input() icon = '';
  @Input() appName = '';

  apps = [
    { name: 'about me', icon: '../../assets/img/saleh.svg' , path: "/terminal/aboutme"},
    { name: 'portfolio', icon: '../../assets/img/folder.svg', path: "/portfolio" },
    { name: 'contact me', icon: '../../assets/img/phone.svg' , path: "/contact"},
  ];
  constructor() {}

  ngOnInit(): void {}
}
