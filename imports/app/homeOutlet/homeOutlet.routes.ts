import { Routes }  from "@angular/router";

import { HomeOutlet } from "/imports/app/homeOutlet/homeOutlet.component";
import { Home } from "/imports/app/home/home.component";

/**
 * Routes for Home parent component.
 * @property homeOutletRoutes
 * @type Routes
 */
export const homeOutletRoutes: Routes = [{
  path: "",
  component: HomeOutlet,
  children: [{
    path: "",
    component: Home
  }]
}];
