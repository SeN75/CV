import { Component } from '@angular/core';
import { HelperService } from './service/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CV';
  constructor(public helperSrv: HelperService) {

  }
}
