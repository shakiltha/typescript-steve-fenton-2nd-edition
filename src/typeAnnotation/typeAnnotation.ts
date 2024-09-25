// explicit type annotation
// const name: string = 'Steve';

// primitive type annotation
const name: string = "Steve";
const heightInCentimeters: number = 182.88;
const isActive: boolean = true;

// array type annotation
const names: string[] = ["James", "Nick", "Rebecca", "Lily"];

// function annotation with parameter type annotation and return type annotation
let sayHello: (name: string) => string;

// implementation of sayHello function
sayHello = function (name) {
  return "Hello " + name;
};

// object type annotation
let person: {
  name: string;
  heightInCentimeters: number;
};

// Implementation of person object
person = {
  name: "Mark",
  heightInCentimeters: 293,
};

// Interface and type alias

// Interface
interface PersonInterface {
  name: string;
  heightInCentimeters: number;
}

const sherlock: PersonInterface = {
  name: "Bendict",
  heightInCentimeters: 183,
};

// Type aliases
type PersonType = {
  name: string;
  heightInCentimeters: number;
};

const john: PersonType = {
  name: "Martin",
  heightInCentimeters: 169,
};

// ==========================================

export {};
