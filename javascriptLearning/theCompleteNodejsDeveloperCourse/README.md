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

### Importing own files 
1. We can use `require('filePath')` to import another JavaScript file at the given path. For example, if we have another JavaScript file in the same directory, we can use `./script.js` to work as the relative path. Note that when we require the file, the file will be in the order of line we import to execute as a large set of code. 
1. For example, if we have a single function `console.log('this is script.js')` in the file and import to `app.js`. When we use `node app.js` to execute the script in the terminal, the line in `script.js` executes first, as the `require()` function is above other code. 
    ```js 
    require('./script.js'); 
    const name = 'Allen';
    console.log(name); 
    ```
1. Each module (imported JS files) has its own scope, so that we can't access the variables directly from the other modules. To use the variables or functions in a module, we need to use `module.exports` to allow the outside world access the variables. Usually this method is used for exporting functions between files. 
1. Note that the functions in the imported file will still be executed. In the following case, when we execute `app.js` with `node` it prints 2 strings in terminal, which is the `console.log()` in `utils.js` and `app.js`. 
    ```js 
    // in utils.js 
    console.log('utils.js');
    const name = 'Allen'; 
    module.exports = name; 

    // in app.js 
    const firstName = require('./utils.js'); 
    console.log(firstName);

    // utlis.js
    // Allen
    ```

### Importing NPM modules 
1. In a JSON file, the `Strings` should be wrapped with double qoutes rather than single quotes. 
1. In terminal, we can use `npm install [package]` to install a module from npm. Note that we can specify the version at behind by using at sign `@`. In this case, we can use `npm install validator@10.8.0`. 
1. In this case, we use `validator` package to verify the data given by the user, such as phone number, address, and credit card numbers. Note that we can check the methods and details of a module on the npm website. For example, [https://www.npmjs.com/package/validator](https://www.npmjs.com/package/validator). 
1. For example, `validator` module has a method `isEmail` that can check if a given email is valid. We can also use `.isURL()` method to check if a given URL is valid or not. 
    ```js 
    const validator = require('validator');
    const getNotes = require('./notes.js');

    const msg = getNotes();

    console.log(msg);
    console.log(validator.isEmail('allen@email.com')); // true 
    console.log(validator.isEmail('email.com')); // false 
    console.log(validator.isURL('https://www.google.com/')); // true 
    ```

### Printing in Color 
1. When transfering the app data, we can only send the `package.json` and `package-lock.json` for dependency referecne rather than sending the whole module package. This is much more efficient and prevent chances that the script in `node_modules` is modified. After we get the JSON files, we can simply use `npm install` without any other flag or command to install the modules listed in the JSON file. `npm` will generate the `node_modules` after typing the command. 
1. In this section, we will use `chalk` package which can print the message in console in different colors. 
1. If we install the wrong version of npm package, we can use `npm install [packageName]@version` to overwrite the module. 
    ```js 
    const validator = require('validator');
    const chalk = require('chalk');
    const getNotes = require('./notes.js');
    const log = console.log;

    const msg = getNotes();

    log(chalk.green('Success!'));
    log(chalk.inverse.bold.yellow('hi'));
    ```

### Global npm modules and nodemon 
1. We can use `nodemon` module to keep node turns on while we modifying the script. However, we should install this module in the global scope to be able to use in the terminal in the global scope. 
1. We put a `-g` flag when install the module `npm install nodemon -g`. 
1. The lecture noticed how to solve the problem if we run `nodemon -v` in PowerShell in Windows. 
1. After installing we can use `nodemon app.js` instead of `node app.js`. 
1. We install version `1.18.5` in this case. 