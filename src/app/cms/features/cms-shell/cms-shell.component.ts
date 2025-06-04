import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';
import { ToolbarModule } from 'primeng/toolbar';

import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { filter, tap } from 'rxjs';
@Component({
  selector: 'app-cms-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    DrawerModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClass,
    RouterLink,
    ToolbarModule,
  ],
  template: `
    <p-drawer #drawerRef [(visible)]="visible">
      <ng-template #headless>
        <div class="flex flex-col h-full">
          <div class="flex items-center justify-between px-6 pt-4 shrink-0">
            <span class="inline-flex items-center gap-2">
              <svg
                width="31"
                height="33"
                viewBox="0 0 31 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="block mx-auto"
              >
                <!-- <path d="..." /> -->
              </svg>
              <span class="font-semibold text-2xl text-primary">Your Logo</span>
            </span>
            <span>
              <p-button
                type="button"
                (click)="closeCallback($event)"
                icon="pi pi-times"
                rounded="true"
                outlined="true"
                styleClass="h-8 w-8"
              ></p-button>
            </span>
          </div>
          <div class="overflow-y-auto">
            <ul class="list-none p-4 m-0">
              <li>
                <div
                  pRipple
                  pStyleClass="@next"
                  enterFromClass="hidden"
                  enterActiveClass="animate-slidedown"
                  leaveToClass="hidden"
                  leaveActiveClass="animate-slideup"
                  class="p-4 flex items-center justify-between text-surface-600 dark:text-surface-200 cursor-pointer p-ripple"
                ></div>
                <ul class="list-none p-0 m-0 overflow-hidden">
                  @for (item of routerList; track $index) {

                  <li>
                    <a
                      [routerLink]="item.router"
                      pRipple
                      class="flex items-center cursor-pointer p-4 capitalize rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                    >
                      <i class="pi  mr-2 {{ item.icon }}"></i>
                      <span class="font-medium">{{ item.label }}</span>
                    </a>
                  </li>
                  }
                </ul>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <hr class="mb-4 mx-4 border-t border-0 border-surface" />
            <a
              pRipple
              class="m-4 flex items-center cursor-pointer p-4 gap-2 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
            >
              <p-avatar
                image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
                shape="circle"
              />
              <span class="font-bold">Amy Elsner</span>
            </a>
          </div>
        </div>
      </ng-template>
    </p-drawer>
    <p-toolbar>
      <ng-template #start>
        <p-button (click)="visible = true" icon="pi pi-bars" />
        <div class="text-2xl ms-8 capitalize">{{ title }}</div>
      </ng-template>
    </p-toolbar>

    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class CmsShellComponent implements OnInit {
  private router = inject(Router);
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
  visible: boolean = false;
  title = 'title';
  ngOnInit() {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        tap((e: NavigationEnd) => {
          const currentUrl = e.urlAfterRedirects;
          const matchedRoute = this.routerList.find((item) => {
            return currentUrl.includes(
              item.router.join('/').replace('//', '/')
            );
          });
          this.title = matchedRoute ? matchedRoute.label : 'title';
        })
      )
      .subscribe();
  }
  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }
}
