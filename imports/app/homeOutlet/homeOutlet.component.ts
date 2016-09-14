"use strict";

import { Component } from "@angular/core";

/**
 * Parent route/component for Home subroutes.
 * @class HomeOutlet
 * @constructor
 */
@Component({
  selector: "home-outlet",
  template: `<router-outlet></router-outlet>`,
})
export class HomeOutlet {
  /**
  * @method constructor
  */
  constructor () {

  }
}
