import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from '@/portfolio/ui/desktop/desktop.component';
import { ToolbarComponent } from '@/portfolio/ui/toolbar/toolbar.component';
import { DesktopAppComponent } from '@/portfolio/ui/desktop-app/desktop-app.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    DesktopComponent,
    ToolbarComponent,
    DesktopAppComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
