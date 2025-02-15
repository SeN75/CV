import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration-shell',
  template: ` <router-outlet></router-outlet> `,
  imports: [RouterModule],
})
export class RegistrationShellComponent {}
