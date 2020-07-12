# The Complete Node.js Developer Course 

# Installing and exploring Node.js 
1. Node.js is powered with Google V8 engine which is a JavaScript runtime written in "**C++**". Therefore, the code can work on the OS system or the elements on the browser fur different prupose. 
1. There's a global variable which we can access the properties of the environment where we run the code. 
1. Global objects 
    1. `window` which is the global object in a **browser**. 
    1. `global` which is the global object in **Node.js**.
    1. `document` DOM object which we can use other methods such as selector to manipulate HTML elements on the webpage. For example, `document.querySelector('css selector')`.
    1. `process` process object that we can work with Node.js itself. For example, we type `process.exit()` to leave Node.js from the terminal. 
1. Node.js is useful as it has **non-blocking** I/O. It means that during the code is running on the backend with functions for other purposes, we can still manipulate the environment to work on something else. 
1. `requrie()` is a very important and often used function in Node.js that it allows Node.js to retrieve code for functions from files in the OS. 



# Node.js Module System (Notes App)
Module `fs`, `requrie()`
1. This section is focusing on using [`file system`](https://nodejs.org/api/fs.html) module, which can be imported with `require()` function and allow user to manipulate the files in the OS. In this case, we use `.writeFileSync()`. There's asynchornous method `.writeFile()` which will be introduced in the later sections. 
1. After importing the module to use, we can use `.writeFileSync()` method on the object. The method takes 2 arguments, which is the file name with suffix and its contents. The following code will creat a new text file in the same directory with the 2nd argument as the content. 
1. If we duse the same method on the same file with different contents, the file will be overwritten with the new given content. 
    ```js 
    const fs = require('fs');
    fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
    fs.writeFileSync('notes.txt', 'My name is Allen'); // Content of notes.txt is changed to the new given argument 
    ```