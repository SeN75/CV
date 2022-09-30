import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopIconComponent } from './components/desktop-icon/desktop-icon.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ButtonComponent } from './components/button/button.component';
import { ThetitlesComponent } from './components/thetitles/thetitles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowsComponent } from './components/windows/windows.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopIconComponent,
    ToolbarComponent,
    ButtonComponent,
    ThetitlesComponent,
    WindowsComponent,
    TerminalComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
