/**
 * array destructuring (line: 5)
 * object structuring (line: 45)
 * tuples and destructuring (line: 112)
 */

// ARRAY DESTRUCTURING

const triangles = [1, 2, 6, 10, 15, 21];
const [first, second] = triangles;

// 1
console.log(first);

// 3
console.log(second);

// Array destructuring with a rest argument
const triangles1 = [1, 2, 6, 10, 15, 21];

const [first1, second2, ...remaining] = triangles1;

// 1
console.log(first1);

// 3
console.log(second);

// [6, 10, 15, 21]
console.log(remaining);

// Skipping items
const triangles2 = [1, 2, 6, 10, 15, 21];

// skipping third item
const [first2, second3, , fourth] = triangles2;

// 1
console.log(first2);
// 3
console.log(second3);
// [10]
console.log(fourth);

// ======================================================

// OBJECT DESTRUCTURING

// const highSchool = {school: 'Central High', team: 'Centaurs'};
// const {school: s, team: t} = highSchool;

// 'Central High'
// console.log(s);

// 'Centaurs'
// console.log(t);

// auto-unpacking
interface Institution {
  school1: string;
  team1: string;
}

const highSchool1: Institution = { school1: "school1", team1: "team1" };

const { school1, team1 } = highSchool1;
// 'school1'
console.log(school1);
// 'team1'
console.log(team1);

// Object destructuring with rest parameter

interface Pet {
  cat: string;
  dog: string;
  hamster: string;
}

const pets: Pet = { cat: "Pickle", dog: "Berkley", hamster: "Hammy" };

const { dog, ...others } = pets;

// 'Berkley'
console.log(dog);

// Object {cat: 'Pickle', hamster: 'Hammy'}
console.log(others);

// undefined result

const triangles3: number[] = [1, 3, 6];

// Destructuring past available values
const [first4, second4, third4, fourth4] = triangles3;

// undefined
console.log(fourth4);

// default values

const triangles4: number[] = [1, 3, 6];

// Destructuring past available values
const [first5, second5, third5 = -1, fourth5 = -5] = triangles4;

// 6
console.log(third5);

// =================================================================

// TUPLES AND DESTRUCTURING

// returning a tuple

function getThreeLandmarks(): [string, string, string] {
  return ["Golden Gate Bridge", "Palace of Westminster", "Colosseum"];
}

// Destructuring the tuple into named variables
const [sanFransisco, london, rome] = getThreeLandmarks();
