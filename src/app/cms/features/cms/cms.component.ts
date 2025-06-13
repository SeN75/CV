import { Component, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-cms',
  standalone: true,
  imports: [DrawerModule, ButtonModule, RippleModule, AvatarModule],
  templateUrl: './cms.component.html',
  styleUrl: './cms.component.scss',
})
export class CmsComponent {}
