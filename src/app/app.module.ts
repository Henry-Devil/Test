import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./AppComponent"
import { HomePageComponent } from './home-page/home-page.component';
import { AboutsPageComponent } from './abouts-page/abouts-page.component';
import { ContactusPageComponent } from './contactus-page/contactus-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutsPageComponent,
    ContactusPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
