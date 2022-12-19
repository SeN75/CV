import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'pic-preview',
  templateUrl: './pic-preview.component.html',
  styleUrls: ['./pic-preview.component.scss']
})
export class PicPreviewComponent implements OnInit, AfterViewInit {
  @Input() pics: any =  [];
  @Input() index = 0;
  @Input() title = 'warshaplue';
  @ViewChild('window') window!: ElementRef;
  actionButton(index: number) {
    if(index == 0) {
      this.window.nativeElement.classList.add('close_window');
      setTimeout(() => {
        this.window.nativeElement.classList.remove('close_window');

        this.helperSrv.windows[3].isOpen = false;
      }, 500)
    }
    else if (index == 1) {
      if(this.window.nativeElement.classList.contains('window_bigger'))
      this.window.nativeElement.classList.remove('window_bigger')
      else
      this.window.nativeElement.classList.add('window_bigger')
    }
  }
  dragPosition = {x: (0), y:-(0)}
  headerButton = [
    { class: 'xmark',img: '../../../assets/img/xmark.svg' },
    { class: 'xmark', img: '../../../assets/img/maximaize.svg' },
    { class: 'min', img: '../../../assets/img/minimaize.svg' },
  ];

  constructor(private router: Router, public helperSrv: HelperService) { }
  ngAfterViewInit() {
    this.window.nativeElement.classList.add('open_window')
    setTimeout(() => {
      this.window.nativeElement.classList.remove('open_window')

    },500)
  }

  ngOnInit(): void {
  }
  preview() {
    return this.helperSrv.picPreview.pics[this.helperSrv.picPreview.index] ? this.helperSrv.picPreview.pics[this.helperSrv.picPreview.index].path : '';
  }

  next() {
    this.helperSrv.picPreview.index = this.helperSrv.picPreview.index > this.helperSrv.picPreview.pics.length - 2 ? 0: this.helperSrv.picPreview.index + 1
  }
  back() {
    this.helperSrv.picPreview.index = this.helperSrv.picPreview.index == 0 ? this.helperSrv.picPreview.pics.length - 1: this.helperSrv.picPreview.index - 1
  }
}
