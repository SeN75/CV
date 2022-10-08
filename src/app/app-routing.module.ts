import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { TerminalComponent } from './components/terminal/terminal.component';

const routes: Routes = [

  {path: 'terminal', component: TerminalComponent,},
  {path: 'terminal/aboutme', component: TerminalComponent,},
  {path: 'contact', component: ContactComponent,},
  {path: 'portfolio', loadChildren: () => import('./components/portfolio/portfolio.module') .then(m => m.PortfolioModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
