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

  axios.get(url).then(res => console.log(res.data)).catch(err => console.log(err));
  ```
2. After compiling the TS code, it can be as the following
  ```js
  "use strict";
  exports.__esModule = true;
  var axios_1 = require("axios");
  var url = 'https://jsonplaceholder.typicode.com/todos/1';
  axios_1["default"].get(url).then(function (res) { return console.log(res.data); })["catch"](function (err) { return console.log(err); });
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

  axios.get(url).then(res => {
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`
      The todo with id: ${id}
      Has a title of: ${title}
      Is it finished? ${completed}
    `);
  }).catch(err => console.log(err));
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

  axios.get(url).then(res => {
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
  }).catch(err => console.log(err));

  const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
      The todo with id: ${id}
      Has a title of: ${title}
      Is it finished? ${completed}
    `);
  }
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
## 2.4. Example of Types
## 2.5. Where do we use Types