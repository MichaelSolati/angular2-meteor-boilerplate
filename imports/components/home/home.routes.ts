import { Routes }  from '@angular/router';

import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';

/**
 * Routes for Home parent component.
 * @property homeRoutes
 * @type Routes
 */
export const homeRoutes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    component: IndexComponent
  }]
}];
