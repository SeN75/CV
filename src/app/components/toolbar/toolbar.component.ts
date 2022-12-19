import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(
    private router: Router,
    public halperSrv: HelperService
  ) {}
  showMenu = false;
  skils = [
    {text: 'angular',pic: '../../../assets/img/angular.svg'},
    {text: 'nestjs',pic: '../../../assets/img/nestjs.svg'},
    {text: 'typescript',pic: '../../../assets/img/typescript.svg'},
    {text: 'nodejs',pic: '../../../assets/img/nodejs.svg'},
  ]

  hour = 0;
  minuts = 0;
  ampm = 'pm'
  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();

      this.hour = date.getHours();
      this.ampm = this.hour >=12 ? "PM" : "AM";
      this.hour %= 12;
      this.hour = this.hour == 0 ? 12 : this.hour;
      this.minuts = date.getMinutes();
    })
  }

  action(index: number){

    if(index == 1){

      this.router.navigateByUrl(this.halperSrv.windows[1].isOpen ? '/' : '/portfolio')

    }
    this.halperSrv.windoClick(index);
  }
}
