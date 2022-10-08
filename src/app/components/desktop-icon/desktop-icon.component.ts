import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper.service';

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
  constructor(private helperSrv:HelperService, private router: Router) {}

  ngOnInit(): void {}
  action(index: number) {
    if(index == 0)
    this.helperSrv.showAbout = true;
    if(index == 1){
      this.router.navigateByUrl('/portfolio')
      this.helperSrv.showPor = true;
    }
    if(index == 2)
    this.helperSrv.showContact = true;
  }
}
