import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ContentComponent } from './content/content.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faTwitter , faGithub , faFacebookSquare , faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { RouterModule, Router } from '@angular/router';
import { SkilsComponent } from './skils/skils.component';
import { FormsModule } from '@angular/forms';
import { AboutmeComponent } from './content/aboutme/aboutme.component';
import { ExperiencesComponent } from './content/experiences/experiences.component';
import { SkilssComponent } from './content/skilss/skilss.component';
library.add(
          fas,
          far,
          faCalendar,
          faCoffee,
          faTwitterSquare,
          faInstagram,
          faFacebookSquare,
          faGithub
        );


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialMediaComponent,
    ContentComponent,
    SkilsComponent,
    AboutmeComponent,
    ExperiencesComponent,
    SkilssComponent
    ],
  imports: [
    BrowserModule,
    MatTabsModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'about-me', component: AboutmeComponent },
      { path: 'experiences', component: ExperiencesComponent },
      { path: 'skils', component: SkilssComponent },
      { path: '', component: AboutmeComponent },

    ]),
    BrowserAnimationsModule
  ],
  providers: [NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
