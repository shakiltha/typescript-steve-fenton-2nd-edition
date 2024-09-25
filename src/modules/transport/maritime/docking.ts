// Import entire module
// import * as Shipping from "./shipping";
// import { Ship } from "./shipping";
import { Ship as Boat } from "./shipping";

export class Dock {
  private dockedShips: Boat[] = [];

  arrival(ship: Boat) {
    this.dockedShips.push(ship);
  }
}
