import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MeteorModule } from 'angular2-meteor';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

import { HomeComponent } from '/imports/components/home/home.component';
import { IndexComponent } from '/imports/components/home/index/index.component';

/**
 * Declares an NgModule. Declares all dependencies as well as which component to bootstrap.
 * @class AppModule
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MeteorModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
