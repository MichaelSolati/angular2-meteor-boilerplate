import "angular2-meteor-polyfills";

import { enableProdMode } from "@angular/core";
import { Meteor } from "meteor/meteor";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "/imports/app/app.module";

if (Meteor.isProduction) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
