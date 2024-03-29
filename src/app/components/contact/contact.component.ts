import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {BreakpointObserver} from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('window') window!: ElementRef;

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

  img:Observable<'avatar' | 'saleh'> ;

  information: any = [
    {icon: '../../../assets/img/mail.svg', text: 'Email: saleh-alsaggaf7575@outlook\.com'},
    // {icon: '../../../assets/img/phone2.svg', text: 'Phone: +966-551594683'},
    {icon: '../../../assets/img/twitter.svg', text: 'Twiter: @saleh_alsaggaf1' , link: "https://twitter.com/saleh_alsaggaf1"},
    {icon: '../../../assets/img/github.svg', text: 'Github: SeN75', link: "https://github.com/SeN75"},
    {icon: '../../../assets/img/instagram.svg', text: 'instagram: @saleh_alsaggaf', link: "https://www.instagram.com/saleh_alsaggaf/"},
    {icon: '../../../assets/img/linkedin.svg', text: 'Linkedin: Saleh Alsaggaf', link: "https://linkedin.com/in/saleh-alsaggaf-38975a168"},
  ];
 constructor(private router: Router,
  breakpointObserver: BreakpointObserver,
  public helperSrv: HelperService
  ) {

    this.img = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'avatar' : 'saleh')));
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.window.nativeElement.classList.add('open_window')
    setTimeout(() => {
      this.window.nativeElement.classList.remove('open_window')

    },500)
  }
  actionButton(index: number) {
    if(index == 0) {
      this.window.nativeElement.classList.add('close_window');
      setTimeout(() => {
        this.window.nativeElement.classList.remove('close_window');
        this.helperSrv.windows[2].isOpen = false;
        // this.router.navigateByUrl('/');
      }, 500)
    }
    else if (index == 1){
      if(this.window.nativeElement.classList.contains('window_bigger'))
      this.window.nativeElement.classList.remove('window_bigger')
      else
      this.window.nativeElement.classList.add('window_bigger')

    }
  }
  openLink(link:string) {
    window.open(link)
  }
}
