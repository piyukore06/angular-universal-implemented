import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementsComponent } from './elements/elements.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent
  ],
  imports: [
    // making it compatible with universal
    // my-app is unique identifier on the page
    BrowserModule.withServerTransition({appId: 'my-app'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
