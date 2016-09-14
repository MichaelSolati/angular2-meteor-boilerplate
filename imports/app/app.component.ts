"use strict";

import { Component } from "@angular/core";

/**
* Our main App component.
* @class AppComponent
* @constructor
*/
@Component({
  selector: "app",
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  /**
  * @method constructor
  */
  constructor () {

  }
}
