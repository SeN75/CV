import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProjectComponent } from './components/project/project.component';
import { ProjectPicsComponent } from './components/project-pics/project-pics.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PortfolioComponent,
    ProjectComponent,
    ProjectPicsComponent,

  ],
  imports: [
    CommonModule,
    DragDropModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: PortfolioComponent, children: [
        {path: '', component: ProjectComponent},
        {path: ':project', component: ProjectPicsComponent},
      ]}

    ]),
  ],
})
export class PortfolioModule { }
