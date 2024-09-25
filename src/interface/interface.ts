// Interfaces

interface Point {
  // Properties
  x: number;
  y: number;
}

interface Passenger {
  // Properties
  name: string;
}

interface Vehicle {
  // Constructor
  new (): Vehicle;

  // Properties
  currentLocation: Point;

  // Methods
  travelTo(point: Point): void;
  addPassenger(passenger: Passenger): void;
  removePassenger(passenger: Passenger): void;
}

// Extending the NodeList interface

interface NodeList {
  onClick: (event: MouseEvent) => any;
}

const nodeList = document.getElementsByTagName("div");
nodeList.onclick = function (event: MouseEvent) {
  alert("Clicked");
};

// Hybrid types
interface SimpleDocument {
  (selector: string): HTMLElement;
  notify(message: string): void;
}

// Implementation
const prepareDocument = function (): SimpleDocument {
  let doc = <SimpleDocument>function (selector: string) {
    return document.getElementById(selector);
  };
  doc.notify = function (message: string) {
    alert(message);
  };
  return doc;
};

const $ = prepareDocument();

// Call $ as a function
const elem = $("myId");

// Use $ as an object
$.notify(elem.id);
