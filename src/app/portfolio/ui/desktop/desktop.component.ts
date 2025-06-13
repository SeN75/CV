import { Component, input } from '@angular/core';

@Component({
  selector: 'app-desktop',
  imports: [],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {
  title = input<string>('Dev');
}
