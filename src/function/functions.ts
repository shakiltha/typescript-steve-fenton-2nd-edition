/*
 * function type annotation (line: 5)
 * optional parameters (line: 18)
 * default parameters (line: 40)
 * rest parameters (line: 63)
 * overloads (line: 82)
 */

// FUNCTION TYPE ANNOTATIONS

function getAverage(a: number, b: number, c:number): string {
    const total = a + b + c;
    const average = total / 3;
    return 'The average is ' + average;
}

const result = getAverage(4, 3, 8); // 'The average is 5'


// OPTIONAL PARAMETERS

function getAverage1(a: number, b: number, c?: number): string {
    let total = a;
    let count = 1;

    total += b;
    count++;

    if (typeof c !== 'undefined') {
        total += c;
        count++;
    }

    const average = total / count;
    return 'The average is ' + average;
}

// 'The average is 5'
const result1 = getAverage1(4, 6);


// DEFAULT PARAMETERS

function concatenate(item: string[], separator = ",", beginAt = 0, endAt = items.length) {
    let result = "";

    for (let i = beginAt; i < endAt; i++) {
        result += items[i];
        if (i < (endAt - 1)) {
            result += separator;
        }
    }
    return result;
}

const items = ['A', 'B', 'C'];

// ['A', 'B', 'C']
const result2 = concatenate(items);
// 'B-C'
const partialResult = concatenate(items, '-', 1)


// REST PARAMETERS

function getAverage3(...a: number[]): string {
    let total = 0;
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }

    const average = total / count;
    return 'The average is ' + average;
}

// 'The average is 6'
const result3 = getAverage3(2, 4, 6, 8, 10);


// OVERLOADS

function getAverage4(a: string, b: string, c: string): string;
function getAverage4(a: number, b: number, c: number): string;
// implementation signature
function getAverage4(a: any, b: any, c: any): string {
    const total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
    const average3 = total / 3;
    return 'The average is ' + average3;
}

// The average is 5
const result4 = getAverage4(4, 3, 8);

// specialized overload signatures

class HandlerFactory {
    getHandler(type: 'Random'): RandomHandler;
    getHandler(type: 'Reversed'): ReversedHandler;
    getHandler(type: string): Handler; // non-specialized signature
    getHandler(type: string): HandlerFactory; { // implementation signature
        switch (type) {
            case 'Random':
                return new RandomHandler();
            case 'Reversed':
                return new ReversedHandler();
            default:
                return new Handler();
        }
    } 
}

// Arrow Functions

const shortAddNumbers = (a: number, b: number) => a + b;
const mediumAddNumbers = (a: number, b: number) => {
    return a + b;
}
const longAddNumbers = function (a: number, b: number) {
    return a + b;
}

// Wrapping an object in parentheses

const makeName = (f: string, l: string) => ({first: f, last: l});

// Preserving scope with arrow syntax
const scopeLosingExample = {
    text: "Property from lexical scope",
    run: function() {
        setTimeout(function () {
            alert(this.text);
        }, 1000);
    }
}

// alerts undefined
scopeLosingExample.run();

const scopePreservingExample = {
    text: 'Property from lexical scope',
    run() {
        setTimeout(() => {
            alert(this.text);
        }, 1000);
    }
};

// alerts "Property from lexical scope"
scopePreservingExample.run();


// Function currying
// currying with arrow functions
const multiply = (a: number) => (b: number) => a * b;

// pass both arguments in sequence: 30
const numA = multiply(5)(6)

// pass just the first argument and re-use
const orderOfMagnitude = multiply(10);

// 10
const deca = orderOfMagnitude(1);

// 100
const hecta = orderOfMagnitude(deca);

// 1000
const kilo = orderOfMagnitude(hecta);

// Currying with function overloads

function multiply1(a: number): (b: number) => number;
function multiply1(a: number, b: number): number;
function multiply1(a: number, b: number = null) {
    if (b === null) {
        return (b: number) => a * b;
    }
    return a * b;
}

// Pass both arguments 'normally': 30
const numA1 = multiply(5, 6);

// Pass just the first argument and re-use
const orderOfMagnitude1 = multiply1(10);

// 10
const deca1 = orderOfMagnitude1(1);

// 100
const hecta1 = orderOfMagnitude1(deca1);

// 1,000
const kilo1 = orderOfMagnitude1(hecta1)

// Practical currying

const log = (source: string) => (message: string) => console.log(source, message);

const customLog = log('Custom Log:');

// Custom Log: Message One
customLog('Message One');

// Custom Log: Message Two
customLog('Message Two');








export {}