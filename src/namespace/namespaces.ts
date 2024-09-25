namespace First {
  export class Example {
    log() {
      console.log("Logging from First.Example.log()");
    }
  }
}

namespace Second {
  export class Example {
    log() {
      console.log("Logging from Second.Example.log()");
    }
  }
}

const first = new First.Example();

// Logging from First.Example.log()
first.log();

const second = new Second.Example();

// Logging from Second.Example.log()
second.log();

// Nested and Dotted hierarchies

namespace FirstLevel {
  export namespace SecondLevel {
    export class Example {}
  }
}

namespace FirstLevel.SecondLevel.ThirdLevel {
  export class Example {}
}

const nested = new FirstLevel.SecondLevel.Example();
const dotted = new FirstLevel.SecondLevel.ThirdLevel.Example();

// Public and Private members
namespace Shipping {
  // Available as Shipping.ship
  export interface Ship {
    name: string;
    port: string;
    displacement: number;
  }

  // Available as Shipping.Ferry
  export class Ferry implements Ship {
    constructor(
      public name: string,
      public port: string,
      public displacement: number
    ) {}
  }

  // Only available inside of the Shipping module
  const defaultDisplacement = 4000;

  class PrivateShip implements Ship {
    constructor(
      public name: string,
      public port: string,
      public displacement: number = defaultDisplacement
    ) {}
  }
}

const ferry = new Shipping.Ferry("Assurance", "London", 3220);

// Import Alias

namespace Docking {
  import Ship = Shipping.Ship;

  export class Dock {
    private dockedShips: Ship[] = [];

    arrival(ship: Ship) {
      this.dockedShips.push(ship);
    }
  }
}

const dock = new Docking.Dock();

// Namespace/Class merging

class Car {}

namespace Car {
  export class Engine {}
  export class GloveBox {}
}

const car = new Car();
const engine = new Car.Engine();
const gloveBox = new Car.GloveBox();

/* 
Now you understand namespaces, refrain for a moment from implementing them because there is a
better way to organize your code. Where namespaces limit the number of items in the global scope, modules
go a step further and add nothing to the global scope. Modules also provide a solution to naming conflicts,
as each file provides a new context for identifiers. Modules also have a killer-feature: you can load them
asynchronously on demand.
*/

export {};
