import { Routes, RouterModule } from "@angular/router";

import { homeOutletRoutes, homeOutletComponents } from "/imports/app/home-outlet/home-outlet.routes";

/**
 * Routes for App.
 * @property appRoutes
 * @type Routes
 */
const appRoutes: Routes = [
  ...homeOutletRoutes
];

/**
 * Module that contains all the directives, the given routes, and the router service itself.
 * @property routing
 */
export const routing = RouterModule.forRoot(appRoutes);

/**
 * Array of all components of app.
 * @property components
 * @type Array<any>
 */
export const components: Array<any> = [
  ...homeOutletComponents
]
