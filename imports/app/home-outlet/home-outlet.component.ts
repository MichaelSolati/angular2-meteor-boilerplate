import { Component } from "@angular/core";

/**
 * Parent route/component for Home subroutes.
 * @class HomeOutletComponent
 * @constructor
 */
@Component({
  selector: "app-home-outlet",
  template: `<router-outlet></router-outlet>`,
})
export class HomeOutletComponent {
  /**
  * @method constructor
  */
  constructor () {

  }
}
