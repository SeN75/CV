import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-project-pics',
  templateUrl: './project-pics.component.html',
  styleUrls: ['./project-pics.component.scss']
})
export class ProjectPicsComponent implements OnInit {
  pictures: any =[ {name: '', path: '', link: ''}];
  constructor(private router: Router, private helperSrv: HelperService  ) {
    if(this.router.url.includes('ahmall'))
    this.pictures = ahmall;
    else if (this.router.url.includes('qlean_app'))
    this.pictures = qleanapp;
    else if (this.router.url.includes('ejartech'))
    this.pictures = ejartech;
    else if (this.router.url.includes('warshaplus'))
    this.pictures = warshaplus;


   }

  ngOnInit(): void {
  }
  openLink(link:string) {
    window.open(link);
  }
  prview(i: number) {
    this.helperSrv.picPreview.pics = [...this.pictures];
    this.helperSrv.picPreview.index = i;
    this.helperSrv.picPreview.title = this.router.url;

    this.helperSrv.showGallery = true;

  }
}
const warshaplus = [
  {name: 'Warshaplus - Taqdeer' , link: "https://taqdeer.warshaplus.com/"},
  {name: 'Warshaplus ' , link: "https://warshaplus.com/"},
  {name: 'Warshaplus - Parts' , link: "https://parts.warshaplus.com/"},
]
const ejartech = [
  {name: 'home page 1', path: "../../../../../assets/img/portfolio/Ejartech/home page 1.png"},
  {name: 'home page 2', path: "../../../../../assets/img/portfolio/Ejartech/home page 2.png"},
  {name: 'book page', path: "../../../../../assets/img/portfolio/Ejartech/book page.png"},
  {name: 'registration page', path: "../../../../../assets/img/portfolio/Ejartech/registration page.png"},
  {name: 'reservation page', path: "../../../../../assets/img/portfolio/Ejartech/reservation page.png"},
  {name: 'result page', path: "../../../../../assets/img/portfolio/Ejartech/result page.png"},
]

const qleanapp = [
  {name: 'burger menu', path: "../../../../../assets/img/portfolio/Qleanapp/burger menu.png"},
  {name: 'landing page 1', path: "../../../../../assets/img/portfolio/Qleanapp/1.png"},
  {name: 'landing page 2', path: "../../../../../assets/img/portfolio/Qleanapp/2.png"},
  {name: 'home screen', path: "../../../../../assets/img/portfolio/Qleanapp/home screen.png"},
  {name: 'order details', path: "../../../../../assets/img/portfolio/Qleanapp/order details.png"},
  {name: 'order status', path: "../../../../../assets/img/portfolio/Qleanapp/order status.png"},
]

const ahmall = [
  {name: 'contact screen', path: '../../../../../assets/img/portfolio/Ahmall/contact screen.png'},
  {name: 'contract', path: '../../../../../assets/img/portfolio/Ahmall/contract.png'},
  {name: 'edit user info', path: '../../../../../assets/img/portfolio/Ahmall/edit user info.png'},
  {name: 'home screen', path: '../../../../../assets/img/portfolio/Ahmall/home screen.png'},
  {name: 'login screen (otp)', path: '../../../../../assets/img/portfolio/Ahmall/login screen (otp).png'},
  {name: 'login screen (phone number)', path: '../../../../../assets/img/portfolio/Ahmall/login screen (phone number).png'},
  {name: 'login screen', path: '../../../../../assets/img/portfolio/Ahmall/login screen.png'},
  {name: 'order details screen 1', path: '../../../../../assets/img/portfolio/Ahmall/order details screen 1.png'},
  {name: 'order details screen 2', path: '../../../../../assets/img/portfolio/Ahmall/order details screen 2.png'},
  {name: 'order detalis - offer', path: '../../../../../assets/img/portfolio/Ahmall/order detalis - offer.png'},
  {name: 'orders screen', path: '../../../../../assets/img/portfolio/Ahmall/orders screen.png'},
  {name: 'poviders screen', path: '../../../../../assets/img/portfolio/Ahmall/poviders screen.png'},
  {name: 'provider profile', path: '../../../../../assets/img/portfolio/Ahmall/provider profile.png'},
  {name: 'provider ratings', path: '../../../../../assets/img/portfolio/Ahmall/provider ratings.png'},
  {name: 'settings', path: '../../../../../assets/img/portfolio/Ahmall/settings.png'},
  {name: 'storing - step 0', path: '../../../../../assets/img/portfolio/Ahmall/storing - step 0.png'},
  {name: 'storing - step 1', path: '../../../../../assets/img/portfolio/Ahmall/storing - step 1.png'},
  {name: 'storing - step 2 - add room', path: '../../../../../assets/img/portfolio/Ahmall/storing - step 2 -add room.png'},
  {name: 'stroing - step 3', path: '../../../../../assets/img/portfolio/Ahmall/stroing - step 3.png'},
  {name: 'change password screen', path: '../../../../../assets/img/portfolio/Ahmall/pr/change password screen.png'},
  {name: 'conditions screen3', path: '../../../../../assets/img/portfolio/Ahmall/pr/conditions screen.png'},
  {name: 'contact screen', path: '../../../../../assets/img/portfolio/Ahmall/pr/contact screen.png'},
  {name: 'covrage screen', path: '../../../../../assets/img/portfolio/Ahmall/pr/covrage screen.png'},
  {name: 'current orders', path: '../../../../../assets/img/portfolio/Ahmall/pr/current orders.png'},
  {name: 'login form', path: '../../../../../assets/img/portfolio/Ahmall/pr/login form.png'},
  {name: 'login screen', path: '../../../../../assets/img/portfolio/Ahmall/pr/login screen.png'},
  {name: 'new orders - home screen', path: '../../../../../assets/img/portfolio/Ahmall/pr/new orders - home screen.png'},
  {name: 'order details - proposal offer screen', path: '../../../../../assets/img/portfolio/Ahmall/pr/order details - proposal offer screen.png'},
  {name: 'registation form 1', path: '../../../../../assets/img/portfolio/Ahmall/pr/registation form 1.png'},
  {name: 'registation form 2', path: '../../../../../assets/img/portfolio/Ahmall/pr/registation form 2.png'},
  {name: 'registation form 3', path: '../../../../../assets/img/portfolio/Ahmall/pr/registation form 3.png'},
  {name: 'services screen', path: '../../../../../assets/img/portfolio/Ahmall/pr/services screen.png'},
  {name: 'settings', path: '../../../../../assets/img/portfolio/Ahmall/pr/settings.png'},

]
