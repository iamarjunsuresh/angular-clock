import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberdisplayComponent } from './numberdisplay/numberdisplay.component';
import { ClockComponent } from './clock/clock.component';
import { EventItemComponent } from './event-item/event-item.component';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberdisplayComponent,
    ClockComponent,
    EventItemComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
