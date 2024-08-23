# CheatSheet for JavaScript

## Input and Output Operations

```JavaScript
// Output
console.log('Hello World'); // Outputs text to the console

// Input from browser
const name = prompt('Enter your name: '); // Displays a prompt dialog
console.log(`Hello, ${name}!`); // Outputs text to the console

// Input from Node.js terminal
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
```

## Data Types

```JavaScript
let str = 'Hello World'; // string
let num = 3.14159; // number
let arr = [1, 2, 3, 4, 5]; // array
let obj = { a: 1, b: 2, c: 3 }; // object
let bool = true; // boolean
let nullVal = null; // null
let undefinedVal = undefined; // undefined
let symbol = Symbol('description'); // symbol
let bigInt = 1234567890123456789012345678901234567890n; // BigInt
```

## String Methods

```JavaScript
let str = 'Hello World';

// Basic methods
str.length; // Output: 11
str.charAt(index); // Output: character at index
str.indexOf('World'); // Output: 6
str.lastIndexOf('o'); // Output: 7
str.includes('World'); // Output: true
str.startsWith('Hello'); // Output: true
str.endsWith('World'); // Output: true

// Manipulation methods
str.toUpperCase(); // Output: 'HELLO WORLD'
str.toLowerCase(); // Output: 'hello world'
str.trim(); // Output: 'Hello World' (removes whitespace from both ends)
str.replace('World', 'Everyone'); // Output: 'Hello Everyone'
str.slice(0, 5); // Output: 'Hello'
str.substring(0, 5); // Output: 'Hello'
str.split(' '); // Output: ['Hello', 'World']
str.concat('!!!'); // Output: 'Hello World!!!'
str.padStart(20, '*'); // Output: '****Hello World'
str.padEnd(20, '*'); // Output: 'Hello World*****'

// Additional methods
str.match(/o/g); // Output: ['o', 'o'] (find all matches)
str.normalize(); // Output: 'Hello World' (normalizes Unicode string)
```

## Number Methods

```JavaScript
let num = 3.14159;

// Conversion and manipulation
num.toFixed(2); // Output: '3.14'
num.toExponential(2); // Output: '3.14e+0'
num.toPrecision(4); // Output: '3.142'

// Math methods
Math.round(num); // Output: 3
Math.floor(num); // Output: 3
Math.ceil(num); // Output: 4
Math.abs(-num); // Output: 3.14159
Math.max(1, 2, 3); // Output: 3
Math.min(1, 2, 3); // Output: 1
Math.random(); // Output: Random number between 0 and 1
Math.sqrt(16); // Output: 4
Math.pow(2, 3); // Output: 8
Math.log(10); // Output: 2.302
Math.trunc(3.14159); // Output: 3

// Additional methods
Math.cbrt(27); // Output: 3 (cube root)
Math.imul(2, 3); // Output: 6 (fast multiplication)
Math.sign(-5); // Output: -1 (sign of number)
```

## Array Methods

```JavaScript
let arr = [1, 2, 3, 4, 5];

// Accessing elements
arr.length; // Output: 5
arr[0]; // Output: 1

// Iteration methods
arr.forEach(item => console.log(item)); // Output: 1 2 3 4 5

// Transformation methods
arr.map(x => x * 2); // Output: [2, 4, 6, 8, 10]
arr.filter(x => x > 3); // Output: [4, 5]
arr.reduce((acc, curr) => acc + curr, 0); // Output: 15

// Sorting and reversing
arr.sort((a, b) => a - b); // Output: [1, 2, 3, 4, 5]
arr.reverse(); // Output: [5, 4, 3, 2, 1]

// Utility methods
arr.push(6); // Output: [1, 2, 3, 4, 5, 6]
arr.pop(); // Output: [1, 2, 3, 4, 5]
arr.shift(); // Output: [2, 3, 4, 5]
arr.unshift(0); // Output: [0, 2, 3, 4, 5]
arr.splice(2, 1, 10); // Output: [0, 2, 10, 4, 5] (removes 1 element at index 2 and adds 10)
arr.slice(1, 4); // Output: [2, 10, 4]
arr.flat(); // Output: Flattens nested arrays (if applicable)
arr.find(x => x > 3); // Output: 4
arr.findIndex(x => x > 3); // Output: 3
arr.some(x => x > 3); // Output: true
arr.every(x => x > 0); // Output: true
arr.sort((a, b) => b - a); // Output: [5, 4, 3, 2, 1] (descending sort)
arr.copyWithin(0, 2, 4); // Output: [3, 4, 3, 4, 5] (shallow copy within array)
```

