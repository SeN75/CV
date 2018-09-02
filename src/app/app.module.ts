import { BrowserModule } from '@angular/platform-browser';
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
import { SkilsComponent } from './skils/skils.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
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
    SkilsComponent
    ],
  imports: [
    BrowserModule,
    MatTabsModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
