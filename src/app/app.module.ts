import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackScrollerDirective } from '../directive/track-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    TrackScrollerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [ TrackScrollerDirective ],
  bootstrap: [AppComponent]
})
export class AppModule { }
