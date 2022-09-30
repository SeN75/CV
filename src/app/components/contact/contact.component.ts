import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  headerButton = [
    {
      class: 'xmark',
      img: '../../../assets/img/xmark.svg',

    },
    { class: 'xmark', img: '../../../assets/img/maximaize.svg', action: '' },
    { class: 'min', img: '../../../assets/img/minimaize.svg', action: '' },
  ];

  tools = [
    {theme: 1, },
    {theme: 1, },
    {theme: 1, },
    {theme: 1, },
    {theme: 1, },
    {theme: 1, },
    {theme: 1, },
    {theme: 1, },
    {theme: 1, },
    {theme: 2, },
    {theme: 2, },
  ];


  information: any = [
    {icon: '../../../assets/img/mail.svg', text: 'Email: saa111954@hotmail\.com'},
    {icon: '../../../assets/img/phone2.svg', text: 'Phone: +966-551594683'},
    {icon: '../../../assets/img/twitter.svg', text: 'Twiter: @saleh_alsaggaf1' , link: "https://twitter.com/saleh_alsaggaf1"},
    {icon: '../../../assets/img/github.svg', text: 'Github: SeN75', link: "https://github.com/SeN75"},
    {icon: '../../../assets/img/instagram.svg', text: 'instagram: @saleh_alsaggaf', link: "https://www.instagram.com/saleh_alsaggaf/"},
    {icon: '../../../assets/img/linkedin.svg', text: 'Linkedin: Saleh Alsaggaf', link: "linkedin.com/in/saleh-alsaggaf-38975a168"},
  ];
 constructor(private router: Router) { }

  ngOnInit(): void {

  }
  actionButton(index: number) {
    if(index == 0)
    this.router.navigateByUrl('/');
  }

  openLink(link:string) {
    window.open(link)
  }
}
