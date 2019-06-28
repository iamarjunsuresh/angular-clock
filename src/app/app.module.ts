import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberdisplayComponent } from './numberdisplay/numberdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberdisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
