/**
 * union types (line - 10)
 * literal types (line - 28)
 * intersection types (line - 71)
 * dictionary types (line - 89)
 * mapped types (line - 120)
 * type assertions (line - 201)
 * type guards (line - 237)
 * discriminated unions (line - 295)
 */

// UNION TYPES

// type annotation for a union type
let union: boolean | number;

// OK: number
union = 5;
// OK: boolean
union = true;

// Error: Type "string" is not assignable to type 'number | boolean'
union = "string";

// Type alias for a union type
type StringOrError = string | Error;
// Type alias for union of many types
type SeriesOfTypes = string | number | boolean | Error;

// LITERAL TYPES

// string literal types
type Kingdom =
  | "Bacteria"
  | "Protoza"
  | "Chromista"
  | "Plantae"
  | "Fungi"
  | "Animalia";

let kingdom: Kingdom;
// OK
kingdom = "Bacteria";

// Error Type 'Protista' is not assignable to type 'Kingdom'
kingdom = "Protista";

// number literal type
type Fibonacci = 1 | 2 | 3 | 5 | 8 | 13;
let num: Fibonacci;

// OK
num = 8;

// Error: Type '9' is not assignable to type 'Fibonacci'
num = 9;

// hybrid union/literal type
type Randoms = "Text" | 10 | false;

let random: Randoms;

// OK
random = "Text";
random = 10;
random = false;

// Error: Not assignable.
random = "Other string";
random = 12;
random = true;

// INTERSECTION TYPES

interface Skier {
  slide(): void;
}

interface Shooter {
  shoot(): void;
}

type Biathelete = Skier & Shooter;

let biathelete: Biathelete = null;

// biathelete. //shoot() / slide()

// =====================================================

// DICTIONARY TYPES

interface Cephalopod {
  hasInk: boolean;
  arms: number;
  tentacles: number;
}

interface CephalopodDictionary {
  [index: string]: Cephalopod;
}

let dictionary: CephalopodDictionary = {};
dictionary["octopus vulgaris"] = { hasInk: true, arms: 8, tentacles: 0 };
dictionary["loligo vulgaris"] = { hasInk: true, arms: 8, tentacles: 2 };

// Error. mission properties
dictionary[0] = { hasInk: true };

const octopus = dictionary["octopus vulgaris"];

// 0 (The common octopus has tentacles)
console.log(octopus.tentacles);

// Remove item

delete dictionary["octopus vulgaris"];

// ====================================================

// MAPPED TYPES

// manual type variations

// interface Options {
//     material: string;
//     backlight: boolean;
// }

// Manually created readonly interface
interface ManualReadonlyOptions {
  readonly material: string;
  readonly backlight: boolean;
}

// Manually created optional interface
interface ManualOptionalOptions {
  material?: string;
  backlight?: string;
}

// Manually created nullable interface
interface ManualNullableOptions {
  material: string | null;
  backlight: string | null;
}

/**
 * The alternative to all this repetition is shown in Listing 1-23. Three reusable types are created that can
be used to generate read-only, optional, or nullable type variations with a single line of code. The three
named types create these variations of the options interface.
*/

// mapped types
interface Options {
  material: string;
  backlight: boolean;
}

// mapped types
type ReadOnly<T> = {
  readonly [k in keyof T]: T[k];
};
type Optional<T> = {
  [k in keyof T]?: T[k];
};
type Nullable<T> = {
  [k in keyof T]: T[k] | null;
};

// creating new types from mapped types

type ReadOnlyOptions = ReadOnly<Options>;
type OptionalOptions = Optional<Options>;
type NullableOptions = Nullable<Options>;

// Read-only type

const options1: ReadOnlyOptions = {
  backlight: true,
  material: "plastic",
};

// Error. property is read-only
options1.backlight = false;

// Optional type
const options2: OptionalOptions = {
  // All members are optional
};

// Nullable type
const options3: NullableOptions = {
  backlight: null,
  material: null,
};

// ==================================================

// TYPE ASSERTIONS

interface House {
  bedrooms: number;
  bathrooms: number;
}

interface Mansion {
  bedrooms: number;
  bathrooms: number;
  butlers: number;
}

function getProperty(): House | Mansion {
  // .....
}

const property = getProperty();

// OK as the property is on both House and Mansion
// const bedroomCount = property.bedrooms;

// Errors: Property 'butlers' does not exist on type 'House | Mansion'
const butlderCount = property.butlers;

// OK with type assertion
// const workingButlerCount = (<Mansion>property).butlers;

// Forced type assertions
const name: string = "Avenue Road";

// Error: Type 'string' cannot be converted to type 'number'
const bedroomCount: number = <number>name;

// Works
const workingBedRoomCount: number = <number>(<any>name);

// ======================================================================

// TYPE GUARDS

function typeGuardExample(stringNumber: string | number) {
  // Error: Property does not exist
  const a = stringNumber.length;
  const b = stringNumber.toFixed();

  // Type guard
  if (typeof stringNumber === "string") {
    // OK
    return stringNumber.length;
  } else {
    // OK
    return stringNumber.toFixed();
  }
}

// custom type guard
interface SpeedControllable {
  increaseSpeed(): void;
  decreaseSpeed(): void;
  stop(): void;
}

interface inclineControllable {
  lift(): void;
  drop(): void;
}

function isSpeedControllable(
  treadmill: SpeedControllable | any
): treadmill is SpeedControllable {
  if (treadmill.increaseSpeed && treadmill.decreaseSpeed && treadmill.stop) {
    return true;
  }
  return false;
}

function customTypeGuardExample(
  treadmill: SpeedControllable | inclineControllable
) {
  // Error: Property does not exist
  const a = treadmill.increaseSpeed();
  const b = treadmill.lift();

  // type guard
  if (isSpeedControllable(treadmill)) {
    // OK
    treadmill.increaseSpeed();
  } else {
    // OK
    treadmill.lift();
  }
}

// ==============================================================

// DISCRIMINATED UNIONS

interface Cube {
  kind: "cube"; // Discriminant
  size: number;
}

interface Cuboid {
  kind: "cuboid";
  width: number;
  depth: number;
  height: number;
}

// Union
type Prism = Cube | Cuboid;

function volume(prism: Prism): number {
  // Type guard
  switch (prism.kind) {
    case "cube":
      return prism.size * prism.size * prism.size;
    case "cuboid":
      return prism.width * prism.depth * prism.height;
    default:
      assertNever(prism);
      break;
  }
}

function assertNever(arg: never): never {
  throw new Error("Possible new tagged type: " + arg);
}

export {};
