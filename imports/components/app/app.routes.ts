import { Routes, RouterModule } from '@angular/router';

import { homeRoutes } from '../home/home.routes';

/**
 * Routes for App.
 * @property appRoutes
 * @type Routes
 */
const appRoutes: Routes = [
  ...homeRoutes
];

export const routing = RouterModule.forRoot(appRoutes);