## Object Methods

```JavaScript
let obj = { a: 1, b: 2, c: 3 };

// Accessing properties
obj.a; // Output: 1
obj['b']; // Output: 2

// Property manipulation
obj.hasOwnProperty('a'); // Output: true
Object.keys(obj); // Output: ['a', 'b', 'c']
Object.values(obj); // Output: [1, 2, 3]
Object.entries(obj); // Output: [['a', 1], ['b', 2], ['c', 3]]

// Object manipulation
Object.assign({}, obj, { d: 4 }); // Output: { a: 1, b: 2, c: 3, d: 4 }
delete obj.a; // Removes property 'a'
Object.freeze(obj); // Prevents modification
Object.seal(obj); // Prevents adding/removing properties, but allows modification
Object.isFrozen(obj); // Output: true
Object.isSealed(obj); // Output: true

// Additional methods
Object.getPrototypeOf(obj); // Output: Prototype of obj
Object.setPrototypeOf(obj, {}); // Set a new prototype
```

## Function Syntax

```JavaScript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log('This is an IIFE');
})();

// Default parameters
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Spread syntax
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5]; // Output: [1, 2, 3, 4, 5]

// Closures
function makeCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}
const counter = makeCounter();
counter(); // Output: 1
counter(); // Output: 2
```

## ES6+ Features

```JavaScript
// Destructuring
const { a, b } = { a: 1, b: 2, c: 3 }; // Output: a = 1, b = 2
const [x, y] = [1, 2, 3]; // Output: x = 1, y = 2

// Template literals
const name = 'World';
const greeting = `Hello, ${name}!`; // Output: 'Hello, World!'

// Classes
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, ${this.name}!`;
    }
}
const p = new Person('John');
p.greet(); // Output: 'Hello, John!'

// Promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done!'), 1000);
});
promise

.then(result => console.log(result)); // Output: 'Done!'

// Async/Await
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

// Modules
// Importing
import { myFunction } from './myModule.js';
// Exporting
export const myFunction = () => { ... };

// Optional Chaining
const obj = { a: { b: { c: 1 } } };
const value = obj.a?.b?.c; // Output: 1
const missingValue = obj.a?.x?.c; // Output: undefined

// Nullish Coalescing Operator
const foo = null ?? 'default'; // Output: 'default'
const bar = 0 ?? 42; // Output: 0
```

## Regular Expressions

```JavaScript
const regex = /hello/i; // Case-insensitive match
const str = 'Hello world!';

// Test for a match
regex.test(str); // Output: true

// Match the string
str.match(regex); // Output: ['Hello']

// Replace text
str.replace(regex, 'hi'); // Output: 'hi world!'

// Split string
'one,two,three'.split(/,/); // Output: ['one', 'two', 'three']

// Additional methods
const match = str.match(/(\w+)/); // Output: ['Hello', 'Hello']
const matches = str.matchAll(/\w+/g); // Output: Iterator of all matches
```

## Error Handling

```JavaScript
try {
    // Code that may throw an error
    throw new Error('Something went wrong');
} catch (error) {
    console.error(error.message); // Output: 'Something went wrong'
} finally {
    console.log('This will always execute');
}

// Custom errors
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}
throw new CustomError('This is a custom error');
```
