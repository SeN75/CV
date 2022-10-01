import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit, AfterViewInit  {
  headerButton = [
    {
      class: 'xmark',
      img: '../../../assets/img/xmark.svg',

    },
    { class: 'xmark', img: '../../../assets/img/maximaize.svg', action: '' },
    { class: 'min', img: '../../../assets/img/minimaize.svg', action: '' },
  ];

  dragPosition = {x: (0), y:-(0)}

  @ViewChild('window') window!: ElementRef;
  @ViewChild('console') _console!: ElementRef;
  @ViewChild('line') line!: ElementRef;

  terminal: FormControl;
  constructor(private router: Router) {
    this.terminal = new FormControl();

  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    if(this.router.url.includes('aboutme')) {
      this.terminal.setValue('run about-me.exe');
      this.action();
    }
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

        this.router.navigateByUrl('/');
      }, 500)
    }
    else if (index == 1){
      if(this.window.nativeElement.classList.contains('window_bigger'))
      this.window.nativeElement.classList.remove('window_bigger')
      else
      this.window.nativeElement.classList.add('window_bigger')

    }
  }
  action() {
    let w = document.createElement('div');
    w.innerText = "C:\\user\\saleh\\desktop\\> "+ this.terminal.value ;

    let value = this.terminal.value.toLowerCase();
    if( value == 'clear') {
      this.line.nativeElement.innerText = '';
    }
    else if(value == 'help') {
      w.innerText  = this.help(w);
      this.line.nativeElement.appendChild(w)
    }
    else if(value == 'run about-me.exe') {
      w.innerText  = this.aboutme(w);
      this.line.nativeElement.appendChild(w)
    }
    else if(value == "run contact-me.exe")
    this.router.navigateByUrl('/contact');
    else {
      w.innerText += "\nUnknown Command: " + value + ". enter help to see avilabel commands"
      this.line.nativeElement.appendChild(w)

    }

    this.terminal.setValue('');
  }
  private help(w: any) {
    return `${w.innerText}
    run about-me.exe ------ information about saleh
    run protolio ------------ My work and experices
    run contact-me.exe ---- Show my contact informations
    clear ------------------- clear termianl from text
    help
    `;
  }
  private aboutme(w: any) {
    return `${w.innerText}
    -------------------------------

    I’m saleh alsaggaf and I’m software engineer, front-end engineer for both website and mobile app and UX designer with 6+years of experience in developing software and system for website and mobile app.

    I have contributed to develop website and mobile application for Qlean laundry, EjarTech and warshpluse


    --------------------------------
    `
  }
}
