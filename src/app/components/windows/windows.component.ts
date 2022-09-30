import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss'],
})
export class WindowsComponent implements OnInit {
  headerButton = [
    {
      class: 'xmark',
      img: '../../../assets/img/xmark.svg',
      action: () => {
        console.log('bigg')
        if(this.window.nativeElement.classList.contains('bigger'))
        this.window.nativeElement.classList.remove('bigger');

        else
        this.window.nativeElement.classList.add('bigger');
      },
    },
    { class: 'xmark', img: '../../../assets/img/maximaize.svg', action: '' },
    { class: 'min', img: '../../../assets/img/minimaize.svg', action: '' },
  ];

  @ViewChild('window') window!: ElementRef;

  constructor() {}

  ngOnInit(): void {}
}
