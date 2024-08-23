# CheatSheet for TypeScript

## Basic Types

```typescript
let str: string = "Hello World"; // String
let num: number = 3.14159; // Number
let bool: boolean = true; // Boolean
let arr: number[] = [1, 2, 3, 4, 5]; // Array of numbers
let tuple: [string, number] = ["Hello", 42]; // Tuple
let obj: { a: number; b: string } = { a: 1, b: "Hello" }; // Object
let anyType: any = "Can be any type"; // Any type
let nullVal: null = null; // Null
let undefinedVal: undefined = undefined; // Undefined
```

## Functions

```typescript
// Function declaration
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Function expression
const add = function (a: number, b: number): number {
  return a + b;
};

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Function with default parameters
function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

// Function with rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
```

## Interfaces

```typescript
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John Doe",
  age: 30,
};

// Optional properties
interface Address {
  street?: string;
  city: string;
}

const address: Address = {
  city: "New York",
};

// Readonly properties
interface ReadonlyPerson {
  readonly id: number;
  name: string;
}

const readonlyPerson: ReadonlyPerson = {
  id: 1,
  name: "Jane Doe",
};

// The following line would cause an error because `id` is readonly:
// readonlyPerson.id = 2;
```

## Classes

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const person = new Person("John", 30);
console.log(person.greet()); // Output: 'Hello, my name is John'

// Inheritance
class Employee extends Person {
  position: string;

  constructor(name: string, age: number, position: string) {
    super(name, age);
    this.position = position;
  }

  describe(): string {
    return `${this.name} is a ${this.position}`;
  }
}

const employee = new Employee("Jane", 25, "Developer");
console.log(employee.describe()); // Output: 'Jane is a Developer'
```

## Generics

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const num = identity(42); // Output: 42
const str = identity("Hello"); // Output: 'Hello'

interface GenericPair<T> {
  first: T;
  second: T;
}

const pair: GenericPair<number> = { first: 1, second: 2 };
```

## Enums

```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const move: Direction = Direction.Up; // Output: 'UP'

function movePlayer(direction: Direction) {
  console.log(`Moving ${direction}`);
}

movePlayer(Direction.Left); // Output: 'Moving LEFT'
```

## Type Assertions

```typescript
let someValue: any = "Hello, World!";
let strLength: number = (someValue as string).length; // Type assertion using 'as'
let strLengthAlt: number = (<string>someValue).length; // Alternative syntax

console.log(strLength); // Output: 13
```

## Type Guards

```typescript
function isString(value: any): value is string {
  return typeof value === "string";
}

const example: any = "TypeScript";

if (isString(example)) {
  console.log(example.toUpperCase()); // Output: 'TYPESCRIPT'
}
```

## Modules

```typescript
// module.ts
export const PI = 3.14159;

export function circleArea(radius: number): number {
  return PI * radius * radius;
}

// main.ts
import { PI, circleArea } from "./module";

console.log(PI); // Output: 3.14159
console.log(circleArea(5)); // Output: 78.53975
```

## Decorators

```typescript
function Log(target: any, propertyName: string | Symbol) {
  console.log(`Property ${String(propertyName)} has been decorated.`);
}

class Example {
  @Log
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const example = new Example("Test"); // Output: Property name has been decorated.
```

## Utility Types

```typescript
type Person = {
  name: string;
  age: number;
};

// Partial: Makes all properties optional
type PartialPerson = Partial<Person>;

// Required: Makes all properties required
type RequiredPerson = Required<Person>;

// Readonly: Makes all properties readonly
type ReadonlyPerson = Readonly<Person>;

// Pick: Picks a subset of properties
type NameOnly = Pick<Person, "name">;

// Omit: Omits a subset of properties
type AgeOmitted = Omit<Person, "age">;
```

## Intersection and Union Types

```typescript
type A = { a: number };
type B = { b: number };

// Intersection type
type C = A & B; // Output: { a: number; b: number; }

// Union type
type D = A | B; // Output: { a?: number; b?: number; }
```

## Error Handling

```typescript
try {
  throw new Error("Something went wrong");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message); // Output: 'Something went wrong'
  }
} finally {
  console.log("This will always execute");
}
```
