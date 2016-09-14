import { Routes, RouterModule } from "@angular/router";

import { homeOutletRoutes } from "/imports/app/homeOutlet/homeOutlet.routes";

/**
 * Routes for App.
 * @property appRoutes
 * @type Routes
 */
const appRoutes: Routes = [
  ...homeOutletRoutes
];

export const routing = RouterModule.forRoot(appRoutes);
