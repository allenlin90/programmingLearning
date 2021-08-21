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
- [8. Building Functionality with Classes](#8-building-functionality-with-classes)
  - [8.1. Classes](#81-classes)
  - [8.2. Basic Inheritance](#82-basic-inheritance)
  - [8.3. Instance Method Modifiers](#83-instance-method-modifiers)
  - [8.4. Fields in Classes](#84-fields-in-classes)
  - [8.5. Fields with Inheritance](#85-fields-with-inheritance)
  - [8.6. Where to use Classes](#86-where-to-use-classes)
- [9. Design Patterns with Typescript](#9-design-patterns-with-typescript)
  - [9.1. App Overview](#91-app-overview)
  - [9.2. Bundling with Parcel](#92-bundling-with-parcel)
  - [9.3. Project Structure](#93-project-structure)
  - [9.4. Generating Random Data](#94-generating-random-data)
  - [9.5. Type Definition Files](#95-type-definition-files)
  - [9.6. Using Type Definition Files](#96-using-type-definition-files)
  - [9.7. Export Statements in Typescript](#97-export-statements-in-typescript)
  - [9.8. Defining a Company](#98-defining-a-company)
  - [9.9. Adding Google Maps Support](#99-adding-google-maps-support)
  - [9.10. Google Maps Integration](#910-google-maps-integration)
  - [9.11. Exploring Type Definition Files](#911-exploring-type-definition-files)
  - [9.12. Hiding Functionality](#912-hiding-functionality)
  - [9.13. Why Use Private Modifiers?](#913-why-use-private-modifiers)
  - [9.14. Adding Markers](#914-adding-markers)
  - [9.15. Duplicate Code](#915-duplicate-code)
  - [9.16. One Possible Solution](#916-one-possible-solution)
  - [9.17. Restricting Access with Interface](#917-restricting-access-with-interface)
  - [9.18. Implicit Type Checks](#918-implicit-type-checks)
  - [9.19. Showing Popup Windows](#919-showing-popup-windows)
  - [9.20. Updating Interface Definitions](#920-updating-interface-definitions)
  - [9.21. Optional Implements Clauses](#921-optional-implements-clauses)
  - [9.22. App Wrapup](#922-app-wrapup)

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

# 8. Building Functionality with Classes
## 8.1. Classes
1. A class is a blueprint to create objects with some fields (values) and methods (functions) to represent a thing.
  ```ts
  class Vehicle {
    driver(): void {
      console.log('chugga chugga');
    }

    honk(): void {
      console.log('beep');
    }
  }

  const vehicle = new Vehicle();
  vehicle.driver();
  vehicle.honk();
  ```

## 8.2. Basic Inheritance
1. We can "extend" the methods or properties from a class to create a sub-class.
2. Note that this is not Typescript specific that it's the same syntax and features of JavaScript.
  ```ts
  class Vehicle {
    driver(): void {
      console.log('chugga chugga');
    }

    honk(): void {
      console.log('beep');
    }
  }

  class Car extends Vehicle {}

  const car = new Car();
  car.driver();
  car.honk();
  ```

## 8.3. Instance Method Modifiers
1. In Javascript, we can use "modifiers" on methods in classes for different attributes
   1. `public` makes the method can be called any where, any time. This is the default modifier for methods in a class.
   2. `private` makes the method can only be called by other methods in this class.
   3. `protected` makes the method can be called by other methods in this class, or by other methods in child classes.
2. The main purpose for `private` and `protected` is to prevent other code accidently break the program by calling the method in the wrong way but has no actually effect on security. 
  ```ts
  class Vehicle {
    public drive(): void { // this cause an error because 'drive' in Car class is private
      console.log('chugga chugga');
    }

    private honk(): void {
      console.log('beep');
    }
  }

  class Car extends Vehicle {
    private drive(): void { // this 
      console.log('vroom');
    }

    startDrivingProcess(): void {
      this.drive();
    }
  }

  const car = new Car();
  car.startDrivingProcess();
  car.honk(); // this can't be called because it's private
  ```

## 8.4. Fields in Classes
1. When declare a class, we can give property with default value and assign a type to it.
2. With `constructor`, we can pass argument and give a property when create an instance from the class.
  ```ts
  class Vehicle {
    color: string = 'red'; // red will be default value

    constructor(color: string) { // this will overwrite the property and require parameter when creating a new instance
      this.color = color;
    }

    public honk(): void {
      console.log('beep');
    }
  }

  const vehicle = new Vehicle('orange');
  console.log(vehicle.color);
  ```
2. We can use shorthand to decalre the class as code above.
3. Though there's no code in the `constructor` with the shorthand syntax, we still need to delcare it with empty code block.
  ```ts
  class Vehicle {
    constructor(public color: string) {} // code block is empty as property is declared in shorthand syntax

    protected honk():void {
      console.log('beep');
    }
  }
  ```

## 8.5. Fields with Inheritance
1. When a class is extended from another class as sub-class, it inherit all the properties and features from the parenet class.
2. In the previous case, we need to provide `color` parameter when create a new car instance.
  ```ts
  class Vehicle {
    constructor(public color: string) {}

    public honk(): void {
      console.log('beep');
    }
  }

  const vehicle = new Vehicle('orange');
  console.log(vehicle.color);

  class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
      super(color);
    }

    private drive(): void {
      console.log('vroom');
    }

    startDrivingProcess(): void {
      this.drive();
    }
  }

  const car = new Car(4, 'red');
  car.startDrivingProcess();
  ```
3. When creating a new class by extending from a parent class, we need to call `super` to use the constructor in parent class.
4. We don't provide moidifier in the sub-class as to prevent duplicates on the property from the parent class. 
5. We can refer to regular Javascript `class` syntax and conditions form the [note of other course](https://github.com/allenlin90/programmingLearning/tree/master/javascriptLearning/completeJavaScriptCourse2020#5012-classes).
  ```ts
  class Vehicle {
    constructor(public color: string) {}

    public honk(): void {
      console.log('beep');
    }
  }

  const vehicle = new Vehicle('orange');
  console.log(vehicle.color);

  class Car extends Vehicle {
    constructor(public wheels: number, color: string) { // color has no modifier as it's from the parent class
      super(color); // satisfy parent class constructor
    }

    private drive(): void {
      console.log('vroom');
    }

    startDrivingProcess(): void {
      this.drive();
    }
  }

  const car = new Car(4, 'red');
  car.startDrivingProcess();
  ```

## 8.6. Where to use Classes
1. We use both the features and benefits from "interfaces" and "classes" when coding with Typescript, so we can create more reusable code.

# 9. Design Patterns with Typescript
## 9.1. App Overview
1. The web app will random generate 2 entities
   1. User - random name, age, etc.
   2. Company - random name, business, etc.
2. Each entity will have a location property stated as latitude and longitude which can be marked on map such as Google Map.

## 9.2. Bundling with Parcel
1. We install `parcel-bundler` globally on the machine.
2. In this case, we create `index.html` on the root directory and keep our Typescript code in `src` as `index.ts`.
3. After finishing coding, we can use `parcel index.html` which will run the parcel functions to read and compile the Typescript file into regular JavaScript. 
4. Parcel will run a local server to host the HTML file at port `1234` by default.

## 9.3. Project Structure
1. We separate the entities into different models, have an additional file to conduct the map view to show markers of each entity on Google Map.
2. `index.ts`
   1. `Map.ts`
   2. `User.ts`
   3. `Company.ts`
3. By convnetion, when we use a file to export a class or a model, we name the file with first letter in uppercase.

## 9.4. Generating Random Data
1. In this case, we use [`faker`](https://www.npmjs.com/package/faker) library to generate random data for `User`.
  ```ts
  // User.ts
  import faker from 'faker';

  class User {
    name: string;
    location: {
      lat: number;
      lng: number;
    };

    constructor() {}
  }
  ```

## 9.5. Type Definition Files
1. When using regualr npm libraries, we are importing regular Javascript files into the Typescript code. Therefore, there would be error prompts as Typescript doesn't know exactly what's going on in the JS code.
2. Therefore, we can use "Type Definition File" to resolve the error.
3. For most of the libraries on npm, there's already a "type definition file" for the library. For example, we can install the type definition fiel for faker by `npm install @types/faker`.
4. Some of the popular libraries have already had the type definition file included when installing the package, such as `axios`.
  ```sh
  npm install @types/[package]
  ```

## 9.6. Using Type Definition Files
1. By convention, type definition file is named with `.d.ts` as suffix.
2. We can press either <kbd>command</kbd> on Mac or <kbd>Ctrl</kbd> on Windows and mouse click the imported variable to access the type definition file.
3. We can use this type definition file as documentation to check what type of value should be used at certain functions or methods.
4. The type definition on the top doesn't initiate the value but only indicates the type of the value should be on the property. 
5. For example, though `location` property is declared that it has an object which has `lat` and `lng` and both should be number type, we can't assign it with faker directly but should assign an object on it first.
  ```ts
  import faker from 'faker';

  class User {
    // these only declare the type rather than intiate the data
    name: string;
    location: {
      lat: number;
      lng: number;
    };

    constructor() {
      this.name = faker.name.firstName();
      this.location.lat = faker.address.latitude(); // this is calling .lat on undefined because this.location is now empty
      this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      };
    }
  }
  ```

## 9.7. Export Statements in Typescript
1. When exporting variable or objects with Javascript module system, we can use either `export` or `export default`.
   1. `export`
  ```ts
  // User.ts
  export class User {}
  
  // index.ts
  import { User } from './User';
  ```
   1. `export default`
  ```ts
  // User.ts
  export default class User {}
  
  // index.ts
  import User from './User';
  ```

## 9.8. Defining a Company
1. Define `Company` class
  ```ts
  import faker from 'faker';

  export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
      lat: number;
      lng: number;
    };

    constructor() {
      this.companyName = faker.company.companyName();
      this.catchPhrase = faker.company.catchPhrase();
      this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      };
    }
  }
  ```
1. Import and use both `User` and `Company` in `index.ts`.
  ```ts
  import { User } from './User';
  import { Company } from './Company';

  const user = new User();
  console.log(user);

  const company = new Company();
  console.log(company);
   ```

## 9.9. Adding Google Maps Support
1. To enable Google Maps API
   1. Create a new project at [Google Cloud Console](https://console.cloud.google.com/)
   2. Enable Google Maps JavaScript API.
   3. Create a key as credentials to access the API service
   4. We can restrict the API to be called with certain service, domain, and IP to prevent abuse.
2. Connect to Google Maps JavaScript API at `https://maps.googleapis.com/maps/api/js?key=[cerdential]`.

## 9.10. Google Maps Integration
1. Use imported Google Maps JavaScript library
   1. To use the imported Javascript library with Typescript, we can import type definition files by `npm install @types/google.maps`. 
   2. Besides, we need to add a triple slash directive `/// <reference types="@types/google.maps" />` in `index.ts`.
   3. We can refer to [https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import](https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import) for more information.
2. We can check by typing `google` in the developer console in the broweser.

## 9.11. Exploring Type Definition Files
1. After importing the "Definition type file", we can click with <kbd>command</kbd> on Mac or <kbd>Ctrl</kbd> on Windows to check its `index.d.ts` file. 
2. In that we can click <kbd>command + Shift + p</kbd> on Mac or <kbd>Ctrl + Shift + p</kbd> on Windows to call the command pallet in VS Code for different commands.
3. In this case, we'd like to fold all the code block on level 2 so we can search "Fold Level 2" in command pallet and execute the function. We then can check all the exporting objects on its highest level.
4. `Map` is one of the method to focus as we will use it to create map view.
5. `Marker` will be the other method to focus, as we'd like to pinpoint users and companies on the map view. 
6. We add `<div id="map" style="height: 100vh"></div>` to `index.html`.
7. We can refer to `index.d.ts` to check the methods and arguments that each method takes. In this case, we pass `zoom` and `center` for center of th coordinate when showing the map.
8. Note that we can refer to the arguments and parameters when checking the methods in `index.d.ts`
  ```ts
  /// <reference types="@types/google.maps" />
  import { User } from './User';
  import { Company } from './Company';

  const mapDiv = document.querySelector('#map');
  const mapOpt = {
    zoom: 1, // zoom
    center: { // latlngliteral
      lat: 0,
      lng: 0,
    },
  };

  new google.maps.Map(mapDiv, mapOpt);
  ```
  <img src="./images/63-type_definition_file.png">

## 9.12. Hiding Functionality
1. Our application may use only certain methods from the instances of `Map`.
2. To prevent other engineers calling methods or functions that can break the application, we can "hide" the methods which is originally provided by Google Maps and allow only certain methods available in the new custom `Map` class.


## 9.13. Why Use Private Modifiers? 
1. We create another model as `CustomMap.ts` rather than create the instance from google maps directly.
2. Besides, we'd like the code to be more reusable, so we can take argument from the constructor when creating the instance. 
  ```ts
  export class CustomMap {
    // this prevent the methods to be called directly on the instance
    private googleMap: google.maps.Map;

    constructor(divId: string) {
      this.googleMap = new google.maps.Map(document.querySelector(`#${divId}`), {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
    }
  }
  ```
1. In `index.ts`, we can notice that we can't call on other Google Maps method on the instance directly.
  ```ts
  import { CustomMap } from './CustomMap';

  const customMap = new CustomMap('map');
  ```

## 9.14. Adding Markers
1. A class in Typescript can be either used to create an instance of the class or be referred as the type of an object.
2. The following is part of the process of explain why the code is not ideal when defining classes as `addUserMarker` and `addCompanyMarker` can be very similar that we can actually merge it.
  ```ts
  // CustomMap.ts
  // class can be called to create instance or referred as a type
  import { User } from './User'; 
  import { Company } from './Company';

  export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
      this.googleMap = new google.maps.Map(document.querySelector(`#${divId}`), {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
    }

    // the following isn't good approach!
    addUserMarker(user: User): void {
      new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: user.location.lat,
          lng: user.location.lng,
        },
      });
    }

    addCompanyMarker(company: Company): void {}
  }
  ```
3. After adding the method, we can call it in `index.ts` and render a random marker on the map every time we open the page.
  ```ts
  // index.ts
  /// <reference types="@types/google.maps" />
  import { User } from './User';
  import { Company } from './Company';
  import { CustomMap } from './CustomMap';

  const user = new User();
  const customMap = new CustomMap('map');

  customMap.addUserMarker(user);
  ```

## 9.15. Duplicate Code
1. We can find the code for both `addUserMarker` and `addCompanyMarker` are very similar.
2. The following code will create 2 markers on the map for the "User" and the "company".
  ```ts
  // CustomMap.ts
  import { User } from './User';
  import { Company } from './Company';

  export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
      this.googleMap = new google.maps.Map(document.querySelector(`#${divId}`), {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
    }

    // the following isn't good approach!
    addUserMarker(user: User): void {
      new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: user.location.lat,
          lng: user.location.lng,
        },
      });
    }

    addCompanyMarker(company: Company): void {
      new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: company.location.lat,
          lng: company.location.lng,
        },
      });
    }
  }
  ```
  ```ts
  // index.ts
  /// <reference types="@types/google.maps" />
  import { User } from './User';
  import { Company } from './Company';
  import { CustomMap } from './CustomMap';

  const user = new User();
  const company = new Company();
  const customMap = new CustomMap('map');

  customMap.addUserMarker(user);
  customMap.addCompanyMarker(company);
  ```
  <img src="./images/67-user_and_company_marker.png">

## 9.16. One Possible Solution
1. One of the solution is to turn the method to be more generic by binding the argument with either `User` or `Company` with pipe character `|`.
2. However, this approach is still not ideal as if the number of classes increases, we have to keep binding the new class as the type of the argument.
3. On the other hand, if we only allow exactly the instances from either `User` or `Company` rather than other similar class, we can use this approach to prevent any other classes to call this method.
  ```ts
  // relatively generic approach
  import { User } from './User';
  import { Company } from './Company';
  import { name } from 'faker';

  export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
      this.googleMap = new google.maps.Map(document.querySelector(`#${divId}`), {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
    }

    addMarker(mappable: User | Company): void {
      new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: mappable.location.lat,
          lng: mappable.location.lng,
        },
      });
    }
  }
  ```

## 9.17. Restricting Access with Interface
## 9.18. Implicit Type Checks
1. The other way to work aroudn is to ensure all the objects that we want to execute "addMarker" can be the argument of the method.
2. In this case, we can use `interface` as the gatekeeper to check if the arugment is aplicable to `addMarker` function.
  <img src="./images/69-restricting_access_with_interface.png">
  ```ts
  // CustomMap.ts
  // Instruction to every other class
  // on how they can be an argument to 'addMarker'
  interface Mappable {
    location: {
      lat: number;
      lng: number;
    };
  }

  export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
      this.googleMap = new google.maps.Map(document.querySelector(`#${divId}`), {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
    }

    addMarker(mappable: Mappable): void {
      new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: mappable.location.lat,
          lng: mappable.location.lng,
        },
      });
    }
  }
  ```
3. We then refactor the `index.ts` for the change.
4. After configuring the code, Typescript will check all the objects implicitly when we pass an argument to the method. If the object doesn't satisfy the requirements from `Mappable`, Typescript will prompt an error.
  ```ts
  // index.ts
  /// <reference types="@types/google.maps" />
  import { User } from './User';
  import { Company } from './Company';
  import { CustomMap } from './CustomMap';

  const user = new User();
  const company = new Company();
  const customMap = new CustomMap('map');

  // both user and company satisfy Mappable interface
  customMap.addMarker(user);
  customMap.addMarker(company);
  ```

## 9.19. Showing Popup Windows
1. We can check the details from the [official documentation](https://developers.google.com/maps/documentation/javascript/infowindows).
2. According to the documentation
   1. Create a string with HTML elements that we want to show in the information window
   2. Call `.InfoWindow` method on the google map instance and pass the HTML content string
   3. Call `.Marker` method and pass `position` (latlngLiteral), `map` (the google map instance), and `title` (a string to show the title of the marker)
   4. Add `click` event listener on the marker to open the information window when users click on it.
  ```ts
  // Instruction to every other class
  // on how they can be an argument to 'addMarker'
  interface Mappable {
    location: {
      lat: number;
      lng: number;
    };
  }

  export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
      this.googleMap = new google.maps.Map(document.querySelector(`#${divId}`), {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
    }

    addMarker(mappable: Mappable): void {
      const marker = new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: mappable.location.lat,
          lng: mappable.location.lng,
        },
      });

      marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
          content: 'Hello World',
        });

        infoWindow.open(this.googleMap, marker);
      });
    }
  }
  ```

## 9.20. Updating Interface Definitions
1. To show content properly when adding marker on the map view, we can update the `interface` to require a `markerContent` method which returns string value when calling it.
2. Update `Company.ts`
  ```ts
  // Company.ts
  import faker from 'faker';

  export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
      lat: number;
      lng: number;
    };

    constructor() {
      this.companyName = faker.company.companyName();
      this.catchPhrase = faker.company.catchPhrase();
      this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      };
    }

    markerContent(): string {
      return `
        <div>
          <h1>Company Name: ${this.companyName}</h1>
          <h3>Catchphrase: ${this.catchPhrase}</h3>
        </div>
      `;
    }
  }
  ```
3. Update `User.ts`
  ```ts
  // User.ts
  import faker from 'faker';

  export class User {
    name: string;
    location: {
      lat: number;
      lng: number;
    };

    constructor() {
      this.name = faker.name.firstName();
      this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      };
    }

    markerContent(): string {
      return `User Name: ${this.name}`;
    }
  }
  ```
4. Update `CustomMap.ts`
  ```ts
  // CustomMap.ts
  // Instruction to every other class
  // on how they can be an argument to 'addMarker'
  interface Mappable {
    location: {
      lat: number;
      lng: number;
    };
    markerContent(): string;
  }

  export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
      this.googleMap = new google.maps.Map(document.querySelector(`#${divId}`), {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
    }

    addMarker(mappable: Mappable): void {
      const marker = new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: mappable.location.lat,
          lng: mappable.location.lng,
        },
      });

      marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
          content: mappable.markerContent(),
        });

        infoWindow.open(this.googleMap, marker);
      });
    }
  }
  ```

## 9.21. Optional Implements Clauses
1. When we update the `interface` in `CustomMap.ts`, Typescript may prompt an error in `index.ts` as our `User` and `Company` instance is not updated with the latest requirement in the interface. 
2. However, `index.ts` is not the root cause of the issue as because we are tryign to give `User` and `Company` instance which doesn't satisfy the requirements. Therefore, if we'd still like to pass `User` and `Company` instance, we have to change the class definition of each class.
3. We can export the `interface` required in `CustomMap.ts` and use it in `User.ts` when declaring the class.
  ```ts
  // CustomMap.ts
  export interface Mappable {
    location: {
      lat: number;
      lng: number;
    };
    markerContent(): string;
    color: string;
  }
  ```
  ```ts
  // User.ts
  import faker from 'faker';
  import { Mappable } from './CustomMap';

  export class User implements Mappable {
    name: string;
    location: {
      lat: number;
      lng: number;
    };
    color: string = 'red';

    constructor() {
      this.name = faker.name.firstName();
      this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      };
    }

    markerContent(): string {
      return `User Name: ${this.name}`;
    }
  }
  ```

## 9.22. App Wrapup
1. `private` class modifier
   1. We use `private` modifier to declare properties and methods in class to prevent accidental or intentional calls on the functions that may break the app. 
   2. Though the `private` or `protected` modifier on classes can't really prevent abusing the code if the other programmers intend to do so, it sure limits the change to accidentally miscall or execute inproper methods.
2. Use `interface` to set up general requirements
   1. We can use `interface` to merge the requirements and "schema" to the method that can be called by multiple types of instances.
   2. It only helps checking the "type" but not the exact content can be passed to it. 
3. Use `interface` on different classes
   1. We can export and import an `interface` and `implements` it on a class to ensure instances from the class are declared and defined as the requirements from `interface`.