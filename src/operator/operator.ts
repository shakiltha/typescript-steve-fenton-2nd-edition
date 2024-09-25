/**
 * incrementing and decrementing operators (line: 5)
 * binary operators (line: 39)
 * not operator (line: 61)
 * and operator (line: 100)
 * conditional (line: 158)
 * array spreading (line: 184)
 * object spreading (line: 196)
 * spread operator in function call (line: 226)
 */

// INCREMENTING AN DECREMENTING OPERATORS

let counter = 0;

do {
  ++counter;
} while (counter < 10);

alert(counter);

// increment and decrement of enumerations

enum Size {
  S,
  M,
  L,
  XL,
}

// let size = Size.S;
// ++size;
// console.log(Size[size]); // M

// let size = Size.M;
// --size;
// console.log(Size[size]); // L

let size = Size.XL;
++size;
console.log(Size[size]); // undefined

// ===============================================================

// BINARY OPERATORS

// Binary plus operators

// 6: number
// const num = 5 + 1;

// '51': string
// const str = 5 + '1';

// Unary plus and minus operators
const str: string = "5";

// 5: number
const num = +str;

// -5: number
const negative = -str;

// =============================================================

// NOT OPERATORS
const truthyString = "Truthy string";
let falseyString: string;

// False, it checks the string but inverts the truth
const invertedTest = !truthyString;

// False, the string is empty
const falseyTest = !!falseyString;

// Falsey values
/**
 * undefined
 * null
 * false: boolean
 * "": string(empty string)
 * 0: number
 * NaN(the javascript NotaNumber value)
 */
// All other values are evaluated as true. Surprising examples of this include:
/**
 * '0': string
 * 'False': string
 */

// Short hand boolean test
let myProperty;
if (myProperty) {
  // Reaching this location means that....
  // myProperty is not null
  // myProperty is not undefined
  // myProperty is not boolean false
  // myProperty is not an empty string
  // myProperty is not the number 0
  // myProperty is not NaN
}

// ==========================================

// AND OPERATOR

// longhand
if (console) {
  console.log("Console Available");
}

// shorthand
console && console.log("Console Available");

const player1 = "Martin";

// player2 is only defined if player1 is defined
const player2 = player1 && "Dan";

// 'Dan'
alert(player2);

// =================================================

// OR OPERATOR

// Empty strings are falsey
let errorMessages = "";

// result is 'Saved OK'
let result = errorMessages || "Saved OK";

// Filled strings are truthy
errorMessages = "Error Detected";

// rest is 'Error Detected'
result = errorMessages || "Saved OK";

let undefinedLogger;

// if the logger isn't initialized, substitute it for the result of the right-hand expression

const logger = undefinedLogger || {
  log: function (msg: string) {
    alert(msg);
  },
};

// alerts 'Message'
logger.log("Message");

// Short-circuit evaluation

interface Caravan {
  rooms: number;
}

let caravan: Caravan;

if (caravan && caravan.rooms > 5) {
  // ......
}

// ===================================================

// CONDITIONAL OPERATOR

// The if statement
const isValid = true;
let message: string;

// Long-hand equivalent
if (isValid) {
  message = "Okay";
} else {
  message = "Failed";
}

// conditional operator
const isValid1 = true;
const message1 = isValid ? "Okay" : "Failed";

// =================================================

// SPREAD OPERATOR

// array spreading

const squares = [1, 4, 9, 16, 25];
const powers = [2, 4, 8, 16, 32];

// Array spreading

const squaresAndPowers = [...squares, ...powers];

// [1, 4, 9, 16, 25, 2, 4, 8, 16, 32]
console.log(squaresAndPowers);

// object spreading

interface EmergencyService {
  police: string;
  fire: string;
}

interface UtilityService {
  recycling: string;
  construction: string;
}

const emergencyService: EmergencyService = {
  police: "Chase",
  fire: "Marshal",
};

const utilityService: UtilityService = {
  recycling: "Rocky",
  construction: "Rubble",
};

const patrol = { ...emergencyService, ...utilityService };

// {police: 'Chase', fire: 'Marshall', recycling: 'Rocky', construction: 'Rubble'}
console.log(patrol);

// spread operator in function call

function add(...numbers: number[]) {
  return numbers.reduce((prev, curr) => prev + curr, 0);
}

const hexagons = [1, 6, 15];
const result1 = add(...hexagons);

// 22
console.log(result1);
