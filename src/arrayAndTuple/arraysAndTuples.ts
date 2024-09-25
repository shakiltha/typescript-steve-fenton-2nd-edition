// ARRAYS

interface Monument {
  name: string;
  heightInMeters: number;
}

// The array is typed using the Monument interface

const monuments: Monument[] = [];

// Each item added to the array is checked for type compatibility
monuments.push({
  name: "Statue of Liberty",
  heightInMeters: 46,
});

monuments.push({
  name: "Peter the great",
  heightInMeters: 89,
});

monuments.push({
  name: "Angel of the North",
  heightInMeters: 20,
});

function compareMonumentHeights(a: Monument, b: Monument) {
  if (a.heightInMeters > b.heightInMeters) {
    return -1;
  }
  if (a.heightInMeters < b.heightInMeters) {
    return 1;
  }
  return 0;
}

// The array.sort method expects a comparer that accepts two Monuments
const monumentsOrderedByHeight = monuments.sort(compareMonumentHeights);

// get the first element from the array, which is the tallest
const tallestMonument = monumentsOrderedByHeight[0];

// peter the great
console.log(tallestMonument.name);

// ======================================

// tuples

// tuple types
let poem: [number, boolean, string];

// OK
poem = [1, true, "love"];

// Error: 'string' is not assignable to 'number';
poem = ["my", true, "love"];

poem[2]; //.autocompletion members for tuple types

export {};
