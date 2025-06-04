import { Component, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-cms',
  imports: [
    DrawerModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClass,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './cms.component.html',
  styleUrl: './cms.component.scss',
})
export class CmsComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  routerList = [
    {
      label: 'contents',
      icon: 'pi-database ',
      router: ['/', 'cms', 'contents'],
    },
    {
      label: 'resumes',
      icon: 'pi-file-word',
      router: ['/', 'cms', 'resumes'],
    },
  ];

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }

  visible: boolean = false;
}
