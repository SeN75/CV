import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration-shell',
  standalone: true,
  template: ` <router-outlet></router-outlet> `,
  imports: [RouterModule],
})
export class RegistrationShellComponent {}
