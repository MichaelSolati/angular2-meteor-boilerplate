import { Routes }  from "@angular/router";

import { HomeOutletComponent } from "/imports/app/home-outlet/home-outlet.component";
import { HomeComponent } from "/imports/app/home/home.component";

/**
 * Routes for Home routing.
 * @property homeOutletRoutes
 * @type Routes
 */
export const homeOutletRoutes: Routes = [{
  path: "",
  component: HomeOutletComponent,
  children: [{
    path: "",
    component: HomeComponent
  }]
}];

/**
 * Array of components for Home routing.
 * @property homeOutletComponents
 * @type Array<any>
 */
export const homeOutletComponents: Array<any> = [
  HomeOutletComponent,
  HomeComponent
]
