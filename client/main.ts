import "reflect-metadata";
import "rxjs";
import "zone.js/dist/zone";
import "zone.js/dist/long-stack-trace-zone";
import { enableProdMode } from "@angular/core";
import { Meteor } from "meteor/meteor";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "/imports/app/app.module";

if (Meteor.isProduction) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
