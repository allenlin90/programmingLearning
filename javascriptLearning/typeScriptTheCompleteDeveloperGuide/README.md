Start learning on 2021/08/16
Finished on

1. Course Link [https://www.udemy.com/course/typescript-the-complete-developers-guide/](https://www.udemy.com/course/typescript-the-complete-developers-guide/)

- [1. Getting Started with TypeScript](#1-getting-started-with-typescript)
  - [1.1. Environment Setup](#11-environment-setup)
  - [1.2. Executing TypeScript Code](#12-executing-typescript-code)
  - [1.3. Catching Error with TypeScript](#13-catching-error-with-typescript)
- [2. What is a type system?](#2-what-is-a-type-system)
  - [2.1. Course Overview](#21-course-overview)
  - [2.2. Types](#22-types)
  - [2.3. More on Types](#23-more-on-types)
  - [2.4. Example of Types](#24-example-of-types)
  - [2.5. Where do we use Types](#25-where-do-we-use-types)
- [3. Type annotation in actions](#3-type-annotation-in-actions)
  - [3.1. Type annotation and type interface](#31-type-annotation-and-type-interface)
  - [3.2. Annotations with variables](#32-annotations-with-variables)
  - [3.3. Object literal annotations](#33-object-literal-annotations)
  - [3.4. Annotations around functions](#34-annotations-around-functions)
  - [3.5. Understanding inference](#35-understanding-inference)
  - [3.6. The 'Any' type](#36-the-any-type)
  - [3.7. Fixing the 'Any' type](#37-fixing-the-any-type)
  - [3.8. Delayed initialization](#38-delayed-initialization)
  - [3.9. When inference doesn't work](#39-when-inference-doesnt-work)
- [4. Annotations with functions and objects](#4-annotations-with-functions-and-objects)
  - [4.1. More on Annotations around Functions](#41-more-on-annotations-around-functions)
  - [4.2. Inference around functions](#42-inference-around-functions)
  - [4.3. Annotations for anonymous functions](#43-annotations-for-anonymous-functions)
  - [4.4. Void and Never](#44-void-and-never)
  - [4.5. Destructuring with Annotation](#45-destructuring-with-annotation)
  - [4.6. Annotations around Objects](#46-annotations-around-objects)
- [5. Mastering Typed Arrays](#5-mastering-typed-arrays)
  - [5.1. Arrays in Typescript](#51-arrays-in-typescript)
  - [5.2. Why Typed Arrays](#52-why-typed-arrays)
  - [5.3. Multiple Types in Arrays](#53-multiple-types-in-arrays)
  - [5.4. When to use Typed Arrays](#54-when-to-use-typed-arrays)
- [6. Tuples in TypeScript](#6-tuples-in-typescript)
  - [6.1. Tuples in TypeScript](#61-tuples-in-typescript)
  - [6.2. Tuples in Action](#62-tuples-in-action)
  - [6.3. Why Tuples?](#63-why-tuples)
- [7. The All-important Interface](#7-the-all-important-interface)
  - [7.1. Interfaces](#71-interfaces)
  - [7.2. Long Type Annotatoins](#72-long-type-annotatoins)
  - [7.3. Fixing Long Annotations with Interfaces](#73-fixing-long-annotations-with-interfaces)
  - [7.4. Syntax Around Interfaces](#74-syntax-around-interfaces)
  - [7.5. Functions in Interfaces](#75-functions-in-interfaces)
  - [7.6. Code Reuse with Interfaces](#76-code-reuse-with-interfaces)
  - [7.7. General Plan with Interfaces](#77-general-plan-with-interfaces)

# 1. Getting Started with TypeScript
## 1.1. Environment Setup

1. Install `typescript` and `ts-node` globally with `npm install typescript ts-node -g`.
2. Install `prettier` plugin in VS Code
   1. Check "format on save" in settings to ensure the code is formatted every time the file is saved.
   2. Search for "single quotes" to turn all quotes into single quotes.
   3. Change "tab size" to 2 spaces.
3. After install `typescript`, we can check with `tsc --help` to ensure typescript compiler is availabe.
4. To execute TypeScript code, we must compile the code to regular JavaScript. We can use `tsc [filename].ts` to comiple it on the same path.
5. After compiling the code, we can execute with NodeJS or in browser.
6. In addition, we can combine the compiling and executing commands by using `ts-node`.

## 1.2. Executing TypeScript Code
1. For a simple demo, we can install `axios` and make a HTTP request to [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/).
  ```ts
  import axios from 'axios';

  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  axios
    .get(url)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  ```

2. After compiling the TS code, it can be as the following
  ```js
  'use strict';
  exports.__esModule = true;
  var axios_1 = require('axios');
  var url = 'https://jsonplaceholder.typicode.com/todos/1';
  axios_1['default']
    .get(url)
    .then(function (res) {
      return console.log(res.data);
    })
    ['catch'](function (err) {
      return console.log(err);
    });
  ```

## 1.3. Catching Error with TypeScript
1. We can use `interface` keyword to declare the properties and structure of an object.
2. We then can use `as` to describe the type of the object we are going to receive.
3. Therefore, if we give a incorrect property and type, the code editor will give a hint before we execute the code.
  ```ts
  import axios from 'axios';

  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  axios
    .get(url)
    .then((res) => {
      const todo = res.data as Todo;

      const id = todo.id;
      const title = todo.title;
      const completed = todo.completed;

      console.log(`
      The todo with id: ${id}
      Has a title of: ${title}
      Is it finished? ${completed}
    `);
    })
    .catch((err) => console.log(err));
  ```
4. Besides, using `interface`, we can give types for parameters when decalring a function.
  ```ts
  import axios from 'axios';

  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  axios
    .get(url)
    .then((res) => {
      const todo = res.data as Todo;

      const id = todo.id;
      const title = todo.title;
      const completed = todo.completed;

      logTodo(id, title, completed);
    })
    .catch((err) => console.log(err));

  const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
      The todo with id: ${id}
      Has a title of: ${title}
      Is it finished? ${completed}
    `);
  };
  ```

# 2. What is a type system?
## 2.1. Course Overview
1. When using TypeScript, we not only learn its "syntax and features" such as using `interface` for data type and structure but also "design patterns" to write reusable code.
2. The overview and learning path of this course are as the followings
   1. Syntax and features
      1. Understand basic types in TS
      2. Function typing + annotations
      3. Type definition files
      4. Arrays in TS
      5. Modules systems
      6. Classes + Refresher on OOP
   2. Design Patterns
      1. Projects

## 2.2. Types
1. Type means an easy way to refer to the different properties and functions that a value has.
2. It means the value has a type which includes all the properties and functions can be used on the type of value in JavaScript.
3. For example, primitive `String` value in JavaScript has methods such as `.concat` and `.charAt`. It will be very inefficient if we need to give all the description and definition of a type of value.
4. Therefore, we can simply summarize and give the type of a value according to its definition in JavaScript.
5. By decalring types, we are actually labeling variables and parameters as certain types according to the definition in JavaScript.

## 2.3. More on Types
1. There are 2 main categories of types, `primitive` and `object` types.
   1. Primitive
      1. string
      2. number
      3. boolean
      4. symbol
      5. void
      6. null
      7. undefined
   2. Object
      1. functions
      2. arrays
      3. objects
      4. classes
2. By having types, it can be helpful when multiple programmers working together or review the code in the future.
3. Types are used by the TypeScript compiler to analyze the code for errors.
4. Types allow other engineers to understand what values are flowing around the codebase.

## 2.4. Example of Types
## 2.5. Where do we use Types
1. By declaring types on variables, TypeScript can prompt methods that can use on the object or send errors if there's any.
  ```ts
  const today = new Date();
  today.getMonth();

  const person = {
    age: 20,
  };

  class Color {}

  const red = new Color();
  ```
2. TypeScript will try to parse and check all the types in the codebase.

# 3. Type annotation in actions
## 3.1. Type annotation and type interface
1. Type annotations - Code we add to tell TypeScript what type of value a variable will refer to.
2. Type inference - TypeScript tries to figure out what type of value a variable refers to.

## 3.2. Annotations with variables
  ```ts
  let apples: number = 5;
  let speed: string = 'fast';
  let hasName: boolean = true;

  let nothingMuch: null = null;
  let nothing: undefined = undefined;

  // built in objects
  let now: Date = new Date();
  ```

## 3.3. Object literal annotations
1. We can decalre an array with certain types in it, so the array can only contain values with the given type.
1. To declare object structure and property types, we'd need to create an object-like syntax and separate properties with types with semi-column `;`.
  ```ts
  // Arrays
  let colors: string[] = ['red', 'green', 'blue'];
  let myNumbers: number[] = [1, 2, 3];
  let truths: boolean[] = [true, true, false];

  // Classes
  class Car {}
  let car: Car = new Car();

  // Object literal
  let point: { x: number; y: number } = {
    x: 10,
    y: 20,
  };
  ```

## 3.4. Annotations around functions
1. After the column, we can give an array function-like notation to indicate the type of arguments sending to the function and the value that the function returns.
2. In the following example, the function provides actions and doesn't return any value, so we can simply give `void` to indicate that the function doesn't return a value.
  ```ts
  // Function
  const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
  };
  ```
3. Besides type annotation which is declaring type of a value in advance, if a variable has a certain type of value, Typescript will bind the first type of value that is assigned to the variable.

## 3.5. Understanding inference
1. When declaring a variable, if declaration and initialization are on the same line, Typescript will figure out the type of variable for us.
2. Note that this feature won't work if declaration and initialization are on different lines.
  ```ts
  // declaration and initialization on the same line
  let apples = 5; // type of variable apple will be number
  let pinapples: number = 6; // this is similar to declare as above

  // declaration and initialization on different lines
  let oranges;
  oranges = 3; // Typescript doesn't know the type of variable oranges
  ```
3. Type inference will always be triggered and checked by Typescript, while in some cases, we need to manually declare and add type annotations.

## 3.6. The 'Any' type
1. In some cases such as `JSON.parse`, the function can return `any` type dependingon the input.
2. Typescript wouldn't know and can't expect what type of value will be returned by the function.
3. Therefore, in Typescript, `any` type means the returned value can be any type and Typescript can't do error checking for the case.
  ```ts
  // When to use annotaions
  // 1) Function that returns the 'any' type
  const json = '{ "x": 10, "y": 20 }';
  const coordinates = JSON.parse(json);
  coordinates.hello_word; // property doesn't exist but typescript can't do error checking
  console.log(coordinates);
  ```

## 3.7. Fixing the 'Any' type
1. We can add annotation to the variable returned by the function
  ```ts
  const json = '{ "x": 10, "y": 20 }';
  const coordinates: { x: number; y: number } = JSON.parse(json);
  console.log(coordinates);
  ```

## 3.8. Delayed initialization
1. When we declare a variable but don't assign a value, the variable will have `any` type as Typescript doesn't know which type the variable will use.
2. We can either add annotation to declare the type or assign a default value, so Typescript can detect and fix the type of value.
  ```ts
  // 2) When we declare a variable on one line and initialize it later
  let words = ['red', 'green', 'blue'];
  let foundWord: boolean;
  let foundWord = false;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
      foundWord = true;
    }
  }
  ```

## 3.9. When inference doesn't work
1. In some cases, we may need the variable be assigned with different type of values.
2. We can use pipe character `|` as an "or" to indicate that the variable can be either `number` or `boolean` in this case.
  ```ts
  // 3) Variable whose type cannot be inferred correctly
  let numbers = [-10, -1, 12];
  let numberAboveZero: boolean | number = false;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      numberAboveZero = numbers[i];
    }
  }
  ```

# 4. Annotations with functions and objects
## 4.1. More on Annotations around Functions
1. Type annotation for functions - Code we add to tell Typescript what type of arguments a function will receiver and what type of values it will return.
2. Type inference for functions
   1. Typescript tries to figure out what type of value a function will return.
   2. This only checks the return value from the function without checking the arguments passing to the function.
  ```ts
  // declare the type of value that the function will return as number
  const add = (a: number, b: number): number => {
    return a + b;
  };
  ```

## 4.2. Inference around functions
1. Typescript can help checking the value that a function returns, but it doesn't help checking if the logic in the function is correct or not.
  ```ts
  // the following is true as long as the output of the function is a number, though we want to "add" rather than "substract"
  const add = (a: number, b: number): number => {
    return a - b;
  };
  ```

2. On the other hand, we can remove the annotation to returned value if we have given annotation on the types on arguments to the function. Typescript will read the body and knows what type of value will be returned.
  ```ts
  // typescript still know the function will return a number
  const add = (a: number, b: number) => {
    return a + b;
  };
  ```

3. In addition, Typescript can check if function returns value correctly if we give annotation
  ```ts
  // typescript returns an error as there's no value returned
  const substract = (a: number, b: number): number => {
    a - b;
  };
  ```

## 4.3. Annotations for anonymous functions
  ```ts
  const add = (a: number, b: number): number => {
    return a + b;
  };

  const substract = (a: number, b: number): number => {
    return a - b;
  };

  function divide(a: number, b: number): number {
    return a / b;
  }

  const multiply = (a: number, b: number): number => {
    return a * b;
  };
  ```

## 4.4. Void and Never
1. If we set a returned value as `void`, it indicates that the function returns nothing. 
2. Therefore, if we accidentally returned any value, Typescript will prompt an error.
  ```ts
  const logger = (message: string): void => {
    console.log(message);
  };
  ```
3. Besides `void`, we can use `never` to indicate that the function will never return a value back though a `void`. Note that it can be very rare to use this scenario. 
  ```ts
  const throwError = (message: string): never => {
    throw new Error(message);
  };

  const promptError = (message: string) => {
    if (!message) throw new Error();
    return message;
  }

  const reportError = (message: string): void => {
    if (!message) throw new Error();
  }
  ```

## 4.5. Destructuring with Annotation
1. We can use destructuring notation to declare arguments passing to a function
  ```ts
  const logWeather = ({ date, weather }: { date: Date; weather: string; }): void => {
    console.log(date);
    console.log(weather);
  };
  ```

## 4.6. Annotations around Objects
1. To use destructuing notation to declare the type, we need annotate with object structure
  ```ts
  const profile = {
    name: 'alex',
    age: 20,
    coords: {
      lat: 0,
      lng: 15,
    },
    setAge(age: number): void {
      this.age = age;
    },
  };
  
  const { age }: { age: number } = profile;

  const { coords: { lat, lng }, }: { coords: { lat: number; lng: number } } = profile;
  ```
1. We can't simply use a single type annotation to declare. Besides, it doesn't work when we multiple variables to declare.
  ```ts
  // invalid annotation
  const { age }: number = profile;
  const { name, age }: number = profile; // name is string
  ```

# 5. Mastering Typed Arrays
## 5.1. Arrays in Typescript
1. Typed arrays are arrays where each element is some consistent type of value.
2. If we give an empty array without any annotation, the array can store any type of value in it. 
  ```ts
  // array that contains only string type values
  const carMakers: string[] = ['ford', 'toyota', 'chevy'];
  const dates: Date[] = [new Date(), new Date()];
  const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

  const list = []; // this array can store any type of value which should be avoided
  ```

## 5.2. Why Typed Arrays
## 5.3. Multiple Types in Arrays
1. Typescript can do type inference when extracting values from an array.
  ```ts
  // Help with inference when extracting values
  // both variables are string type
  const car = carMakers[0]; 
  const myCar = carMakers.pop();
  ```
2. Typescript can prevent us from adding incomplete values to the array.
  ```ts
  const carMakers: string[] = ['ford', 'toyota', 'chevy'];

  // Prevent incompatible values
  carMakers.push(100); // ts prompts error because the array shall contain only string type value
  ```
3. We can get help `map`, `forEach`, `reduce` array functions. Since Typescript will know the value type by inference, we can call the methods along with the type of the value. For example, the value type is `String`, so we can call `toUpperCase` to turn all characters into capital letters.
  ```ts
  // Help with 'map'
  carMakers.map((car: string): string => {
    return car.toUpperCase();
  });
  ```
4. Flexible - arrays can still contain multiple different types.
  ```ts
  // Flexible types
  const importantDates: (string | Date)[] = [new Date()];
  importantDates.push('2030-10-10');
  ```

## 5.4. When to use Typed Arrays
1. We use typed arrays when we need to represent a collection of records with some arbitrary sort order.

# 6. Tuples in TypeScript
## 6.1. Tuples in TypeScript
1. A `Tuple` is an array-like structure where each element represents some property of a record.
2. Each value in the array is "label" with properties in certain order. If the order of value changes, the array become meaningless.
  ```ts
  const soda = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
  }

  const drink = ['brown', true, 40];
  ```

## 6.2. Tuples in Action
1. We can either decalre then value type in the array structure to turn the array as a `Tuple`, or declare a "type" as "alias" that we can simply use it to indicate the type structure of an array.
  ```ts
  const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
  };

  type Drink = [string, boolean, number];

  const pepsi: [string, boolean, number] = ['brown', true, 40];
  const sprite: Drink = ['clear', true, 40];
  const tea: Drink = ['brown', false, 0];
  ```

## 6.3. Why Tuples?
1. One most used scenario is to handle data from sheets or CSV files, as the data in a row should have certain types in each files on the row. 
2. However, in most of the cases, `Tuples` only indicates the type of the value rather than the meaning of it.
3. By using object with properties/keys, it can be more straight forward to ge the purpose and relation ship between the property and the model itself.
  ```ts
  const carSpecs: [number, number] = [400, 3354]; // we don't know what does 400 and 3354 means

  const carState = {
    horsePower: 400,
    weight: 3354,
  };
  ```

# 7. The All-important Interface
## 7.1. Interfaces
1. An interface creates a new type, describing the property names and value types of an object.

## 7.2. Long Type Annotatoins
1. Though regular annotations can work on declaring value and property types, the annotation can be very long and hard to read.
2. Besides, every time we declare a function to work with the object, we need to add annotation on each function.
  ```ts
  const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
  };

  const printVehicle = (vehicle: {
    name: string;
    year: number;
    broken: boolean;
  }): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
  };

  printVehicle(oldCivic);
  ```

## 7.3. Fixing Long Annotations with Interfaces
1. We can use `interface` to create new data type for object. In the following function, we can simply refer to the data type and object structure by the interface.
  ```ts
  interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
  }

  const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
  };

  const logVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
  };

  logVehicle(oldCivic);
  ```

## 7.4. Syntax Around Interfaces
1. We can not only assign primitive type values but also complicated object data structure or functions
  ```ts
  interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string; // requrie a method which returns string type value
  }

  const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
      return `Name: ${this.name}`;
    },
  };

  const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
  };

  printVehicle(oldCivic);
  ```

## 7.5. Functions in Interfaces
1. If we remove all the other properties in the interfaces, Typescript will still see the code as valid because there's only one single condition is checked if the object as a method as defined in the interface.
2. Thus, the naming to the `interface` can be tricky as in the following example, "Vehicle" doesn't seem to be proper without other properties. 
  ```ts
  interface Vehicle {
    summary(): string; // check if the object has 'summary' method
  }

  const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
      return `Name: ${this.name}`;
    },
  };

  const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
  };

  printVehicle(oldCivic);
  ```
3. We can refactor and change the name of each variable for its purpose.
  ```ts
  interface Reportable {
    summary(): string;
  }

  const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
      return `Name: ${this.name}`;
    },
  };

  const printSummary = (item: Reportable): void => {
    console.log(item.summary());
  };

  printSummary(oldCivic);
  ```

## 7.6. Code Reuse with Interfaces
1. We can create general `interface` to be used for different kinds of objects. 
2. For example, we can use `printSummary` function on both the "drink" and "oldCivic" though these objects are very different items and may server different purposes in the code. 
  ```ts
  interface Reportable {
    summary(): string;
  }

  const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
      return `Name: ${this.name}`;
    },
  };

  const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary() {
      return `My drink has ${this.sugar} grams of sugar`;
    },
  };

  const printSummary = (item: Reportable): void => {
    console.log(item.summary());
  };

  printSummary(oldCivic);
  printSummary(drink);
  ```

## 7.7. General Plan with Interfaces
1. In this case, we can use the `interface` as the gate keeper to check if all the objects used in the code are following certain standard or requirements. 
2. In the previous example, `Reportable` interface is the gatekeeper for `printSummary` function to ensure all the objects passing to the function will have `summary` method which returns string type value.
3. On the other hand, both `oldCivic` and `drink` must satisfy the `Reportable` interface to work with `printSummary`.
4. In summary, general strategy for reusable code in Typescript
   1. Create functions that accept arguments that are typed with interfaces
   2. Objects/Classes can decide to 'implement' a given interface to work with a function