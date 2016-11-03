import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { METEOR_PROVIDERS } from "angular2-meteor";
import { NG2MetaService } from "ng2meta";

import { AppComponent } from "./app.component";
import { routing, components } from "./app.routes";

/**
 * Declares an NgModule. Declares all dependencies as well as which component to bootstrap.
 * @class AppModule
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    ...components
  ],
  providers: [
    METEOR_PROVIDERS,
    NG2MetaService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
