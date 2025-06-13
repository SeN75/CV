import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  PLATFORM_ID,
  Inject,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit, OnDestroy {
  hour = signal<number>(0);
  ampm = signal<string>('');
  minuts = signal<number>(0);
  toolsbarsActions = signal<any[]>([
    {
      icon: '',
      label: '',
      link: '',
    },
    {
      icon: '',
      label: '',
      link: '',
    },
    {
      icon: '',
      label: '',
      link: '',
    },
    {
      icon: '',
      label: '',
      link: '',
    },
    {
      icon: '',
      label: '',
      link: '',
    },
  ]);
  private platformId = inject(PLATFORM_ID);
  private timer: any;

  constructor() {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateTime();
      this.timer = setInterval(() => this.updateTime(), 1000);
    }
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateTime(): void {
    const date = new Date();
    this.hour.set(date.getHours());
    this.ampm.set(this.hour() >= 12 ? 'PM' : 'AM');
    this.hour.set(this.hour() % 12);
    this.hour.set(this.hour() === 0 ? 12 : this.hour());
    this.minuts.set(date.getMinutes());
  }
}
