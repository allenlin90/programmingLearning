Start learning on 2020/07/11
Finished on 

1. Installing and exploring Node.js

1. [Node.js Module System (Notes App)](#Node.js-Module-System-(Notes-App))
    1. [Importing own files](#Importing-own-files)
    1. [Importing NPM Modules](#Importing-NPM-Modules)
    1. [Printing in Color](#Printing-in-Color)
    1. [Global NPM Modules and Nodemon](#Global-NPM-Modules-and-Nodemon)

1. [File System and Command Line Args (Notes App)](#File-System-and-Command-Line-Args-(Note-App))
    1. Getting Input from Users 
    1. Argument Parsing with Yargs: Part 1
    1. Argument Parsing with Yargs: Part 2
    1. Storing Data with JSON
    1. Adding a Note
    1. Removing a Note
    1. ES6 Aside: Arrow Functions
    1. Refactoring to Use Arrow Functions
    1. Listing Notes
    1. Reading a Note

1. Debugging Node.js (Notes App)
    1. Debugging Node.js
    1. Error Messages 

1. Asynchronous Node.js (Weather App)
    1. Asynchronous Basics
    1. Call Stack, Callback Queue, and Event Loop
    1. Making HTTP Requests
    1. Customizing HTTP Requests
    1. An HTTP Request Challenge
    1. Handling Errors
    1. Callback Function
    1. Callback Abstraction 
    1. Callback Abstraction Challenge
    1. Callback Chaining
    1. ES6 Aside: Object Property Shorthand and Destructuring
    1. Destructuring and Property Shorthand Challenge
    1. Bonus: HTTP Requests Without a Library 

1. Web Servers (Weather App)
    1. Hello Express
    1. Serving up HTML and JSON
    1. Serving up STatic Assets
    1. Serving up CSS, JS, Images, and More
    1. Dynamic Pages with Templating 
    1. Customizing the Views Directory
    1. Advanced Templating 
    1. 404 Pages 
    1. Styling the Application: Part 1
    1. Styling the Application: Part 2

1. Accessing API from Browser (Weather App)
    1. The Query String 
    1. Building a JSON HTTP Endpoint
    1. ES6 Aside: Default Function Parameters
    1. Browser HTTP Requests with Fetch
    1. Creating a Search Form
    1. Writing up the User Interface

1. APplication Deployment (Weather App)
    1. Joining Heroku and Github
    1. Version Control With Git
    1. Exploring Git 
    1. Integrating Git 
    1. Setting up SSH Keys 
    1. Pushing Code to Github
    1. Deploying Node.js to Heroku
    1. New Feature Deployment Workflow 
    1. Avoiding Global Modules

1. MongoDB and Promises (Task App)
    1. MongoDB and NoSQL Databases
    1. Installing MongoDB macOS, Linux, and Windows
    1. Installing Database GUI Viewer
    1. Connecting and Inserting Documents 
    1. Inserting Documents 
    1. The ObjectID
    1. Querying Documents 
    1. Promises
    1. Updating Documents 
    1. Deleting Documents 

1. REST APIs and Mongoose (Task App)
    1. Setting up Mongoose 
    1. Creating a Mongoose Model
    1. Data Validation and Sanitization: Part 1
    1. Data Validation and Sanitization: Part 2
    1. Structuring a REST API
    1. Installing Postman
    1. Resource Creation Endpoints: Part 1
    1. Resource Creation Endpoints: Part 2
    1. Resource Reading Endpoints: Part 1
    1. Resource Reading Endpoints: Part 2
    1. Promise Chaining 
    1. Promise Chaining Challenge
    1. Async/Await 
    1. Async/Await: Part 2
    1. Resource Updating Endpoints: Part 1
    1. Resource Updating Endpoints: Part 2
    1. Resource Deleting Endpoints 
    1. Separate Route Files 

1. API Authentication and Security (Task App)
    1. Securely Storing Password: Part 1
    1. Securely Storing Password: Part 2
    1. Logging in Users
    1. JSON Web Tokens
    1. Generating Authentication Tokens
    1. Express Middleware
    1. Accepting Authentication Tokens
    1. Advanced Postman
    1. Logging Out
    1. Hiding Private Data 
    1. Authenticating User Endpoints
    1. The User/Task Relationship
    1. Authenticating Task Endpoints
    1. Cascade Delete Tasks

1. Sorting, Pagination, and Filtering 
    1. Working with Timestamps
    1. Filtering Data
    1. Paginating Data 
    1. Soring Data 

1. File Uploads (Task App)
    1. Adding Support for File Uploads
    1. Validating File Uploads
    1. Validation Challenge
    1. Handling Express Errors
    1. Adding Images to User Profile
    1. Serving up Files
    1. Auto-Cropping and Image Formatting

1. Sending Emails (Task App)
    1. Exploring SendGrid
    1. Sending Welcome and Cancelation Emails 
    1. Environment Variables 
    1. Creating a Production MongoDB Database
    1. Heroku Deployment

1. Testing Node.js (Task App)
    1. Jest Testing Framework 
    1. Writing Tests and Assertions
    1. Writing Your Own Test 
    1. Testing Asynchronous Code 
    1. Testing an Express Application: Part 1
    1. Testing an Express Application: Part 2
    1. Jest Setup and Teardown
    1. Testing with Authentication 
    1. Advanced Assertions
    1. Mocking Libraries
    1. Wrapping up User Tests
    1. Setup Task Test Suite
    1. Testing with Task Data 
    1. Bonus: Extra Test Ideas

1. Real-time Web Applications with Socket.io (Chat App)
    1. Creating the Chat App Project
    1. WebSockets
    1. Getting Started with Socket.io
    1. Socket.io Events 
    1. Socket.io Events Challenge
    1. Broadcasting Events 
    1. Sharing Your Location 
    1. Event Acknowledgements 
    1. Form and Button states 
    1. Rendering Messages
    1. Rendering Location MEssages
    1. Working with Time 
    1. Timestamps for Location Messages 
    1. Styling the Chat App
    1. Join Page
    1. Socket.io Rooms 
    1. Storing Users: Part 1 
    1. Storing Users: Part 2
    1. Tracking Users Joining and Leaving 
    1. Sending Messages to Rooms
    1. Rendering User List 
    1. Automatic Scrolling 
    1. Deploying the Chat Application 
---
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

Module `fs`, `require()`

1. This section is focusing on using [`file system`](https://nodejs.org/api/fs.html) module, which can be imported with `require()` function and allow user to manipulate the files in the OS. In this case, we use `.writeFileSync()`. There's asynchornous method `.writeFile()` which will be introduced in the later sections.
1. After importing the module to use, we can use `.writeFileSync()` method on the object. The method takes 2 arguments, which is the file name with suffix and its contents. The following code will creat a new text file in the same directory with the 2nd argument as the content.
1. If we duse the same method on the same file with different contents, the file will be overwritten with the new given content.
   ```js
   const fs = require("fs");
   fs.writeFileSync("notes.txt", "This file was created by Node.js!");
   fs.writeFileSync("notes.txt", "My name is Allen"); // Content of notes.txt is changed to the new given argument
   ```

### Importing own files

1. We can use `require('filePath')` to import another JavaScript file at the given path. For example, if we have another JavaScript file in the same directory, we can use `./script.js` to work as the relative path. Note that when we require the file, the file will be in the order of line we import to execute as a large set of code.
1. For example, if we have a single function `console.log('this is script.js')` in the file and import to `app.js`. When we use `node app.js` to execute the script in the terminal, the line in `script.js` executes first, as the `require()` function is above other code.
   ```js
   require("./script.js");
   const name = "Allen";
   console.log(name);
   ```
1. Each module (imported JS files) has its own scope, so that we can't access the variables directly from the other modules. To use the variables or functions in a module, we need to use `module.exports` to allow the outside world access the variables. Usually this method is used for exporting functions between files.
1. Note that the functions in the imported file will still be executed. In the following case, when we execute `app.js` with `node` it prints 2 strings in terminal, which is the `console.log()` in `utils.js` and `app.js`.

   ```js
   // in utils.js
   console.log("utils.js");
   const name = "Allen";
   module.exports = name;

   // in app.js
   const firstName = require("./utils.js");
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
   const validator = require("validator");
   const getNotes = require("./notes.js");

   const msg = getNotes();

   console.log(msg);
   console.log(validator.isEmail("allen@email.com")); // true
   console.log(validator.isEmail("email.com")); // false
   console.log(validator.isURL("https://www.google.com/")); // true
   ```

### Printing in Color

1. When transfering the app data, we can only send the `package.json` and `package-lock.json` for dependency referecne rather than sending the whole module package. This is much more efficient and prevent chances that the script in `node_modules` is modified. After we get the JSON files, we can simply use `npm install` without any other flag or command to install the modules listed in the JSON file. `npm` will generate the `node_modules` after typing the command.
1. In this section, we will use `chalk` package which can print the message in console in different colors.
1. If we install the wrong version of npm package, we can use `npm install [packageName]@version` to overwrite the module.

   ```js
   const validator = require("validator");
   const chalk = require("chalk");
   const getNotes = require("./notes.js");
   const log = console.log;

   const msg = getNotes();

   log(chalk.green("Success!"));
   log(chalk.inverse.bold.yellow("hi"));
   ```

### Global npm modules and nodemon

1. We can use `nodemon` module to keep node turns on while we modifying the script. However, we should install this module in the global scope to be able to use in the terminal in the global scope.
1. We put a `-g` flag when install the module `npm install nodemon -g`.
1. The lecture noticed how to solve the problem if we run `nodemon -v` in PowerShell in Windows.
1. After installing we can use `nodemon app.js` instead of `node app.js`.
1. We install version `1.18.5` in this case.

# File System and Command Line Args (Note App)

### Getting input from users

1. We can use `process.argv` (which argv stands for argument vector) to catch the argument passed in the command line with `node app.js`. This method returns an `Array` of 3 elements. Note that the `Array` can be longer if we pass mroe than one argument.
   1. The path of the executable `node` in the OS system.
   1. The path of the script where it is in the OS system.
   1. The arugment passed when execute the script.
   1. Other arguments passed in through execution.
   1. Commands in a shell
   ```shell
   node app.js Allen
   ```
   1. JavaScript code
   ```js
   // app.js
   console.log(`My name is ${process.argv[2]}.`);
   // My name is Allen.
   ```
1. We can use this feature to allow user to put command when execute the program.

   1. Command in shell

   ```shell
   node app.js add
   node app.js remove
   ```

   1. JavaScript code

   ```js
   const chalk = require("chalk");
   const getNotes = require("./notes.js");

   const command = process.argv[2];

   console.log(process.argv);

   if (command === "add") {
     console.log("Adding note!");
   } else if (command === "remove") {
     console.log("Removing note!");
   }
   ```

### Argument Parsing with Yargs: Part 1

1. Module [`Yargs`](https://www.npmjs.com/package/yargs) helps building interactive command line tools, by parsing arguments and generating an elegant user interface. Therefore, we don't need to write the `String` parser all by ourselves.
1. `yargs` turn the argumetns with certain patterns into properties of its `Object`. Therefore, we can access the argument in an easier way.
   1. Commands in shell
   ```shell
   node app.js add --title="Things to buy"
   ```
   1. JavaScript code
   ```js
   const yargs = require("yargs");
   console.log(yargs.argv);
   // { _: [ 'add' ], title: 'Things to buy', '$0': 'app.js' }
   ```
1. `yargs` module has a default function `--help` which we can check what commands are available of the JS App.
1. We then can use `.command()` method to set up the commands. We can also change the version of the program when users checks it. `.command()` method takes an `Object` as argument which contains `command` (with a `String` value), `describe` (with a `String` value), and `handler` (a method).

   ```js
   // Customize yargs
   yargs.version("1.1.0");

   // Create add command
   yargs.command({
     command: "add",
     describe: "Add a new note",
     handler: function () {
       console.log("Adding a new note!");
     },
   });

   // Create remove command
   yargs.command({
     command: "remove",
     describe: "Remove a note",
     handler: function () {
       console.log("Removing the note!");
     },
   });

   // Create list command
   yargs.command({
     command: "list",
     describe: "List all the notes!",
     handler: function () {
       console.log("Listing the note!");
     },
   });

   // Create read command
   yargs.command({
     command: "read",
     describe: "Read only mode",
     handler: function () {
       console.log("You can read the notes only!");
     },
   });
   ```

1. If we type `node app.js --help`, it shows all the commands that we have set up.

   ```shell
   app.js [command]

   Commands:
   app.js add     Add a new note
   app.js remove  Remove a note
   app.js list    List all the notes!
   app.js read    Read only mode

   Options:
   --help     Show help                                                 [boolean]
   --version  Show version number                                       [boolean]
   ```

### Argument Parsing with Yargs: Part 2

1. We can set up `builder` property (whose value is an `object`) in each command to allow the user to configure each command. For example, in `add` command, we add a builder that includes `title`. Besides, we can add `demandOPtion` property in the builder object to indicate if the input is required (default is `false`). Therefore, if a user doesn't give the input correctly, the program returns an error message that the input is missing.
1. Besides, since the command can take any type of value as argument, it doesn't return error though we pass an empty title to the case, and it holds the value as a boolean `true` which means the `--title` is given. However, this is not what we want.
1. We can have a 3rd property in `builder` that is `type`. We can set it up as `string`, so even the input is an empty `String`, the module doesn't hold a boolean `true` for the case.

   1. JavaScript code

   ```js
   // Create add command
   yargs.command({
     command: "add",
     describe: "Add a new note",
     builder: {
       title: {
         describe: "Note title",
         demandOption: true,
         type: "string",
       },
     },
     handler: function (argv) {
       console.log("Adding a new note!", argv);
     },
   });
   ```

   1. Commands in shell

   ```shell
   node app.js add --title="Shopping list"
   # Adding a new note! { _: [ 'add' ], title: 'Shopping list', '$0': 'app.js' }

   node app.js add --title="Shopping list" # without type property in builder
   # Adding a new note! { _: [ 'add' ], title: true, '$0': 'app.js' }

   node app.js add --title="Shopping list" # set type as 'string' in builder
   # Adding a new note! { _: [ 'add' ], title: '', '$0': 'app.js' }
   ```

1. If we don't use `console.log(yargs.argv)` in the code, the module will assume that the modules isn't used, so the commands won't work. To prevent such condition, we can simply put `yargs.argv` anywhere in the code or call `yargs.parse()` method, so the code can work normally.

   1. JavaScript code

   ```js
   yargs.command({
     command: "add",
     describe: "Add a new note",
     builder: {
       title: {
         describe: "Note title",
         demandOption: true,
         type: "string",
       },
       body: {
         describe: "Note contents",
         demandOption: true,
         type: "string",
       },
     },
     handler: function (argv) {
       console.log(`Title: ${argv.title}`);
       console.log(`Body: ${argv.body}`);
     },
   });
   ```

   1. Commands in shell

   ```shell
   # Use add command without arguments
   node app.js add

   # Returned from the command
   Add a new note

   Options:
   --help     Show help                                                 [boolean]
   --version  Show version number                                       [boolean]
   --title    Note title                                      [string] [required]
   --body     Note contents                                   [string] [required]

   Missing required arguments: title, body

   # Use add command with proper arguments
   node app.js --title="This is the title" --body="This is content of the note"
   # Returned from the command
   Title: This is the title
   Body: This is content of the note
   ```

### Storing Data with JSON

`fs.writeFileSync()`, `fs.readFileSync()`,`JSON.stringify()`, `JSON.parse()`

1. We can use preset functions in JavaScript to turn an `Object` into JSON by `JSON.stringify(JSObject)` and parse a JSON file by `JSON.parse(JSONfile)`.
1. We then can use `fs` module and `fs.writeFileSync(fileName, variable)` method to create a JSON file locally.
1. We can use `fs.readFileSync(filePath)` to read a file from the OS system. The returned data is actually binary data. Therefore, we can use `.toString()` to turn the binary data into its regular JSON format. However, since its a JSON data, we can also use `JSON.parse()` to read the data directly.

   ```js
   const fs = require("fs");
   const book = {
     title: "Ego is the Enemy",
     author: "Ryan Holiday",
   };

   const bookJSON = JSON.stringify(book);
   fs.writeFileSync("1-json.json", bookJSON);

   const dataBuffer = fs.readFileSync("1-json.json");
   console.log(JSON.parse(dataBuffer)); // {"title":"Ego is the Enemy","author":"Ryan Holiday"}
   console.log(JSON.parse(dataBuffer.toString())); // {"title":"Ego is the Enemy","author":"Ryan Holiday"}

   const dataJSON = dataBuffer.toString();
   const data = JSON.parse(dataJSON);
   console.log(data.title); //'Ego is the Enemy'
   ```

### Adding a Note

1. To export multiple variables or functions from a file, we can use `module.exports = {}` to export an `Object` rather than a single variable.
1. If we don't have to JSON file to read and write, Node.js will return an error for the issue. Thus, we can use `try` and `catch` blocks to deal with it. When there's no such file avaiable, we just let the program return an empty `Array` as there's no data and prevent overwriting the other data.
1. Note that JSON file is default in an `Array` while its elements are `Objects`. Therefore, without very first array on the outside, the JSON files doesn't work.
   ```js
   const loadNotes = function () {
     try {
       const dataBuffer = fs.readFileSync("notes.json");
       const dataJSON = dataBuffer.toString();
       return JSON.parse(dataJSON);
     } catch (err) {
       return [];
     }
   };
   ```
1. We can add some code to check if a title is used in the note. We use `.filter()` array method here and check if the returned `Array` from the method has any element. If so, it means the given title has been used.

   ```js
   const addNote = function (title, body) {
     const notes = loadNotes();

     const duplicateNotes = notes.filter(function (note) {
       return note.title === title;
     });

     if (duplicateNotes.length === 0) {
       notes.push({
         title: title,
         body: body,
       });
       saveNotes(notes);
       console.log("New ntoe added");
     } else {
       console.log("Note title taken!");
     }
   };
   ```

### Removing a note

1. In this case, we have several tasks
   1. Setup the remove command to take a requried "--title" option in terminal when use the App.
   1. Create and export a removeNote function from notes.js
   1. Call removeNote in remove command handler
   1. Have removeNote log the title of the note to be removed
   1. Test your work using: node app.js remove --title="givenTitle"
1. In `app.js`, we can add `builder` property to indicate the use of parameters for remove command.
   ```js
   yargs.command({
     command: "remove",
     describe: "Remove a note",
     builder: {
       title: "Note title",
       demandOption: true,
       type: "string",
     },
     handler: function (argv) {
       notes.removeNotes(argv.title);
     },
   });
   ```
1. For the function in `notes.js`, I firstly write the code in this way.

   ```js
   const removeNote = function (title) {
     const notes = loadNotes();

     const index = notes.map((note, index) => {
       if (note.title === title) {
         return index;
       }
       return false;
     });

     if (index.length !== 0) {
       console.log(notes[index[0]].title + " is removed!");
       notes.splice(index[0], 1);
     } else {
       console.log("No such title!");
     }
     saveNotes(notes);
   };
   ```

1. The solution given in the lecture is much more succinct and simple. Array `.filter()` method is used to check if the item in the array fits to certain condition.
1. We use `chalk` module to print a prompt in the terminal to the user for the status.

   ```js
   const removeNote = function (title) {
     const notes = loadNotes();

     const notesToKeep = notes.filter(function (note) {
       return note.title !== title;
     });

     if (notes.length > notesToKeep.length) {
       console.log(chalk.green.inverse(`Note "${title}" is removed!`));
       saveNotes(notesToKeep);
     } else {
       console.log(chalk.red.inverse(`Note "${title}" is not found!`));
     }
   };
   ```

### ES6 Aside: Arrow Functions and Refactoring to use Arrow Functions

1. We can replace some one-line function with arrow function notation as shorthand.
1. To use arrow function notation, we should be careful with the scope of the function at where it is.

### Listing Notes

1. This is similar to other function while this part is relatively easy. We just add the following code in `notes.js` and export to be used in `app.js` in the handler to add "list" command. Therefore, we can give `node app.js list` to use the function.
   ```js
   const listNotes = () => {
     const notes = loadNotes();
     console.log(chalk.inverse("Listing the note!"));
     notes.forEach((note) => {
       console.log(chalk.blue.inverse(note.title));
       console.log(chalk.yellow.inverse(note.body), "\n");
     });
   };
   ```

### Reading a note

1. We rewrite the function of "**add**" in `notes.js` with array function `.find()` instead for `.filter()` to improve efficiency. The purpose is only to check if the given title has been in the array we are trying to find. However, `.filter()` method won't stop and will iterate through all the elements in the `Array`. If we have a huge dataset, this will dramatically reduce the efficiency. Therefore, we can use `.find()` method that the method will return the very first match of the element in the array. Since we don't have duplicate titles in this program, we can change to use `.find()` method to improve efficiency.
1. Similar to other functions, we can set up the commands in `app.js`.

   ```js
   // app.js
   yargs.command({
     command: "read",
     describe: "Read only mode",
     builder: {
       title: {
         describe: "Note title",
         demandOption: true,
         type: "string",
       },
     },
     handler(argv) {
       notes.readNote(argv.title);
     },
   });

   // notes.js
   const readNote = function (title) {
     const notes = loadNotes();
     const note = notes.find((note) => note.title === title);
     if (note) {
       console.log(`Reading Title: '${chalk.inverse(note.title)}'`);
       console.log(`${note.body}`);
     } else {
       console.log(chalk.red.inverse(`'${title}' is not found!`));
     }
   };
   ```

# Debugging Node.js

1. There are basically 2 types of erros
   1. Error thrown back to the console.
   1. Logical errors that don't crash the app but malfunciton.

### Debugging Node.js (Notes App)

1. Debuggers `console.log()`, `debugger`
   1. Use `console.log()` to debug by printing out certain variables or test function in terminal directly.
   1. Use `debugger` keyword, so the engine will stop the code at the point where we put the `debugger` in the script. Besides, we need to put another command `inspect` to make debugger works.
      1. In Mac or Linux OS, we can use `node inspect app.js add [title] [body]` for the command.
      1. In Windows OS, if we get a `Timeout` error in `comand prompt` or `PowerShell`, we can use `-brk` in the command as `node --inspect-brk app.js add [title] [body]`.
   1. Note that we don't give any command to terminal at this point and will switch to Chrome browser.
   1. Open Chrome browser and type `chrome://inspect/` in the search bar. We will get the option as "Remote Target". Note that this also works with WSL, tested on 2020/07/15. Besides, we can check with "**Configure**" in "**Devices**" section on the top. For example, `localhost: 9229` and `127.0.0.1:9229`.
   1. We then click "**inspect**" in the "**Remote Target**". Chrome will open another console for us to run debugger.
   1. We can use the navigator panel on the left to add the folder to this debugger console (though it's not neccessary).
      <img src="./chromeDebugger.png">
   1. After inspecting the program, we can type `restart` in terminal to resume the debugger in Chrome again.
   1. If we've finished and would like to quit, we can type <kbd>Ctrl + c</kbd> twice to leave node in the terminal.
   1. We can use the function to look into the variables by a closer look to identify the possisble issues when there's any problem with the program.

### Error Messages

1. Usually the very first line of the error message returns the critical info. that which part of the code is wrong. It also returns the line of the code in the file for programmers easier to locate.

# Asynchronous Node.js (Weather App)

### Asynchronous basics, call stack, callback queue, and event loop

1. A **call stack** is the where the regular sychronous functions stack up. Every task has its own execution context and scope and follow the order of "**first in last out**".
1. This part is the best to check the video and watch how the parts in the engine works together.
1. In short, "**async**" tasks are actually "**events**" and are API functions that will be put into another section when called.
1. "**event loop**" keeps checking if "call stack" has any task left and push the async tasks in the "**queue**" to execute.

### Making HTTP request

1. The course has changed to use [WeatherStack](https://weatherstack.com/), as the other "dark sky" isn't available anymore.
   1. We can register Weather Stack for free with 1,000 API calls per month without giving credit card.
   1. After registering, we will get an API key (32 characters), which should be kept carefully as other password.
   1. We can use browser search bar to connect the API at [http://api.weatherstack.com/](http://api.weatherstack.com/). There are mainly 5 endpoints from this API.
      1. Current Weather: Get current weather data.
      1. Historical Weather: Get historical weather data.
      1. Historical Time-Series: Get historical time-series weather data.
      1. Weather Forecast: Get weather forecast for up to 14 days.
      1. Location Lookup: Look up one or multiple locations.
   1. The paremeters setting is as "http://api.weatherstack.com/`?access_key=[yourAPIKey]&query=[latitude,longitude]`
   1. We can use ampersand "&" to connect the key/value pairs. It doesn't matter with the order given.
   1. For example, we can use http://api.weatherstack.com/current?access_key=[yourAPIkey]&query=37.8267,-122.4233 to check current weather at "**North Beach, California, USA**".
1. In the lecture, we use a npm package "[request](https://www.npmjs.com/package/request)" (`request` package is deprecated since 2020/02/11. However, we still use the package. Besides, we can use package [postman-request](https://www.npmjs.com/package/postman-request) or [axios](https://www.npmjs.com/package/axios) instead.)
1. When we set up npm in a project with `npm init` we can put a `-y` flag to give "yes" to all the questions in default to avoid inserting the info. manually.
1. We `require()` "**request**" package and use its methods. The `Object` takes 2 argument, which is the "**option**" that takes an `Object` and a callback function after we receive the data. Its syntax is `request(option, callbackFunction)`.

   1. In the "**option**", we can check all the avilable [options](https://www.npmjs.com/package/request#requestoptions-callback). It takes a property `json` that we can set it to `true`, so the package will parse JSON data automatically.
   1. The callback function also has 2 parameters `error` and `response`. `error` will catch and return the error message such as server status as `503` or `404`, while `response` is the data returned from the server.
   1. In this case, the `body` property` of the returned data (**response**) is the JSON file that we want to parse.

   ```js
   const request = require("request");

   const url =
     "http://api.weatherstack.com/current?access_key=[yourAPIKey]&query=37.8267,-122.4233";

   request({ url: url, json: true }, function (error, response) {
     // const data = JSON.parse(response.body);
     const data = response.body.current;
   });
   ```

### Customizing HTTP requests

1.  We can use Chrome extension (such as JSON formatter or JSON viewer) or other tools to visualize JSON data in a better format to read.
1.  This section is about how to parse the data from a JSON file.
1.  By reading the [documentation](https://weatherstack.com/documentation) from Weather Stack, we can learn to put different paremeters. For example, we can use ampersand `&` and add up key/value pair `unit=f` to change degree unit from Celsius to Fahrenheit. `http://api.weatherstack.com/current?access_key=[yourAPIKey]&query=37.8267,-122.4233&unit=f`.

### A HTTP request Challenge (Geocoding)

1. The user can just put an address in for the program to call a **Geocoding** API to search.
1. The Geocoding API should return a "**coordination**" with latitude and longitude.
1. We can put the coordinate as the parameter to be used to call "**Weather stack**" API to get the weather forecast or other data.

**Mapbox Geocoding**

1. In this case, we use [Mapbox](https://www.mapbox.com/) service for Geocoding. We can check the [API documentation](https://docs.mapbox.com/api/). Besides, we will use its ["Search Service"](https://docs.mapbox.com/api/search/).
1. On Mapbox, there are `forward geocoding` and `reverse geocoding`. We can check [Forward geocoding](https://docs.mapbox.com/api/search/#forward-geocoding) for the section.
   1. `forward` is to turn an address string to coordinate.
   1. `reverse` is to turn a coordinate to address string.
   1. We can check examples [here](https://docs.mapbox.com/api/search/#example-request-forward-geocoding)
   1. Here is the sample [JSON file]("https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWxsZW5saW45MCIsImEiOiJja2NvZGE3Y3QwM3JuMzBxaTV6Ym81eWV2In0.7nYUE26c5bCIpZFkOxPIpA")
1. There are some parameters would be useful in the case.

   1. `language` - We can change the returned language according to the user preference.
   1. `limit` - We can limit the related location returned back from the service. This default is 5 and can be set up to 10. Note that we use only 1 single address, so we can set this parameter as `1` in our case. With less data to be transferred, the process can speed up.
   1. For example, we set up limit to **1** and language to **traditional Chinese** `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWxsZW5saW45MCIsImEiOiJja2NvZGE3Y3QwM3JuMzBxaTV6Ym81eWV2In0.7nYUE26c5bCIpZFkOxPIpA&limit=1&language=zh-Hant`. The key token here is provided as the public one from Mapbox.

   ```js
   const request = require("request");

   const url = [
     "http://api.weatherstack.com/current?access_key=08d4f0c107bfb486eafb2bc98d318866&query=37.8267,-122.4233",
   ];

   request({ url: url, json: true }, function (error, response) {
     //   const data = JSON.parse(response.body);
     const data = response.body.current;
     console.log(
       `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out. `
     );
   });

   const geocodeURL = [
     "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWxsZW5saW45MCIsImEiOiJja2NvZGE3Y3QwM3JuMzBxaTV6Ym81eWV2In0.7nYUE26c5bCIpZFkOxPIpA&limit=1",
   ];

   request({ url: geocodeURL[0], json: true }, function (error, response) {
     const coord = response.body.features[0].center;
     console.log(
       `Coordinate of Los Angeles is Longitude: ${coord[0]}, Latitude: ${coord[1]}`
     );
   });
   ```

### Handling Errors

1. When there's an error, only the `error` argument of the callback function will have value. If can set up conditions to avoid crashing the program and return an useful message to users for better UX.
1. However, not only the `error` argument can return error, also the `response` from the server can be an error message as well. For example, we give wrong coordinate or other parameters as well, such as invalid token or address string.
1. In this case, we also check the `response.body` if its length is 0 which means there's no data returned from the API.

```js
request({ url: geocodeURL[0], json: true }, function (error, response) {
  if (error) {
    console.log("Unable to connect to Mapbox");
  } else if (response.body.features.length === 0) {
    console.log("No location match");
  } else {
    const coord = response.body.features[0].center;
    console.log(
      `Coordinate of ${response.body.features[0].text} is Longitude: ${coord[0]}, Latitude: ${coord[1]}`
    );
  }
});
```

### Callback Function

1. We tried to use `setTimeout()` function to simulate asynchronous functions. In this case, without using callback function, the function will be executed synchronously without waiting the return from the callback thus cause error. This is similar to put request for server and wait for its response, while regular synchornous part is non-blocking and executing without waiting for the data returned from the server. Therefore, we can use callback function which is a synchronous function that the function must wait for the data returned from the server to execute further of its tasks.

```js
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});

function add(num1, num2, callback) {
  setTimeout(function () {
    let sum = num1 + num2;
    callback(sum);
  }, 2000);
}
```

### Callback Abstraction

1. Though we can easily modularize the each request into functions, nested code isn't a preferable way to read and maintain.
1. URL takes "white space" and other none english characters as with specail forms. Therefore, when we pass the values to the URL, we need to use `encodeURIComponent()` function to convert the code. For example, a question mark `?` will be truned into `%3F`.

```js
const geocode = function (address, callback) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYWxsZW5saW45MCIsImEiOiJja2NvZGE3Y3QwM3JuMzBxaTV6Ym81eWV2In0.7nYUE26c5bCIpZFkOxPIpA&limit=1`;

  request({ url: url, json: true }, function (error, response) {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

geocode("Bangkok", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
```

### Callback Abstraction Challenge

1. We use the similar concept to write the code for `forecast` function by callback abstraction.

```js
function forecast(long, lat, callback) {
  const url = `http://api.weatherstack.com/current?access_key=[yourAPIKey]&query=${lat},${long}`;

  request({ url: url, json: true }, function (error, response) {
    const data = response.body.current;
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find the location", undefined);
    } else {
      callback(
        undefined,
        `${response.body.location.name}: ${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`
      );
    }
  });
}

module.exports = forecast;
```

### Callback Chaining

1. To ensure the function execute only after the data is returned from the server, we have to put it into its own function scope. If we keep the function separately, the function will be executed in regular synchronous context and will only get `undefined` data, as it doesn't wait for the data sent back.
1. We can use `process.argv[2]` or `process.argv.slice(2)` to get all the arguments as an `Array`. Therefore, users can pass argument(s) for locations to search upon request. For example, we can search for `Bangkok`

   1. Command in shell

   ```shell
   node app.js "Chiang Mai"
   ```

   1. JavaScript code

   ```js
   const request = require("request");
   const geocode = require("./utils/geocode");
   const forecast = require("./utils/forecast");

   const address = process.argv[2];

   geocode(address, (error, data) => {
     if (address === undefined) {
       console.log(`Please provide a location!`);
     } else {
       if (error) {
         return console.log(error);
       }
       forecast(data.longitude, data.latitude, (error, forecastData) => {
         if (error) {
           return console.log(error);
         }
         console.log(data.location);
         console.log(forecastData);
         // console.log("Error:", error);
         // console.log("Data:", data);
       });
     }
   });
   ```

### ES6 Aside: Object Property shorthand and destructuring

1. We can use the syntac shorthand to assign a variable and its value as the property of an `Object` directly.

   ```js
   // Object property shorthand
   const name = "Allen";
   const userAge = 30;

   const user = {
     name, // assign both variable name and value as property and value
     age: userAge,
     location: "Bangkok",
   };

   console.log(user);
   // { name: 'Allen', age: 30, location: 'Bangkok' }
   ```

1. We can also create variables from properties and their values from an `Object`. Therefore, instead of assigning variabls and extract values from the `Object` one by one, we can create the variables in an easier way. However, if we assign a variable that is not in the `Object`, the variable will have a value `undefined`.
1. We can assign the property with a new variable as well. Besides, if the property is not in the `Object`, we can assign with value an create the varible directly as well.

   ```js
   // Object destructuring
   const product = {
     label: "Red notebook",
     price: 3,
     stock: 201,
     salePrice: undefined,
   };

   // const label = product.label;
   // const stock = product.stock;

   const { label: productLabel, stock, rating = 5, score } = product; // assign label to productLabel
   console.log(productLabel, stock);
   console.log(score); // undefined
   console.log(rating); // 5
   ```

1. We can use destructuring feature to get an `Object` as argument and create variables in the function scope directly.

   ```js
   const product = {
     label: "Red notebook",
     price: 3,
     stock: 201,
     salePrice: undefined,
   };
   const transaction = (type, { label, stock }) => {
     console.log(type, label, stock);
   };

   transaction("order", product);
   ```

### Destructuring and Property Shorthand Challenge

1. This is only a styling and new syntax of writing the code. However, we can choose whether to apply or change to work in this way, as this can also make the code very confusing.
1. In `app.js`, we know `data` argument passed in the anonymous callback function is an `Object`. Besides, we are going to use its properties in the following code. Therefore, we can sue destructuring concept to turn its properties into variables that we can use in the following code. Note that we should use a default value (with an empty `Object`) to prevent program crashes if the input isn't correct.

   ```js
   geocode(address, (error, { latitude, longitude, location } = {}) => {
     if (address === undefined) {
       console.log(`Please provide a location!`);
     } else {
       if (error) {
         return console.log(error);
       }
       forecast(longitude, latitude, (error, forecastData) => {
         if (error) {
           return console.log(error);
         }
         console.log(location);
         console.log(forecastData);
       });
     }
   });
   ```

1. In `forecast.js`, `url` that passed to `request` function has the same property name and value, so we can use the shorthand to have only one there. `response` is an `Object` that carries all the data return from the server, and `body` is the main property we access and retrieve data. Therefore, we can use `{body}` to create a variable that is the same as `response.body` to use in the scope.

   ```js
   function forecast(long, lat, callback) {
     const url = `http://api.weatherstack.com/current?access_key=08d4f0c107bfb486eafb2bc98d318866&query=${lat},${long}`;

     request({ url, json: true }, function (error, { body }) {
       const data = body.current;
       if (error) {
         callback("Unable to connect to weather service!", undefined);
       } else if (body.error) {
         callback("Unable to find the location", undefined);
       } else {
         callback(
           undefined,
           `${body.location.name}: ${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`
         );
       }
     });
   }
   ```

1. In `geocode.js`, we can change `url` property and value as in `forecast.js`.

   ```js
   const geocode = function (address, callback) {
     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
       address
     )}.json?access_token=pk.eyJ1IjoiYWxsZW5saW45MCIsImEiOiJja2NvZGE3Y3QwM3JuMzBxaTV6Ym81eWV2In0.7nYUE26c5bCIpZFkOxPIpA&limit=1`;

     request({ url, json: true }, function (error, { body }) {
       if (error) {
         callback("Unable to connect to location services", undefined);
       } else if (body.features.length === 0) {
         callback("Unable to find location. Try another search", undefined);
       } else {
         const { center: center, place_name: location } = body.features[0];
         callback(undefined, {
           longitude: center[0],
           latitude: center[1],
           location,
         });
       }
     });
   };
   ```

### Bonus: HTTP requests without a library

1. Though we can make HTTP request thourgh `yargs` and `request` npm package, we can also use default funciton in JavaScript engine to make a HTTP request.
1. However, this method is not used in the following lecture but rather an introduction to the function.
1. We can check the modules in Node.js WebAPI. In this case, we will `HTTPS` as the websites we visit are using HTTPS.However, the Weather Stack API uses regular `HTTP` protocol.

   1. [HTTP request](https://nodejs.org/dist/latest-v14.x/docs/api/http.html)
   1. [HTTPS request](https://nodejs.org/dist/latest-v14.x/docs/api/https.html)

1. The module works in a low-level layer that we have to give more code to work on a single request. This is how npm package `request` can help us handle the complexity. Note that `http` object has a method `.on` which is similar to adding listener on the front-end for DOM.

   ```js
   const http = require("http");

   const url = `http://api.weatherstack.com/current?access_key=[yourAPIKey]&query=40,-75`;

   const request = http.request(url, (response) => {
     let data = "";
     response.on("data", (chunk) => {
       data = data + chunk.toString();
     });

     response.on("end", () => {
       const body = JSON.parse(data); // response body
       console.log(body);
     });
   });

   // Error handler
   request.on("error", function (error) {
     console.log("An error", error);
   });

   request.end();
   ```

# Web Servers (Weather App)

### Hello Express!

1. "**Express**" is a JavaScript library that allows developers to use Node.js to run a web server.
1. To initiate the server, we should use `require()` to import the package and call the `Object` to start using `express` library.
   ```js
   const express = require("express");
   const app = express();
   ```
1. We can use `.get()` method with a callback function to render and respond to the request from a user. In the callback function, `req` (request) and `res` (response) are 2 arguments named in convention for the purpose. This part is also about routing and navigation for users visiting the website.
1. We need to use `.listen()` method on a certain port to allow the server react to requests. This depends on the environment where we deploy the application. For local development purpose, we usually put the port at `3000`. Besides, we can print the message to let the IT (server maintainence) knows what's going on.

   ```js
   const express = require("express");
   const app = express();

   // this is the homepage
   app.get("", function (req, res) {
     res.send("Hello express!");
   });

   // listener
   app.listen(3000, function () {
     console.log("Server has started on port 3000");
   });
   ```

1. After starting the server, we can use browser and type `localhost:3000` to visit the server we just started.

### Serving up HTML and JSON

1. We can return not only `Strings` through `res.send()` to render on user's side but also return an `Array` or `Object`, `express` will automatically turn the data into a JSON file. For example, we can return HTML text or an `Array` or `Object` when users visit certain route.

   ```js
   app.get("", function (req, res) {
     res.send("<h1>Hello</h1>");
   });

   app.get("/help", function (req, res) {
     res.send([
       {
         name: "Allen",
         age: 30,
       },
       { name: "Mai", age: 26 },
     ]);
   });

   app.get("/about", function (req, res) {
     res.send('<h1 style="font-size: 100px">About Us</h1>');
   });

   app.get("/weather", function (req, res) {
     res.send({
       forecast: "Partly Cloudy",
       location: "Thailand",
     });
   });
   ```

### Serving up Static Assest

1. This is mainly used to create a simple, static website. However, use "**Github Page**" or "**Netlify**" is much easier that we can just push the files to Github and connect them to be shown on the page.
1. Though we can return HTML text through `res.send()` method in `app.get()` directly, this is not good for maintenance and management when the website is large and has lots of HTML elements.
1. Therefore, we can create another directory `public` (in convention) for the assets to keep the front-end files, such as HTML, CSS, and images. We then create `index.html` here, as the framework will use this file as the main HTML file.
1. After creating the file, we have to link and allow node to access the HTML file correct and return as the server side, However, we can't use "**relative path**" here but use "**absolute path**" of the machine instead.
1. We can use `console.log(__dirname)` and `console.log(__filename)` to check where the file we are executing at. By calling the variables, Node.js will return the absolute path of the directory which contains the `app.js` file we execute with the filename. (This can also be done by checking the "explorer" in VS Code by mouse right click on the file. We can either copy the relative or absolute path of a file.)
1. Since we will traversing between the directories on the server, we can use Node.js `path` package to work in out. In this case, we will use `path.join()` method to create a customize path.
   ```js
   console.log(__dirname === path.join(__dirname));
   // true
   ```
1. Since `app.js` is in the `src` folder, while `public` is in the parallel in root directory, we can use `../` to traverse back and get into `public` folder. However, this will make the root route invalid. Therefore, when users visit the website, the server only renders the static HTML file, while other routes can still work normally.

   ```js
   const path = require("path");
   const express = require("express");
   const app = express();
   const publicDirectoryPath = path.join(__dirname, "../public");

   app.use(express.static(publicDirectoryPath));

   // this route will not work
   app.get("", (req, res) => {
     res.send("<h1>This is the homepage</h1>");
   });
   ```

1. We can put other HTML files in the same directory as `index.html`, so users can type in the file name directly to access those pages from the root path.

### Serving up CSS, JS, Images, and More

1. In this case, we create a folder `css` and create `styles.css` for stylings for all the HTML files in the public page. Note that we should also use `<link>` tag to enable the styling to all HTML files.
1. Create `js` in the `public` folder and have another `app.js` to work with front-end programming. For this, we need to use `<script>` tag to apply this JavaScript code on the client side.
1. Create `img` in `public` folder and put the images in this directory.

### Dynamic Pages with Templating

1. We can use template engine to reuse the code that is used on every page, such as the header and footer. We can use `handlebars` package to work on any platform that we can use JavaScript.
1. However, we will use `hbs` which is another package that is powered by `handlebars` and easier to use.
1. After installing `npm install hbs`, we can use `app.set()` in the main `app.js`, so `express` knows which template engine we installed. The method takes 2 arguments as key/value pair. The first is the "**setting name**" and the "**value of setting**". In this case, we set it up as `app.set("view engine", "hbs")`. Note that `view engine` should be in the same case exactly. Thus, the `handlebars` module is ready.
1. The template should be place in `views` directory which is in the root folder. We then create a new file `index.hbs` and copy all the contents from `index.html` in `public` folder. Note that until this point, the home page is missing and we must set up the route in the main `app.js`. Besides, as we are return a whole file, we use `.render()` method rather than `.send()`. This is similar to use `ejs` system in express.
   ```js
   app.get("", function (req, res) {
     res.render("index");
   });
   ```
1. Besides, we can pass values through node to the template to create dynamic templating. `app.render()` can take a 2nd argument which is an `Object` that contains the value which we want to pass to the template.
   ```js
   app.get("", function (req, res) {
     res.render("index", {
       title: "Weather App",
       name: "Allen",
     });
   });
   ```
1. In the `hbs` file, we can use double curly braces `{{ value }}` to take the values that passed from the `Node.js`. Therefore, we can see the page use the contents provided from `app.js`.

   ```html
   <body>
     <h1>{{title}}</h1>
     <script src="js/app.js"></script>
   </body>
   ```

### Customizing the Views Directory

1. We can customize how handle bars are set up, so the `hbs` files can be used as template for the HTML structure with "**partials**" such as **header** and **footer**. We can change the location and name of the directory which stores the `hbs` files.
1. If we change the name of "**views**" directory to something else, `express` can't render the pages correctly, as it can't find the "**views**" directory. However, we can set up a new path for `express` to look up. In `app.js` we add a new path pointing to the new directory which is changed from `views` to `templates` with `path.join()` and pass it to `express` through `app.set()`.
1. We can check more information at [express](http://expressjs.com/en/4x/api.html#app.set) for `app.set()`.
1. Besides, we can also check for `res.render()` as the callback function in `app.get()` at [here](http://expressjs.com/en/4x/api.html#res.render).

   ```js
   // new directory keeps templates and partials
   const viewsPath = path.join(__dirname, "../templates");

   // change default directory from "views" to "templates"
   app.set("views", viewsPath);
   ```

### Advanced Templating

1. We modify the "templates" directory in the root directory again and add 2 more folders "**views**" which keeps the backbone HTML pages of each route and "**partials**" for the sharing elements. Besides, we need to import `hbs` module in `app.js` and update the path pointing to views and partials.

   ```js
   const path = require("path");
   const hbs = require("hbs");
   const viewsPath = path.join(__dirname, "../templates/views");
   const partialsPath = path.join(__dirname, "../templates/partials");

   hbs.registerPartials(partialsPath);
   ```

1. We can create a new `header.hbs` partial in `partials` folder. Then use double curly braces to import the template into the HTML file as other values. But we have to put a greater than sign `>` before the file name. Besides, we don't need to specify the suffix `.hbs`.

```html
<body>
  {{>header}}
</body>
```

1. However, since `nodemon` package only listen to changes on `app.js` when we run the program. Any other changes that related to file may not be caught and we have to restart the process again.
1. However, we can use `-e` (stands for extension) flag when execute `nodemon`, so the command becomes `nodemon src/app.js -e js,hbs` and `nodemon` will also listen and catch to any changes of both `app.js` and `hbs` files. Note that we must be at the root directory and execute `app.js` with `nodemon src/app.js -e js,jbs` to make it owrk.
1. In `app.js`, we then can pass values to `header.hbs` to allow the page render dynamic rather than static contents. We then can change the `<h1>` tag in `header.hbs` to `<h1>{{title}}</h1>`, so every page will have its own title. For example, we can also add `<a>` tags for navigation between pages.

   1. `header.hbs`

   ```html
   <h1>{{title}}</h1>

   <div>
     <a href="/">Weather</a>
     <a href="/about">About</a>
     <a href="/help">Help</a>
   </div>
   ```

   1. `footer.hbs`

   ```html
   <footer>
     Created by {{name}}
   </footer>
   ```

  <img src="expressDirectoryWithHBS.png">

### 404 Pages

1. This can be a custom page when a user give the URL that is not existing in our domain or routes. For example, when we try to access with `localhost:3000/me` which is not a valid route, the server will return a message that by `express` that `cannot GET /me` which means the file doesn't exist.
1. We can set another route with `app.get()` method with the wildcard character asterisk `*` which stands for all the routes that is not given above. Note that this must the route set in the last before `app.listen()`. Otherwise, it will capture all the other routes as wildcard takes all.

   ```js
   app.get("*", function (req, res) {
     res.send("Page 404");
   });
   ```

1. Besides, not only for the overall command route that we can use wildcard to catch up but the sub-directories of certain categories. For example, we have some articles under the `help` page. When users access the directory, we know that they are trying to find something for "**help**". Therefore, we can use the wildcard character and render customized message for this specific condition. This concept can be used in the other categories as well.

   ```js
   app.get("/help/*", function (req, res) {
     res.render("404", {
       title: "404",
       error: "help article not found.",
       name: "Allen",
     });
   });

   app.get("*", function (req, res) {
     res.render("404", {
       title: "404",
       error: "This page doesn't exist.",
       name: "Allen",
     });
   });
   ```

### Styling the Application: Part 1 and Part 2

1. This part is mainly about styling and front-end decorations of the App. I merged the note and skip explanantion of how CSS works.
1. This part uses `flex-grow: 1` on the `<div>` tag, which can make the element "**grow**" and takes much space as it needs. In this case, it means that the element should take over all the whitespace left in between the page, as other elements have no such property and have their own fixed space.
1. We can use a PNG image file and import it as `icon` with `<link>` tag in `<head>` tag in the HTML file. This works similar to favicon that gives a small icon on the tab on the browser when opening the webpage.

   1. HTML

   ```html
   <head>
     <link rel="icon" href="/img/weather.png" />
   </head>
   ```

   1. CSS

   ```css
   body {
     color: #333;
     font-family: arial;
     max-width: 650px;
     margin: 0 auto;
     padding: 0 1rem;
     display: flex;
     flex-direction: column;
     min-height: 100vh;
   }

   .main-content {
     flex-grow: 1;
   }

   footer {
     color: #888;
     border-top: 1px solid #eee;
     margin-top: 1rem;
     padding: 1rem 0;
   }

   header {
     margin-top: 1rem;
     margin-bottom: 3rem;
   }

   h1 {
     font-size: 4rem;
     margin-bottom: 1rem;
   }

   header a {
     color: #888;
     margin-right: 1rem;
     text-decoration: none;
   }

   .protrait {
     width: 250px;
   }
   ```

# Accessing API from Browser

### The Query String

1. The target of this section is to allow users use UI in browser to access data from the API rather than typing in the command line directly.
1. We will update the route for the following code. Rather than returning back a mock up JOSN data, we will call the API and return the data according to user input.
   ```js
   app.get("/weather", (req, res) => {
     res.send({
       forecast: "Killer Sun",
       location: "Central Bangkok",
     });
   });
   ```
1. We create another endpoint (`products` is for testing purpose) for users to access the server and return JSON data. (In this case, I duplicate the folder to separate the projects. The new one is called `accessAPI`). Besides, when user access the endpoint, they can give additional parameters on the URL in `key/value` pair. For example, users can access this with `localhost:3000/products?search=games` to search for "**games**".In addition, user can give additional parameters by concatenate the arguments with ampersand `&`, such as `localhost:3000/products?search=games&rating=5`.
1. The passed paramters lies in the `req` parameter in the call back function on its `query` property. In this case, as we passed `?search=games&rating=5`, `req.query` returns an `Object` with the key/value pairs.

   ```js
   app.get("/products", (req, res) => {
     console.log(req.query); // print the parameters given in URL.
     // { search: 'games', rating: '5' }
     res.send({
       products: [],
     });
   });
   ```

1. During development, we may accidently respond to the client multiple times which is not allowed by HTTP protocol. Therefore, if we see an error message as `Cannot set headers after they are sent to the client`, it means we try to respond to client more than one time. For this case, we can either
   1. Use `return` to stop the process at the point. This is the usual solution for the case.
   1. Put the code in `else` statement to prevent executing.
1. With the similar concept, we update the `weather route` with the strucutre to catch error and return a JSON according to user input.
   ```js
   app.get("/weather", function (req, res) {
     if (!req.query.address) {
       return res.send({
         error: "You msut provide a valid address",
       });
     }
     res.send({
       forecast: "It's partly couldy.",
       address: `${req.query.address}`,
       location: "Thailand",
     });
   });
   ```
1. We integarte the `geocode.js` and `forecast.js` into the code to connect the API and react to the input from user.

   ```js
   const geocode = require("./utils/geocode");
   const forecast = require("./utils/forecast");

   app.get("/weather", function (req, res) {
     if (!req.query.address) {
       return res.send({
         error: "You msut provide a valid address",
       });
     }
     const address = req.query.address;
     geocode(address, function (error, { latitude, longitude, location } = {}) {
       if (error) {
         return res.send({
           geocodeError: `${error}`,
         });
       }
       forecast(longitude, latitude, (error, forecastData) => {
         if (error) {
           return res.send({
             forecastError: `${error}`,
           });
         }
         return res.send({
           forecast: forecastData,
           address: address,
           location: location,
         });
       });
     });
   });
   ```

### ES6 Aside: Default Function Parameters

1.  We can set up default value for the parameters if they are not given when called. Besides, the default value can be any type, from primitive to functions, arrays, or object.

    ```js
    const greeter = function (name = "user", age) {
      console.log("Hello " + name);
    };

    greeter("Allen"); // Hello Allen
    greeter(); // Hello user
    ```

1.  Therefore, in the `app.js` we can set the default value for destructured `Object` variables with an empty `Object` to prevent the program crashes when the argument isn't given correctly. In the example, we give a default value for the parameter in callback function with an `Object`. Therefore, though user doesn't provide the `address`, the callback function will get an empty object rather than causing the program crashes.
    ```js
    geocode(address, function (error, { latitude, longitude, location } = {}) {
      if (error) {
        return res.send({ geocodeError: `${error}` });
      }
      forecast(longitude, latitude, (error, forecastData) => {
        if (error) {
          return res.send({ forecastError: `${error}` });
        }
        return res.send({
          forecast: forecastData,
          address: address,
          location: location,
        });
      });
    });
    ```

### Browser HTTP Requests with Fetch

1. We have been using npm `request` package and backend program to call the API and return data to user. In this seciton, we will work on front-end part and call the API to get data directly without backend program. In this case, we work on `app.js` which is in `js` in `public` folder that is bond with `index.hbs`. Note that this works on the front-end part direclty without Node.js and `express` framework. Besides, this front-end code uses `fetch()` function which is a WebAPI available in modern browsers. The function is not available on Node.js, so we use `request` or other packge for the job.
1. We can put the following code in the client side JavaScript and fetch to collect the returned info. from API call in the other route as returning a JSON data.
   ```js
   fetch("http://localhost:3000/weather?address=boston").then(function (
     response
   ) {
     response.json().then(function (data) {
       if (data.error) {
         return console.log(data.error.info);
       }
       console.log(data.location);
       console.log(data.forecast);
     });
   });
   ```

### Creating a Search Form

1. This part is creating the form element in `index.hbs` to allow user insert data and interact with the weather stack API from the back-end. We create a `<form>` tag in `index.hbs`.

   ```html
   <form action="">
     <input type="text" placeholder="Location" />
     <button>Search</button>
   </form>
   ```

1. In front-end JavaScript, `app.js`, we add DOM and event listener to interact with the elements. Note that when we `submit` a form with data, the browser will send it as a HTTP action such as `GET` or `POST` which is an attribute given in the `<form>` tag and refresh the page. This is default feature of `submit` event to a `<form>`. Note that data (user input) in the `<input>` tag will also be cleared out.
1. However, we can have a parameter `event` or `e` in convention with `preventDefault()` method to prevent the page being refreshed and clear the input.

   ```js
   const weatherForm = document.querySelector("form");
   const search = document.querySelector("input");

   weatherForm.addEventListener("submit", function (event) {
     event.preventDefault();
     const location = search.value;
     if (!location) {
       return console.log(`You didn't give a valid address!`);
     }
     fetch(`http://localhost:3000/weather?address=${location}`).then(function (
       response
     ) {
       response.json().then(function (data) {
         if (data.error) {
           return console.log(data.error.info);
         }
         console.log(data.location);
         console.log(data.forecast);
       });
     });
   });
   ```

### Wiring up the User interface

1. In this case, we use DOM with `.textContent()` method to render the data send back from the API and show on the HTML elements. Besides, we can change the content to `loading` right before the async function or `fetch()` function.

   ```js
   console.log("Client side JavaScript file is loaded!");

   const weatherForm = document.querySelector("form");
   const search = document.querySelector("input");
   const messageOne = document.querySelector("#message-1");
   const messageTwo = document.querySelector("#message-2");

   weatherForm.addEventListener("submit", function (event) {
     event.preventDefault();

     const location = search.value;

     if (!location) {
       return console.log(`You didn't give a valid address!`);
     }

     messageOne.textContent = "Loading...";
     messageTwo.textContent = "";

     fetch(`http://localhost:3000/weather?address=${location}`).then(function (
       response
     ) {
       response.json().then(function (data) {
         if (data.geocodeError) {
           messageOne.textContent = data.geocodeError;
         } else {
           messageOne.textContent = data.location;
           messageTwo.textContent = data.forecast;
         }
       });
     });
   });
   ```

1. We also put some decoration on the page.

   ```css
   input {
     border: 1px solid #ccc;
     padding: 0.5rem;
   }

   button {
     cursor: pointer;
     border: 1px solid #888;
     background: #888;
     color: #fff;
     padding: 0.5rem;
   }
   ```

    <img src="weatherApp.gif">

# Application Deployment

1. We will use the following tools
   1. Git
   1. Github
   1. Heroku

### Joining Github and Heroku

1. This section is about introducing the platform and registration.
1. We can use `heroku cli` to work with heroku in terminal. Check [here](https://devcenter.heroku.com/articles/heroku-cli). However, this is not available with Ubuntu in WSL. Therefore, we will use Windows version instead.
1. After installing, if Windows an error message about setting up path, we can set the environment ourselves with <kbd>win + q</kbd> and search for `Edit the system environment variables` and check system variabls in the global scope and find the property `path` and edit the path with `C:\Program Files\heroku\bin` with default filepath. This path is pointing to the cmd file in the directory.
1. We then can follow the instructions to set up and use Heroku CLI. We firstly use `heroku login` which will open the browser and allow the user to login in a web-based GUI.
1. After loggin in, we can use `heroku auth:whoami` to check login status.

### Version control with Git, Exploring Git, and Integrating Git

1. This section is introducing and explaining why Git is useful and scenarios for version control.
1. A hint here is to ensure that Windows users must install `Git Bash` when installing Git.
1. There 4 stages in Git version control flow
   1. Untracked files
   1. Unstaged Changes
   1. Staged Changes
   1. Commits
1. We can use `git add .` to add all the files in the repository which are either `untracked` or `unstaged` to `staged`.
1. After stagging, we can use `git commit -m 'message'` to make a commit version.

### Setting up SSH Keys

1. `SSH` stands for "**Secure Shell**" which allows machines talk to other machines in a secure way.
1. As we have to use windows command prompt to access heroku, I didn't use WSL to generate SSH. We can use `Git Bash` which takes similar bash commands in Windows OS. Besides, we have to ensure that we are on the root directory of the program.
1. We firstly check if we have generated any SSH in the OS by `ls -a -l ~/.ssh`. This means in the root folder of the machine should there be a "**hidden**" (similar to .git) `.ssh` folder. If there's nothing we can generate a new one
1. In this course, we use `ssh-keygen -t rsa -b 4096 -C "your@email.com"`
   1. `ssh-keygen` is the command to generate the key.
   1. `-t rsa -b 4096` is the flag and to mention the algorithm we use (`rsa`) with `4096` bits `-b`
   1. `-C` note that this flag must be in uppercase to make comment to the SSH key. In this case, we use the email we login to the services.
1. After the command, the program will ask us for 3 questions, we can just keep clicking <kbd>enter</kbd> and skip it.
1. After the process, we can check with `ls -a -l ~/.ssh` and see a new SSH is generated. There will be 2 files, `id_rsa` (which is a secret file that we DO NOT share to anyone and kept locally on the machine.) and `id_rsa.pub` (which is a public file that we will share on Github and heroku).
1. We then use `eval $(ssh-agent -s)"` in Git Bash. Note that if we use MacOS or Linux, we should wrap the `$()` with double qoutes as `eval "$(ssh-agent -s)"`. We will get a `Agent pid xxxx` where `xxxx` is a series of number.
1. After getting the `Agent pid`, we use `ssh-add ~/.ssh/id_rsa` (Note that if we use MacOS, we should use flag `-K` where K is uppercase, as `ssh-add -K ~/.ssh/id_rsa`. However, **DO NOT** use `-K` on Git bash on **Windows or Linux**.). After the command, the terminal should return the following status that the identity is added.
   ```shell
   Identity added: /c/Users/ht016/.ssh/id_rsa (your@email.com)
   ```

### Pushing code to Github

1. The regular process of pushing code from local to remote is skipped, as the concept is similar and I've learnt in the other courses.
1. This course is special that it introduces SSH settings. On Github, we can go to setting > SSH and GPG keys.
1. In Git Bash, we can use `cat ~/.ssh/id_rsa.pub` to check the contents of `id_rsa.pub` and upload it to Github.
1. After adding the public key to Github, we can use `ssh -T git@github.com` (T is captial!) to check if it's working. Note that the command must be given in Git Bash rather than in WSL, as it's not working. This process is mainly to test if the connection is working.
1. If the process succeed, it will return a welcom message with the user email on Github.
1. Note that though SSH is useful for one time setup, we still can use HTTP protocol and login with username and password in terminal directly when we'd like to authenticate the machine and pull/push the data to and from the repository.

### Deploying Node.js to Heroku

1. In Heroku, adding the public key is relatively simple that we can just type `heroku key:add` in command line. Note that in this case, we use Windows command prompt (or PowerShell), as we can't install Heroku CLI in WSL. Heroku CLI will check the folder and find the available public key(s) it self. After that we type `yes` and allow Heroku CLI upload the public key.
1. We then change directory to the weather app root folder and use `heroku create [appName]`. Note that this app name must be unique accross the platform. In the case, we can use something like `username-weather-app`. If we don't provide a name, Heroku will generate one for us which would be confusing. I had the other project didn't set up the name, and Heroku creates a zen-feeling project name. If the name is taken, it will return in the termianl as well.
   ```shell
   Creating ⬢ allen-weather-application... !
   !    Name allen-weather-application is already taken
   ```
1. In this case, I get a project name as "**peaceful-reef**". Heroku will then return 2 URLs,
   1. 1st is the URL to access the app as a user.
   1. 2nd is the remote repository which we push the code to.
   ```shell
   Creating app... done, ⬢ peaceful-reef-31804
   https://peaceful-reef-31804.herokuapp.com/ | https://git.heroku.com/peaceful-reef-31804.git
   ```
1. After the initial setup and before we push the code to Heroku, we should check the `package.json` to ensure Heroku knows the environment config that we used to develop and execute the app.
1. In `package.json`, we can check `scripts` property that there's a `test` property by default. We then change the line to `"start": "node src/app.js"` to let Heroku knows how to execute the code. We can test this with `npm run start`. This is similar to use Sass CLI compiler package and other npm package in the terminal.
1. We need to change the port value of `app.listen()` in `app.js`. `3000` is for the local port and Heroku has its own setting. Therefore, we can use `process.env.PORT` which (PORT are all capital) to get the port value from its environment variable on Heroku. Note that we can use logical OR `||` for the port value, as we still can use the same code for local development. If the environment variable is not given, the code will use `3000` instead. Therefore, we don't need to keep changing the port value according to environment.
1. Besides, the main `app.js` for Node.js to execute, we should change the front-end `app.js`, as it will fetch the data as well. This part is relatively simple that we just remove the `https://localhost:3000/` and leave only the weather path and parameters. This is the relative path that HTML will find the files accordingly.
1. In summary, there are 3 parts required to update
   1. `script` property in `package.json` to `"start": "npm run src/app.js"`
   1. Port value with `process.env.PORT` in `app.js`.
   1. The URL for `fetch()` API to parse of the front-end code.
1. When setting up Heroku, we have added the remote repository as well. We can check with `git remote`, and there should be 2 remote repo
   1. Github
   1. Heroku
1. We then use `git push heroku master` to upload the files and code to Heroku. Then we can access from the URL which just given after we use `heroku create`.

### New Feature Deployment Workflow

1. The process is similar and easier after first config with Github and Heroku.
1. We can use regular Git workflow to staged and commit the version and push the version to both Heroku and Github.

### Avoiding Global Modules

1. In `package.json`, we can create a `dev` property in `scripts` and have the execution command, such as `nodemon src/app.js -e js,hbs`. Therefore, we can use the shorthand `npm run dev` to run the execution command easily.
1. For example, we install `nodemon` package globally, but other developers may not know which package has to be installed. Besides, we can't use `nodemon` package with local package installation. Therefore, we can use npm `scripts` to run the command we prefer.
1. When installing `nodemon` we can use `npm i nodemon --save-dev`, so `nodemon` will be installed as `devDependencies`. We can then use `npm run dev` as we setup to run the code we prefer locally. Besides, this will not affect to the production version, as it is separated from `npm run start`.
   ```json
   {
     "name": "web-server",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "start": "node src/app.js",
       "dev": "nodemon src/app.js -e js,hbs"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "dependencies": {
       "express": "^4.16.4",
       "hbs": "^4.0.1",
       "request": "^2.88.2"
     },
     "devDependencies": {
       "nodemon": "^2.0.4"
     }
   }
   ```

# MongoDB and Promises (Task App)
### MongoDB and NoSQL database 
1. The main difference between SQL and NoSQL database is that SQL is database is more like a "table" (taking Excel or Google Sheet for example) which has several elements 
    1. Column (field) - The trait or feature that the instance should have in SQL, this can only has value or be `null` ("empty") that the instance in the same table should have exactly the same columns. However, for NoSQL database, the instances may have different number of fields in the same "**collection**" 
    1. Row (Document) - This is an instance in the table. In SQL, a row stands for an instance that it must has its columns fill up (either has value or be empty that has `null`). While NoSQL is more than JSON data that each instances be stored in `Arrays` or `Object` 
    <img src="diffDB.png">

### Installing MongoDB on Mac and Linux
1. We can follow the instructions as the followings to install MongoDB in WSL. Though it mentions that MongoDB is not available on WSL, we still can install and use it locally. 
    1. Import the public key used by the package management system
    ```shell
    wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
    ```
    1. Check the version of Ubuntu installed on WSL and create a list file for MongoDB. Note that the command is different for Unbuntu 18.04 (Bionic) and 16.04 (Xenial).
    ```shell 
    # check verions 
    cat /etc/issue
    # Ubuntu 18.04.4 LTS \n \l

    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
    ```
    1. Reload package database 
    ```shell
    sudo apt-get update
    ```
    1. Install the MongoDB packages 
    ```shell 
    sudo apt-get install -y mongodb-org
    ```
    1. Add the `data/db` directories. Note that we must get back to home directory with `cd ~` and it's better to check with `pwd` to ensure we are on the correct path. The `-p` flag means that if the parent directory `data` doesn't exist, just create it. 
    ```shell
    cd ~
    pwd #/home/<user>/

    #create a directory for database 
    sudo mkdir -p data/db
    ```
    1. Start `mongod` in WSL Ubuntu. Note that we can't share the database between WSL and Windes and must separate each of them. Thus, we use `--dbpath` to the directory we just created. If it goes well, we can open another terminal and run `mongo` to start using database in WSL. Besides, we can set a shortcut alias as `alias mongod="sudo mongod --dbpath ~/data/db"`. Otherwise, the default `mongod` will point to the path of db folder in Windows OS which can't be used in WSL.
    ```shell
    sudo mongod --dbpath ~/data/db

    #set up shortcut 
    alias mongod="sudo mongod --dbpath ~/data/db"
    ```
    1. If everything works, `mongod` should return `[initandlisten] waiting for connections on port 27017`.

    1. [Install MongoDB with WSL for Windows](https://github.com/michaeltreat/Windows-Subsystem-For-Linux-Setup-Guide/blob/master/readmes/installs/MongoDB.md)
    1. [MongoDB Official](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

### Installing Database GUI viewer
1. We can use the GUI from Robo which was "**Robomongo**" for the GUI control (this is simialr to php MySQLAdmin). 
1. Download the protable version from [Robo 3T](https://robomongo.org/download). 
1. Though WSL and Win10 can't share the same database directory, both of them use localhost `127.0.0.1` on port `27017`, so we can just access each of them with the same connection config. 
    <img src="robo3tshell.png">
1. We can type in `db.version()` to and click the green play button on the top to check the version of MongoDB installed on the machine. 
1. MongoDB uses commands as OOP in JavaScript. Besides, it's data structure is refered to JSON, so it's relatively easy to understand. 
1. We can use <kbd>Ctrl + r</kbd> to refresh the page with latest data in the database or colleciton. 

### Connecting and Inserting Documents via Node.js
1. We can check the documentation of Mongodb commands and API methods at [here](http://mongodb.github.io/node-mongodb-native/3.1/api/). We check on version 3.1 in this case. 
1. We need to use a npm package `mongodb` for the project. (The instructor use version 3.1.10, but npm noticed that there's a risky issue, so I update it to the latest version.) Besides, we learnt how to use another package `mongoose` in web development bootcamp as another ODM (Object Data Mapper). 
1. We create a `mongodb.js` and import `mongodb` package to use the FS file to manipulate with the database. There several steps to configure and get ready to use the database. 
    1. Import `mongodb` npm package 
    1. Create a `MongoClient` which is generated from `.MongoClent` property and use `.connect()` method to connect. 
    1. `.connect()` method takes 3 parameters
        1. The `path` of the database we connect to. We can use MongoAtlas to connect to a remote one in the future. However, we should be very careful about security issues for remote connections.  
        1. An `options object` to allow `useNewUrlParse: true`, so the engine will use new URL parser. However, this could be changed in the future, as by the time running this code, Node.js returns that the "current server discovery and monitoring engine is deprecated". 
        1. A `callback function` that we can put CRUD commands to the database. 
    1. In the callback function, we can set up a simple error handler, and use the 2nd argument of the callback function to access to database in MongoDB. In the database, we can access to different `collections` which are similar to `tables` in regular SQL database. 
    1. For example, after accessing a collection, we can use `.insertOne()` method to create a new instance in the collection. 
    1. Note that `.insertOne()` is actually an `async` function that we should use callback function to check if the process completes correctly. 
    ```js 
    // CRUD create read update delete
    const mongodb = require('mongodb');
    const MongoClient = mongodb.MongoClient

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'task-manager';

    MongoClient.connect(connectionURL, { useNewUrlParser: true, }, function (error, client) {
        if (error) { return console.log('Unable to connect to database', error); }

        const db = client.db(databaseName);

        db.collection('users').insertOne({
            name: 'Allen',
            Age: 30,
        });
    });
    ```

### Inserting Documents (Create Data)
1. From the last section, we can give a callback function to `.insertOne()` method as it's actually an `async` function, so we can handle and check the process if it runs correctly. We can use check on the [API documentation](http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#~insertOneWriteOpResult) of MongoDB to learn what are the methods and arguments stand for. 
1. After learning inserting only 1 data at the time, we can look up `.insertMany()` to create multiple data in the database at the same time. According to the [documentation](http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#insertMany), the first argument that `.insertMany()` takes is an `Array`. 
    ```js 
    // CRUD create read update delete
    const mongodb = require('mongodb');
    const MongoClient = mongodb.MongoClient

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'task-manager';

    MongoClient.connect(connectionURL, { useNewUrlParser: true, }, function (error, client) {
        if (error) { return console.log('Unable to connect to database', error); }

        const db = client.db(databaseName);

        // db.collection('users').insertOne({
        //     name: 'Allen',
        //     age: 30,
        // }, function (error, result) {
        //     if (error) return console.log('Unable to insert user');

        //     console.log(result.ops);
        // });

        // db.collection('users').insertMany([
        //     {
        //         name: 'Jane',
        //         age: 25,
        //     },
        //     {
        //         name: 'John',
        //         age: 40,
        //     },
        // ], function (error, result) {
        //     if (error) return console.log(`Can't insert multiple data`, error);

        //     console.log(result.ops);
        // })

        db.collection('tasks').insertMany([
            {
                description: 'Buy groceries',
                completed: false,
            },
            {
                description: 'Do house works',
                completed: true,
            },
            {
                description: 'Wash the car',
                completed: false,
            },
        ], (error, result) => {
            if (error) return console.log(`Can't insert many data to "tasks" colleciton`, error);
            console.log(result.ops);
        })
    });
    ```

### The Object ID
1. Each instance in the data collection will have a unique ID. In SQL data, each records has an incrementing ID that starts from 1. However, in MongoDB, it uses GUID, which stands for global unique ID. Such feature allows MongoDB being scalable. As the IDs are unique, objects won't have ID collisions when querying for data. For example, we have `user` collection in 2 collections with the same ID. The instance will have collision when the engine tries to retrieve data. Note that this `GUID` is created by `mongodb` npm package rather than the database engine itself. 
1. We can check [here](https://docs.mongodb.com/manual/reference/method/ObjectId/) for documentation about how a GUID is generated. Besides, we can rewrite the code with deconstructor to import and create a variable for `Object` methods directly. 
    ```js     
    const { MongoClient, ObjectID } = require('mongodb');
    // the same as the followings
    // const mongodb = require('mongodb');
    // const MongoClient = mongodb.MongoClient;
    // const ObjectID = mongodb.ObjectID;
    ```
1. The `ObjectID` is a class that we can generate new GUID from this method. Besides, it has it's own method that allow us to check with its timestamp (when the `id` is created). Besides, though Mongodb will generate the GUID automatically for the new instances by default, we still can give the value when generating an instance. This part is essential for understanding what's going on when using ID to query data in the database. 
    ```js
    const { MongoClient, ObjectID } = require('mongodb');
    const id = new ObjectID();
    console.log(id);
    console.log(id.id.length); // 12 
    console.log(id.toHexString()); //the same as the result from id
    console.log(id.toHexString().length); // 24
    console.log(id.getTimestamp()); 
    ```

### Querying Documents (Read Data)
1. We are going to explore `.find()` and `.findOne()` method in this section. 
    1. We can use `.find()` method to create filter-like query to parse and let the database return those data fit to our given conditions, such as if `age` is greater than `25`. 
    1. By using `.findOne()`, we can fetch a single data from the database. 
1. When using query methods such as `.findOne()`, the program returns `null` rather than an error if the data isn't found from the database. Besides, if there are more than one data match the condition(s), and we use `.findOne()` method, only the very first data that matches the conditions will be returned. The method takes 2 arguments to query 
    1. `Object` with fields to search  
    1. `Callback` function to handle the result. 
1. If we use the GUID string to search for the result directly, we can't find the match as in different type of format. In robo 3T, we can see that the GUID is wrapped with `ObjectID('<GUID>')`, as it's easier for programmer to check what's the value. Therefore, if we'd like to query a data by its GUID, we should use `new ObjectID(<GUID>)` and pass the string. 
    ```js
    const { MongoClient, ObjectID } = require('mongodb');
    MongoClient.connect(connectionURL, { useNewUrlParser: true, }, function (error, client) {
      if (error) { return console.log('Unable to connect to database', error); }

      const db = client.db(databaseName);

      db.collection('users').findOne({ _id: '5f1a9cf642b7cf037c6ca2d2', }, function (error, user) {
          if (error) return console.log('Unable to fetch');
          console.log(user); // null 
      });

      db.collection('users').findOne({ _id: new ObjectID('5f1a9cf642b7cf037c6ca2d2'), }, function (error, user) {
          if (error) return console.log('Unable to fetch');
          console.log(user); // {_id: '5f1a9cf642b7cf037c6ca2d2', name: 'Allen', age: 30}
      });
    });
    ```
1. `.find()` method is a different story, as it takes an argument as `Object` of query fields and returns a curosr pointing to the data in the database rather than the data itself. Therefore, we can use the cursor to work on other features, such as limit the number of returned result, number of total data in the collection that match the given conditions. We can check the properties and methods of a [cursor](http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html). There's an useful method, which is `.toArray()` that turns the dataset into an `Array`.
    ```js
    // CRUD create read update delete
    const { MongoClient, ObjectID } = require('mongodb');

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'task-manager';

    MongoClient.connect(connectionURL, { useNewUrlParser: true, }, function (error, client) {
        if (error) { return console.log('Unable to connect to database', error); }

        const db = client.db(databaseName);    

        db.collection('tasks').findOne({ _id: new ObjectID('5f1a86d8aa88ef02fd1b5d56') }, (error, data) => {
            console.log(data);
        });

        db.collection('tasks').find({ completed: false, }).toArray((error, tasks) => {
            tasks.forEach((task) => {
                console.log(task.description);
            });
        });
    });
    ```

### Promises 
1. When working with MongoDB methods, they are actually `async` functions that based on `Promises`. 
1. `Promises` are `Objects` that we can call `.then()` or `.catch()` method to handle the result returned from a `async` function. This turns out to be more manageable, as the sequence for error and result handler are critical by using callback functions, and that can be very confusing when the layers increase. 
1. A `Promise` takes 2 function `resolve` and `reject`. By the result of the `async` function only one of them can be trigerred. 
```js 
// Async Promises
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Things went wrong'); // trigerred
        reject('Error wrong'); // doesn't work 
        resolve([7, 4, 1]); // doesn't work 
    }, 2000);
});

doWorkPromise.then((result) => {
    console.log('Success', result);
}).catch((error) => {
    console.log('Error', error);
})

// Async Callback
const doWorkCallback = function (callback) {
    setTimeout(function () {
        // callback('This is my error!', undefined); // result and error 
        callback(undefined, [1, 4, 7]); // error and result
    }, 2000)
}

// sequence of passing error and result is critical and can be confusing
doWorkCallback(function (error, result) {
    if (error) {
        return console.log(error);
    }
    console.log(result);
})
```

### Updating Document 
1. Similar to `.find()` method, we can use `.updateOne()` or `.updateMany()` to update the data in a collection. Note that there's a method `.update()` that is deprecated and will be removed in the future. 
1. [`.updateOne()`](http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#updateOne) takes 2 main arguments `filter` and `update`. The method can `options` and a `callback` function in addtion, while we don't use them in this case. Note that if the `callback` is not passed to the method, the method will return a `Promise`. 
    1. `filter` is to locate the data that we want to manipulate. 
    1. `update` is the data that we want to update to the entity selected by the `filter`. However, we can't pass the the new data to this `Object` as changing the value of the properties. We have to use [`update operators`](https://docs.mongodb.com/manual/reference/operator/update/), such as `$set`. 
        1. These `update operators` start with a dollar sign `$`. In practice, `$set` and `$inc` (increment) are the frequently used operators.
        1. By using the operator, we can have explicit operations on the fields without affecting other fields of the instance. For example, if the instance we are going to modify has 2 fields `name` and `age`, with the operators the fields which we don't select will not be affected. As regular `Object` the properties will be removed if we don't assign the same property/value pair back to the `Object`. 
    ```js 
    const { MongoClient, ObjectID } = require('mongodb');

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'task-manager';

    MongoClient.connect(connectionURL, { useNewUrlParser: true, }, function (error, client) {
        if (error) { return console.log('Unable to connect to database', error); }

        const db = client.db(databaseName);

        db.collection('users').updateOne({
            _id: new ObjectID('5f1a806aa0f165023b9fa356')
        }, {
            $set: {
                name: 'Mike',
            },
            $inc: {
                age: 1,
            },
        }).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error)
        });
    });
    ```
1. We tried to use `.updateMany()` method in the callenge. The deadly mistake is that I forgot to change the name of `collection` that we are going to modify. (We were modifying `tasks` collection for the case). This method works similar to `.updateOne()`, while `.updateMany()` modifies all the instances that matches the given condition in the `filter` all at once. 
1. Note that in the `.then()` method we try to return the result, but it's a large `Obejct` that contains too much info. for the case. Therefore, we only retrive the `.modifiedCount` property to check how many instances are modified. 
    ```js 
    const { MongoClient, ObjectID } = require('mongodb');

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'task-manager';

    MongoClient.connect(connectionURL, { useNewUrlParser: true, }, function (error, client) {
        if (error) { return console.log('Unable to connect to database', error); }

        const db = client.db(databaseName);

        db.collection('tasks').updateMany({
            completed: false,
        }, {
            $set: {
                completed: true,
            },
        }).then((result) => {
            console.log('Sucess', result.modifiedContent);
        }).catch((error) => {
            console.log('Error', error)
        });
    });
    ```

### Deleting Documents 
1. Similar to update methods, we can use `.deleteOne()` or `.deleteMany()` to operate delete command. Note that `.remove()` method is dreprecated as `.update()` method. Besidse, methods of `delete` operations are similar to those of `read` operations, as we only need to provide an `Object` of `filters` to locate the instance and operate them. 
    ```js     
    const { MongoClient, ObjectID } = require('mongodb');

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'task-manager';

    MongoClient.connect(connectionURL, { useNewUrlParser: true, }, function (error, client) {
        if (error) { return console.log('Unable to connect to database', error); }

        const db = client.db(databaseName);

        // db.collection('users').deleteMany({
        //     age: 30,
        // }).then(result => {
        //     console.log(result.deletedCount);
        // }).catch(error => {
        //     console.log('Error', error)
        // });

        db.collection('tasks').deleteOne({
            _id: new ObjectID('5f1a86d8aa88ef02fd1b5d56'),
        }).then(result => {
            console.log('Success', result.deletedCount);
        }).catch(error => {
            console.log('Error', error)
        })
    });
    ```

# REST APIs and Mongoose (Task App)
### Setting up Mongoose 
1. `mongoose` package not only allow us to work on CRUD commands but also "**schema**" for data set. 
  1. Schema - some of the properties of fields are required for certain type of data or instances and the data type should be `string` or `boolean`. 
  1. Authorization - data created by a user can only be modified by the user. 
1. We can check the package at [`https://mongoosejs.com/`](https://mongoosejs.com/)
1. To write data through `mongoose` to MongoDB, we should create a model first (which is similar to a class or prototype) that the instances created by the model will follow certain rules or properties. 
1. The package follows similar configuration as `mongodb`, while we create a new database as we use different package and the schemata of each are different. Besides, we put the database name right after the port in `.connect()` method. 
    ```js 
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
        useNewUrlParse: true,
        useCreateIndex: true,
    });

    // create a model 
    const User = mongoose.model('User', {
        name: {
            type: String,
        },
        age: {
            type: Number,
        },
    });

    // create an instance
    const me = new User({ name: 'Allen', age: `Mike`, });

    // save the instance created by the model 
    me.save().then(() => {
        console.log(me);
    }).catch(error => {
        console.log(error);
    })
    ```

### Creating a Mongoose Model
1. In this challenge, we tried to create a `task` model that has 2 properties, which are `description` in `String` and `completed` in `Boolean`.  I tried to created 3 tasks and save those to the database. To avoid repeat the code, I saved all of them into an `Array` and use `.forEach()` method to complete the task. This will creat a new collection in MongoDB that is separated from `users`. Note that when we create the model, we can give a singular noun and `mongoose` package will turn the noun into plural by itself. 
    ```js 
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
        useNewUrlParser: true,
        useCreateIndex: true,
    });

    const Task = mongoose.model('task', {
        description: {
            type: String,
        },
        completed: {
            type: Boolean,
        },
    })

    const task1 = new Task({ description: 'Make house work', completed: false });
    const task2 = new Task({ description: 'Do laundry', completed: false });
    const task3 = new Task({ description: 'Paint the wall in pink', completed: true });

    let arr = [task1, task2, task3];
    arr.forEach(task => {
        task.save().then(() => {
            console.log(task);
        }).catch(error => {
            console.log(error);
        })
    });
    ```

### Data Validation and Sanitization: Part 1
1. Data validation is to ensure data input follows certain conditions, such as check if a person is adult if the age is greater than 18-year-old.
1. Sanitization is to ensure data input follows certain format. For example, a process to trim of the whitespace before and after an input data. 
1. We can check the [validation](https://mongoosejs.com/docs/validation.html) part in Mongoose documation. For example, we can give a `required` property and set it `true` - ([Reference](https://mongoosejs.com/docs/validation.html#built-in-validators)). 
1. `mongoose` built-in validators have only limited options, such as the length a `String` with `min` and `max`. On the other hand, we can set up custom validators by ourselves. For example, validating emails, phone numbers, etc. 
1. In `mongoose` models, we can pass a function as a method directly to create the schema. 
    ```js 
    // create a model 
    const User = mongoose.model('User', {
        name: {
            type: String,
            required: true, // required data input
        },
        age: {
            type: Number,
            validate(value) { // custom validator 
                if (value < 0) {
                    throw new Error('Age must be a positive number');
                }
            }
        },
    });

    // create an instance
    const me = new User({
        name: 'Mike', // required input 
        age: -1, // not pass 
    });

    // save the instance created by the model 
    me.save().then(() => {
        console.log(me);
    }).catch(error => {
        console.log(error);
    })
    ```
1. Since we can validate data with custom functions, we can also use well-defined and verified npm packages for validating jobs. These pacakges are tested and cover most of the cases, some extreme ones, and edge cases. This is also a better choice to prevent injection for security issues. For example, we can use npm `validator` package. 
1. `validator` package is useful to validate some types of user input. We can check its [documation](https://www.npmjs.com/package/validator#validators) for further info.
    1. credit card 
    1. postcode
    1. and more
1. For `mongoose` models, we have `schemaTypes` to set up which we can refer to the [documentations](https://mongoosejs.com/docs/schematypes.html#schematype-options). Besides `required` and `validate` which we have introduced above, we can set up a `default` value for the field as well. In addition, we have sanitization options for certain data types. For example, we can convert all letters to lowercase or uppercase for `String` values or to trim the input. 
    ```js 
    const mongoose = require('mongoose');
    const validator = require('validator');

    const User = mongoose.model('User', {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email is invalid');
                }
            },
        },
        age: {
            type: Number,
            default: 0,
            validate(value) {
                if (value < 0) {
                    throw new Error('Age must be a positive number');
                }
            }
        },
    });
    ```

### Data Validation and Sanitization: Part 2
1. In this challenge, we update the model schema for `User` and `Task` dataset. 
    1. `User`. We can use `.includes()` and `.toLowerCase()` method to check the input `String`. 
        1. `password` is a required input 
        1. Must be more than 7 characters
        1. The input should be trimmed
        1. The input should not have `password`
    1. `Task`
        1. `description` is a required input 
        1. The input should be trimmed
        1. `completed` property is `false` by default if it's not given 
    ```js 
    const User = mongoose.model('User', {
    password: {
        type: String,
        require: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
            throw new Error(`password can't contain "password"!`)
            }
        },
        },
    });

    const Task = mongoose.model('task', {
        description: {
            type: String,
            required: true,
            trim: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
    })
    ```

### Structuring a REST API
1. REST stands for Representational State Transfer. We can also call it RESTful API. 
1. A server is stateless. 
1. A request made from a program via the Internet usually uses HTTP protocol. 
1. With the structure, we can have clearer and succienct path and methods to work on with CRUD. However, the keywords for the actions are different. For example, we can use the path structure for `tasks`.
    1. Create - POST /tasks
    1. Read - GET /tasks
    1. Read - GET /tasks/:id
    1. Update - PATCH /tasks/:id
    1. Delete - DELETE /tasks/:id
    <img src="restapistructure.PNG">
1. A HTTP request. `express` framework has provided a friendly user interface for developers to work on the `request` and `response`. 
    1. A `request` includes the `header` and metadata that indicates the method such as the "action" we are going use, "connection" (one-time or being kept alive), and "format" of the data. 
    1. A `response` has status code such as `200` and `201` if the "GET" or "POST" action works, data format, and the content returned from the server. 
    <img src="httpRequest.PNG">

### Installing Postman
1. This is an introduction to POSTMAN App and how to use it. 
1. We can use POSTMAN to send a POST request 
    <img src="postmanPOST.PNG">

### Resource Creation Endpoints: Part 1
1. We install npm package `nodemon` in development mode and `express`. 
1. We then create `index.js` in the root directory to use `express` framework. Besides, since we are not going to use `mongodb.js`, we will remove the file. The backup of the practices are in the other folder `mongoDBAndPromises`. 
1. We have an inital setup for `express` framework in `index.js`
    ```js 
    const express = require('express');
    const app = express();
    const port = process.env.PORT;

    app.listen(port || 3000, () => {
        console.log(`Server has started on port: ${port || 3000}`);
    });
    ```
1. We change the `scripts` property in `package.json` with `start` and `dev`. We will deploy this app on heroku later. 
    ```js 
    "scripts": {
        "start": "node src/index.js",
        "dev": "nodemon src/index.js"
    }
    ```
1. In `express`, we can use `.get()` or `.post()` to specify the listener on the server for different types of request. If we use `app.post()` on a route, the listener won't react if a user give a GET request, such as putting the URL on the browser search bar directly. Note that we can't use a browser to send POST requets directly. Therefore, we can use POSTMAN to test the endpoint. 
1. In the following case, we can use `app.use(express.json())` which is similar to turn the response from a server in a `Promise` into a JSON format. However, `express` allow us to use a relative simple syntax. Therefore, we can parse the `request.body` directly to check the data in the request. 
    ```js
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 3000;

    // parse the request data and convert it to JSON
    app.use(express.json());

    // reciving a POST request 
    app.post('/users', (req, res) => {
        console.log(req.body);
        res.send('testing!');
    })

    app.listen(port, () => {
        console.log(`Server has started on port: ${port}`);
    });
    ```
1. In the source `src` directory, we create a new folder `models` that we will keep the data models separately from `mongoose.js`. Besides, we need to use `module.exports` to allow other JavaScript file to use this code in Node.js environment. 
    ```js 
    // src/models/user.js 
    const mongoose = require('mongoose');
    const validator = require('validator');

    const User = mongoose.model('User', {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email is invalid');
                }
            },
        },
        age: {
            type: Number,
            default: 0,
            validate(value) {
                if (value < 0) {
                    throw new Error('Age must be a positive number');
                }
            }
        },
        password: {
            type: String,
            require: true,
            minlength: 7,
            trim: true,
            validate(value) {
                if (value.toLowerCase().includes('password')) {
                    throw new Error(`password can't contain "password"!`)
                }
            },
        },
    });

    module.exports = User;
    ```

1. After configuring the directories, we can import the `mongoose.js` (ensuring that the server connects to the database) and the model of `users` (data model with schema and validator) into `index.js`. 
1. In this case, we try to create a user by the `User` model imported from `user.js` and reply it to user if the data is valid and written into the database. If an error occurs, we use `.catch()` to return the error such as the input data is invalid. 
1. We can learn more on HTTP status code at [httpstatuses.com](https://httpstatuses.com/).
    ```js 
    const express = require('express');
    require('./db/mongoose');
    const User = require('./models/user');

    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.json());

    app.post('/users', (req, res) => {
        const user = new User(req.body); // create new user data from the input in JSON format

        user.save().then(() => {
            res.send(user) // respond the input back to user
        }).catch(error => {
            // res.status(400); // return a status code correctly
            // res.send(error);
            res.status(400).send(error); // a single line to return status code and error message
        })
    })

    app.listen(port, () => {
        console.log(`Server has started on port: ${port}`);
    });
    ```

### Resource Creation Endpoints: Part 2
1. We create a new route that allows users to make a POST request to create a new input to the database by using the schema of `tasks`. The process and concept is the same as setting up the `users`. In this case, we add up one more function to return status code if the request is successful as well. When a data is given correctly, we can return `201` according to [httpstatuses.com](https://httpstatuses.com/).
    ```js 
    const express = require('express');
    require('./db/mongoose');
    const User = require('./models/user');
    const Task = require('./models/task');

    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.json());

    app.post('/users', (req, res) => {
        const user = new User(req.body);

        user.save().then(() => {
            res.status(201).send(user)
        }).catch(error => {
            res.status(400).send(error); // a single line to return status code and error message
        })
    })

    app.post('/tasks', (req, res) => {
        const task = new Task(req.body);

        task.save().then(function () {
            res.status(201).send(task);
        }).catch(function (error) {
            res.status(400).send(error);
        })
    })

    app.listen(port, () => {
        console.log(`Server has started on port: ${port}`);
    });
    ```

### Resource Reading Endpoints: Part 1
1. We can check the `queries` part in `mongoose` API documentation. In this case, we will use [`.find()`](https://mongoosejs.com/docs/api.html#model_Model.find) method. `.find()` method takes an `Object` as an argument.
1. In the route, we give `:parameter` to send the parameter to the server via URL. Note `express` framework allow us to get the parameter easily from the request by `req.params.[para,]`. Note that if we change the variable name after the column, the returned parameters in the request will also be changed. Besides, if the request has multiple parameters, we can check them all in `req.params` as this is an `Object`. 
1. In this case, if we use `.findById()` method to check in the database, we won't get 404 directly if the id given is not formmated correct. The program will return an error directly. Status `404` will only be trigerred when the format of given id is correct but there's no such data in the database. Therefore, we can write another line to check if the id is correct formatted. In this case, the id in MongoDB should always be 24 characters long.
    ```js 
    // GET request to a specific user data 
    app.get(`/users/:id`, (req, res) => {
        const _id = req.params.id;
        // Check if the given id is in correct format 
        if (_id.length !== 24) return res.status(400).send('User ID must be 24 characters long!');

        // use findById mongoose method 
        User.findById(_id).then(user => {
            // check if the id exists
            if (!user) {
                return res.status(404).send();
            }

            // return the data if found
            res.send(user);
        }).catch(err => {
            res.status(500).send();
        });
    });

    // GET request to get all user data in the database
    app.get('/users', (req, res) => {
        User.find({}).then(users => {
            res.send(users);
        }).catch(error => {
            res.status(500).send();
        })
    });
    ```

### Resource Reading Endpoints: Part 2
1. This part is a challenge to work on the GET requests to `tasks` which is using the same methods and concept in retrieving data of `users`. 
    ```js 
    // GET request to get a specific task 
    app.get('/tasks/:id', (req, res) => {
        const _id = req.params.id;
        if (_id.length !== 24) return res.status(400).send('User ID must be 24 characters long!');
        Task.findById(_id).then(task => {
            if (!task) {
                return res.status(404).send();
            }

            res.send(task);
        }).catch(err => {
            res.status(500).send();
        })
    })

    // GET request to get all task data 
    app.get('/tasks', (req, res) => {
        Task.find({}).then(tasks => {
            res.send(tasks);
        }).catch(err => {
            res.status(500).send();
        })
    });
    ```

### Promise chaining 
1. If we need to use several async functions to deal with returned data from the server, we can use nested promise with `.then()` and `.catch()` inside. However, such structure is hard to read and understand. Besides, we have to use `.catch()` several times. 
1. On the other hand, we can use promise chaining that let the first asynction function return a promise, so that we can use `.then()` directly on the result to work on `resolve` function. In this case, we can have a simple structure to read and can have one single `.catch()` method to deal with the errors. 
    ```js 
    // async function that returns a promise 
    const add = (a, b) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(a + b);
                reject('Something went wrong!');
            }, 1000)
        });
    }

    // nested chaining 
    add(1, 2).then(sum => {
        console.log(sum);

        add(sum, 5).then(sum2 => {
            console.log(sum2);
        }).catch(e => {
            console.log(e);
        })
    }).catch(e => {
        console.log(e);
    });

    // promise chaining
    add(1, 1).then(sum => {
        console.log(sum);
        return add(sum, 4);
    }).then(sum2 => {
        console.log(sum2);
    }).catch(err => {
        console.log(err);
    })
    ```
1. We create `promise-chaining.js` in a `sandbox` folder in the task-manager app to test promise chaining feature for `mongoose` methods. 
1. We use other `mongoose` methods by checking its documentation. In this case, we use [`Model.countDocuments()`](https://mongoosejs.com/docs/api/model.html#model_Model.countDocuments) to check how many instances of a specific type of data are stored in the collection. Note that the `Guides` in mongoose documentation is just simple instruction for frequently used methods. We can check other methods in `API` section. For example, in `API > Model`.
1. We tried 2 different methods to manipulate the data `.findByIdAndUpdate()` and `.findByIdAndDelete()` each of which takes an argument of the `_id` of the instance. 
1. After modifying the single data, we can use `.countDocuments()` which takes an `Object` as filter to check the data and returns the number of instances that matches. 
    ```js 
    require('../src/db/mongoose');
    const User = require('../src/models/user');
    // find a user and update his/her age 
    User.findByIdAndUpdate('5f1da581079d580247037b50', { age: 1, }).then(user => {
        console.log(user);
        // return the number of users that is 1 year old 
        return User.countDocuments({ age: 1 });
    }).then((result) => {
        console.log(result)
    }).catch(e => {
        console.log(e);
    })

    const Task = require('../src/models/task');
    // find a task and delete it 
    Task.findByIdAndDelete('5f1d969510ec5c02cc377501').then(user => {
        console.log(user);
        // return the number of tasks that is not completed 
        return Task.countDocuments({ completed: false });
    }).then((result) => {
        console.log(result)
    }).catch(e => {
        console.log(e);
    });
    ```

### Async/Await 
1. An `async` function returns a `promise` as the output, so we can use `.then()` and `.catch()` of the returned `Objecgt` directly. `await` keyword can only exist and work in an `async` function. With these keywords, we can have write an `async` function in a synchronous-like syntax. 
1. This also gives benefits with a clear syntax, as if we'd like to work on different tasks with different variables in multiple `.then()` methods. This can confuse the developer easily when chain is longer and scope of variables starting to get messed up. 
1. We can also set a condition to ensure that the number to sum up must all be positive. Besides, we can use a counter to check the process of each async function. In the following example, we can see the counter prints out from the 1st approach and stops as the 3rd add function has `-3`. 
    ```js 
    let counter = 1;
    const add = (a, b) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (a < 0 || b < 0) {
                    reject('Numbers must be positive!');
                }
                resolve(a + b);
            }, 500)
        });
    }

    const doWork = async () => {
        console.log(`${counter++} time approach`);
        const sum = await add(1, 99);
        console.log(`${counter++} time approach`);
        const sum2 = await add(sum, 50);
        console.log(`${counter++} time approach`);
        const sum3 = await add(sum2, -3);
        return sum3;
    }

    doWork().then(result => {
        console.log('result', result);
    }).catch(error => {
        console.log('error', error);
    });
    ```

### Async/Await: Part 2
1. We work on a challenge 
    1. Create `deleteTaskAndCount as an async function which accepts id of task to remove
    1. Use await to delete task and count up incomplete tasks 
    1. Return the count 
    1. Call the function and attach then/catch to log results 
    ```js 
    require('../src/db/mongoose');
    const Task = require('../src/models/task');

    async function deleteTaskAndCount(id) {
        await Task.findByIdAndDelete(id);
        const count = await Task.countDocuments({ completed: false });
        return count;
    }

    deleteTaskAndCount('5f1d969510ec5c02cc377502').then(task => {
        console.log(task);
    }).catch(error => {
        console.log(error);
    })
    ```

### Integrating Async/Await 
1. We rewrite all the code in `index.js` with async/await syntax. Since `express` framework doesn't use returned value from methods directly, we can turn its the callback function in the HTTP request methods into `async` functions. Besides, to prevent the errors that causing the program to crash, we can use `try` and `catch` to handle the errors. The refined code works exactly the same as using `.then()` and `.catch()` methods on `promises` objects. 
    ```js 
    const express = require('express');
    require('./db/mongoose');
    const User = require('./models/user');
    const Task = require('./models/task');
    const { Mongoose } = require('mongoose');

    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.json());

    // POST request to create a new user 
    app.post('/users', async (req, res) => {
        const user = new User(req.body);

        try {
            await user.save();
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send(error);
        }

    });

    // GET request to a specific user data 
    app.get(`/users/:id`, async (req, res) => {
        const _id = req.params.id;
        if (_id.length !== 24) return res.status(400).send('User ID must be 24 characters long!');
        try {
            const user = await User.findById(_id);
            if (!user) {
                return res.status(404).send();
            }
            res.send(user);
        } catch (error) {
            res.status(500).send()
        }
    });

    // GET request to get user data 
    app.get('/users', async (req, res) => {
        try {
            const users = await User.find({});
            res.send(users);
        } catch (error) {
            res.status(500).send();
        }
    });

    // POST request to create a new task 
    app.post('/tasks', (req, res) => {
        const task = new Task(req.body);

        task.save().then(function () {
            res.status(201).send(task);
        }).catch(function (error) {
            res.status(400).send(error);
        })
    });

    // GET request to get a specific task 
    app.get('/tasks/:id', async (req, res) => {
        const _id = req.params.id;
        if (_id.length !== 24) return res.status(400).send('User ID must be 24 characters long!');
        try {
            const task = await Task.findById(_id);
            if (!task) {
                return res.status(404).send();
            }
            res.send(task);
        } catch (error) {
            res.status(500).send();
        }
    })

    // GET request to get all task data 
    app.get('/tasks', async (req, res) => {
        try {
            const tasks = await Task.find({});
            res.send(tasks);
        } catch (error) {
            res.status(500).send();
        }
    });

    app.listen(port, () => {
        console.log(`Server has started on port: ${port}`);
    });
    ```

### Resource Updating Endpoints: Part 1
1. This is relatively complicated that it may have several conditions to handle 
  1. The user is not found (404). For example, the user gives an id in correct format but doesn't have an entity exist in the database. 
  1. The new input is invalid (400). For example, the user gives empty string to update the name of the user, which was set to be required. 
  1. The server has some issues that can't return the data (500)
  1. Valid input format but incorrect data. For example, the user tries to modify a property can't be changed or doesn't exist. 
1. We use the following code to work on PATCH request which is to modify a user data. In this case, we use `Object.keys()` which returns the properties of an `Object` in an `Array`, so we can use `.every()` method to check. This `Array.every()` method works similar to `.filter()` that it takes a callback function to check if the elements follow certain conditions and returns a boolean `true` if all the result of callback function is `true`. (Though we can use `.forEach` or other method to achieve the target, but this method is relatively simple for the purpose).
1. In the `Model.findByIdAndUpdate()` method, we can give a 3rd parameters which is an `Object` of options such as `new: true` means that the method will return the result updated instance as an `Object` and `runValidators: true` means that the method will ensure the input will be checked with the validators in the schema. 
    ```js 
    // index.js
    // PATCH request to modify data of a specific user
    app.patch('/users/:id', async (req, res) => {
        // list all the properties of user input as an array
        const updates = Object.keys(req.body);
        // list the fields that we allow users to update
        const allowedUpdates = ['name', 'email', 'password', 'age'];
        // check if the user gives invalid request to change fields can't be changed or doesn's exist at all 
        const isValidOperation = updates.every(update => allowedUpdates.includes(update));
        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid udpates!' });
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, });

            if (!user) {
                return res.status(404).send();
            }
            res.send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    })
    ```

### Resource Updating Endpoints: Part 2
1. This is a chanllenge to work on the router handler to update the content of tasks in the database. 
  1. Set up the route handler 
  1. Send error if unknown updates 
  1. Attempt to update the task 
    1. Handle task not found 
    1. Handle validation errors 
    1. Handle success 
1. A misake made here was setting the wront route, so server can't render the page on the given route correctly. I forget to put slash `/` before `tasks`
    ```js 
    // PATCH request to modify data of a specific task 
    app.patch('/tasks/:id', async (req, res) => {
        const id = req.params.id;
        const updates = Object.keys(req.body);
        const allowedUpdates = ['description', 'completed'];
        const isDataAllValid = updates.every(update => allowedUpdates.includes(update))

        if (!isDataAllValid) {
            return res.status(400).send({ error: 'The input data is invalid!' });
        }

        try {
            const task = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true, });
            if (!task) {
                return res.status(404).send();
            }
            res.send(task);
        } catch (error) {
            res.status(400).send();
        }
    })
    ```

### Resource Deleting Endpoints
1. In this case, we should use `.findByIdAndDelete()` method, while I made mistake and used `.findOneAndDelete()` which will keep deleting data if there's any when the filter option doesn't set up correctly. 
    ```js 
    // Delete request to remove a specific task
    app.delete('/tasks/:id', async (req, res) => {
        try {
            const task = await Task.findByIdAndDelete(req.params.id); // be careful with mongoose CRUD command!

            if (!task) {
                return res.status(404).send();
            }

            res.send(task);
        } catch (error) {
            res.status(500).send();
        }
    });
    ```

### Separate Route Files 
1. We have made all CRUD commands in the same file `index.js`. In this case, we have work on 2 main parts which are `users` and `tasks`. When the program goes bigger and more complex, the modules are better to be separated to be manageable. We will separate the routes of these and combine them into the an application to work on. 
1. To use the router, we have to initiate it with `new express.Router()`, set up the route with `router.get()` (which is similar to `app.get()`), and register it with `app.use()`. 
    ```js 
    // initiate an express router 
    const router = new express.Router();
    router.get('/test', (req, res) => {
        res.send('This is from my other router');
    })
    app.use(router);
    ```
1. We create a new directory in `src` named `routers` and create `user.js` as the router is created for `users`. We follow the similar syntax to create a router in this separated file and use `module.exports` to export the `Object`. 
    ```js 
    // src/routers/user.js
    const express = require('express');
    const router = new express.Router();

    router.get('/test', (req, res) => {
        res.send('From a new File');
    })

    module.exports = router;

    // import the router to index.js 
    const userRouter = require('./routers/user/');
    app.use(userRouter);
    ```
1. After that, we can import user model by using `require('../models/user/')` and copy those routes setup in index.js without rewriting all of them. Note that since we have changed the router syntax and doesn't use `app` variable, we should change all of them into `router` which is a module created with `new express.Router()`. 
    ```js 
    const express = require('express');
    const User = require('../models/user');
    const router = new express.Router();

    // POST request to create a new user 
    router.post('/users', async (req, res) => {
        const user = new User(req.body);

        try {
            await user.save();
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send(error);
        }

    });

    // GET request to get user data 
    router.get('/users', async (req, res) => {
        try {
            const users = await User.find({});
            res.send(users);
        } catch (error) {
            res.status(500).send();
        }
    });

    // GET request to a specific user data 
    router.get(`/users/:id`, async (req, res) => {
        const _id = req.params.id;
        if (_id.length !== 24) return res.status(400).send('User ID must be 24 characters long!');
        try {
            const user = await User.findById(_id);
            if (!user) {
                return res.status(404).send();
            }
            res.send(user);
        } catch (error) {
            res.status(500).send()
        }
    });

    // PATCH request to modify data of a specific user
    router.patch('/users/:id', async (req, res) => {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['name', 'email', 'password', 'age'];
        const isValidOperation = updates.every(update => allowedUpdates.includes(update));
        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid udpates!' });
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, });

            if (!user) {
                return res.status(404).send();
            }
            res.send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    // Delete request to remove a specific user
    router.delete('/users/:id', async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);

            if (!user) {
                return res.status(404).send();
            }

            res.send(user);
        } catch (error) {
            res.status(500).send();
        }
    });

    module.exports = router;
    ```
1. By separating the modules, `index.js` becomes simple and succinct and works exactly the same as before. 
    ```js 
    const express = require('express');
    require('./db/mongoose');
    const userRouter = require('./routers/user');
    const taskRouter = require('./routers/task');

    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.json());

    app.use(userRouter);
    app.use(taskRouter);

    app.listen(port, () => {
        console.log(`Server has started on port: ${port}`);
    });
    ```

# API Authentication and Security (Task App)
### Securely Storing Passwords: Part 1
1. At this point, we store user password in the database with plain text which is a VERY BAD idea. As most of the users nowadays use the same password across different websites. For security reasons, we should try to keep password hashed. 
1. We can use `bcrypt.js` package to hash user passwords in the database. We can check its methods from [documentation](https://www.npmjs.com/package/bcryptjs#usage---async)
    1. We can use `.hash()` which is an async method that can generate a hash "**salt**" automatically. Besides, we can skip the callback function. 
    1. After users creating password, we can use `.compare()` to check when a user tries to login and look up the hash table to check if it matches.
    ```js 
    const bcrypt = require('bcryptjs');

    const myFunction = async function () {
        const password = 'Red12345!';
        // give the password input and the times of string to be hashed. 8 is relatively balanced number of times 
        const hashedPassword = await bcrypt.hash(password, 8);

        console.log(password); // Red12345
        console.log(hashedPassword); // hashed password 

        // check if given password is the same as the password stored in the database by checking hash table 
        const isMatch = await bcrypt.compare('Red12345!', hashedPassword);
        console.log(isMatch) // true. This will be false if user gives wrong password 
    }

    myFunction();
    ```

### Securely Storing Passwords: Part 2
1. In the task-manager App, there are 2 main cases to use `bcrypt.js`. 
    1. When a user creates a new account 
    1. When a user update the account 
1. In this case, we can use [middleware](https://mongoosejs.com/docs/middleware.html) in `mongoose`. We can run some code before the data is saved to the database. Therefore, we will update `src/models/user.js` in models. These middlewares has `pre` and `post` hook that we can either work "**before**" a task happens or "**after**". For example, a middleware can work before the data is written into database, or give a hint or do something else after data is written successfully. 
1. We need to modify the code in router to enable the middle is working. In the `try` code block, we separate the code into 3 lines as to separate the `find` and `update` (to [save](https://mongoosejs.com/docs/api/document.html#document_Document-save) the data) process into 2 `await`. 
    ```js 
    // src/routers/user.js
    // PATCH request to modify data of a specific user
    router.patch('/users/:id', async (req, res) => {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['name', 'email', 'password', 'age'];
        const isValidOperation = updates.every(update => allowedUpdates.includes(update));
        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid udpates!' });
        }

        try {
            // rewrite here!!!
            // find the user by its id property
            const user = await User.findById(req.params.id);
            // update properties from the array above to iterate through each of them 
            updates.forEach((update) => user[update] = req.body[update]);
            await user.save();
            // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, });

            if (!user) {
                return res.status(404).send();
            }

            res.send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    });
    ```

1. We create a schema by `new mongoose.Schema()` and move the user model as the `Object` argument. We use [`schema`](https://mongoosejs.com/docs/api/document.html#document_Document-isModified) method to check if a certain field (such as `password` in this case) is modified. If it is `true`, we will hash the input by 
    ```js 
    // src/models/user.js
    const mongoose = require('mongoose');
    const validator = require('validator');
    const bcrypt = require('bcryptjs');

    const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email is invalid');
                }
            },
        },
        age: {
            type: Number,
            default: 0,
            validate(value) {
                if (value < 0) {
                    throw new Error('Age must be a positive number');
                }
            }
        },
        password: {
            type: String,
            require: true,
            minlength: 7,
            trim: true,
            validate(value) {
                if (value.toLowerCase().includes('password')) {
                    throw new Error(`password can't contain "password"!`)
                }
            },
        },
    })

    // middleware to check before data is saved into database
    userSchema.pre('save', async function (next) {
        const user = this;
        // check if middleware is working 
        console.log('Just before saving');

        // check if password is modified (or an account is created)
        if (user.isModified('password')) {
            user.password = await bcrypt.hash(user.password, 8);
        }
        
        next();
    })

    const User = mongoose.model('User', userSchema);

    module.exports = User;
    ```

### Logging in Users
1. We create a new endpoint for users to login. 
1. In `src/routers/user.js`, we update a post route to send data from client to server. We made a middleware in model to check if the given `email` and `password` match any of those user data in the database. 
    ```js 
    // authenticate user login with email as account and password
    router.post('/users/login', async (req, res) => {
        try {
            // check if given email and password is correct 
            const user = await User.findByCredentials(req.body.email, req.body.password);
            // temporary solution
            res.send(user);
        } catch (error) {
            res.status(400).send();
        }
    });
    ```
1. There are 2 ways to [add methods](https://mongoosejs.com/docs/api/schema.html#schema_Schema-static) in schema with `.static()` method or `statics` property. Note that we can name the method upon preference. 
    1. Use `Schema.static(methodName, callbackMethod)` method
    1. Use `Schema.statics.method = function(){}`. 
1. Since login process is sensitive, we should return as least info. as possible. For example, we don't indicate whether the email account or password is wrong that causes login process fail. We can simply indicate that the process is not successful. 
    ```js 
    // create a new method to check user email (as account) and password 
    userSchema.statics.findByCredentials = async function (email, password) {
        // check if there an email exist in the database 
        const user = await User.findOne({ email });

        // throw an error if there's no user
        if (!user) {
            throw new Error('Unable to login');
        }

        // check if password matches
        const isMatch = await bcrypt.compare(password, user.password);

        // throw an error if password is not correct and provide as least sensitive info as possible
        if (!isMatch) {
            throw new Error('Unable to login');
        }

        return user;
    }
    ```
1. In addition, we should also prevent users to register accounts with the same email. Therefore, we have to update the schema with `unique: true` for `email` property. Note that after we modify the schema, we have to wipe out the data in the database to ensure the new schema is applied to all new inputs. 
1. In `robo 3T`, we can go to collections panel on the left to drop a database. Note that we should also stop the server in the terminal to rerun the program again. 
1. We can test the process in POSTMAN by accessing the endpoint `localhost:3000/login` with JSON data `{"email": "", "password":""}` with a POST request. Therefore, we will only get the `user` data send back if both `email` and `password` match. 

### JSON Web Tokens - JWT
1. After this point, all routes on the `express` will be categorized in either `public` or `authenticated` with limited access. For example, we only show "**signup**" and "**login**" routes in public that all users can see, while other sensitive and private data will only be shown after the user logs in. 
1. Besides, we can send each user an unique authentication token, so they don't need to be verified each time working on a task. Besides, the token can expire after certain amount of time to enhance security and prevent abuse. 
1. This JSON Web Token can be generated and get expired at certain amount of time. We use npm [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) package to do the job. All the token is encoded with `base64`. We can paste the token to decode by other program such as [base64decode](https://www.base64decode.org/).
1. We can use `.sing()` method to create a JSON Web Token. The method takes 3 arguments. 
    1. 1st is an `Object` can take a unique identifier, so the server knows which user is logging in. In this case, "**user's id**" can do the job. 
    1. 2nd is a `String` perform as the "**signature**" (similar to password) to ensure the token is generated from this server. This can be any `String` value as perfrence, as it works similar to password. Therefore, though another users may get the unique user id from somewhere else, they can't pass the verification because they don't get this "**signature**" to generate the token. 
    1. 3rd is an `Object` that contains the options such as setting up expiring time. The set up is relative intuitive that we can put in plain English duration, such as `1 week`, `2 months`, or `1 year`. 
1. A JWT has 3 parts and separated with dots `.`. For example, `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhYmMxMjMiLCJpYXQiOjE1OTU5MDcyNDd9.r-OpD95XZCa7__x6LafF04wvIu4fy3TLH_uE3ism6mc`, the 1st part is the "**header**" which is the metadata of the token that how is this token generated, the 2nd part is the "**payload**" or the "**body**" which is generated from the data we provided, and the last part is the "**signature**" is for the program to verify the token.
1. We then can use `.verify()` method to check if the token from the client is correct. The method takes 2 arguments
    1. 1st is the token itself
    1. 2nd is the "**signature**" we give when we create the token. 
    ```js 
    const jwt = require('jsonwebtoken');
    const myFunction = async function () {
        // create a token from jwt.sign() method
        const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn: '7 days'});
        // print token into terminal
        console.log(token);

        // verify the token with signature 
        const data = jwt.verify(token, 'thisismynewcourse')
        console.log(data);
    }

    myFunction();
  ```
### Generating Authentication Tokens
1. When a new user sings a new account, or a exisiting user logs in, we can send a JWT to the user to authenticate the following usage. In this case, both `signup` and `login` router will be updated with a function to send and verify token. 
    ```js 
    // src/models/user.js
    // we need to use 'this' to the specific user, so we should use a regular function statement
    // 'methods' is the property for instances which method on every instance is a bit different
    userSchema.methods.generateAuthToken = async function () {
        const user = this;
        const token = jwt.sign({ _id: user._id.toString(), }, 'thisismynewcourse');
        return token;
    }

    // src/routers/user.js
    // POST request to authenticate user login with email as account and password
    router.post('/users/login', async (req, res) => {
        try {
            const user = await User.findByCredentials(req.body.email, req.body.password);
            // generate a specific token for this user, not for all User!
            const token = await user.generateAuthToken();
            res.send({ user, token });
        } catch (error) {
            res.status(400).send();
        }
    });
    ```
1. However, there are some scenarios that users can't invalidate the token when they logout at this point. This can make serious security abuse that if others get the token, the user can't invalidate the login status and the token. Besides, the program should allow users to login with different devices with different status. For example, a user can login in both mobile phone and tablet. If the user logout from the tablet, the account on mobile phone is still logged in. 
1. We can solve the issue with the following steps 
    1. Modify the `user` model. In the schema, we add `tokens` to the model which is an `Array`. Besides, the token is a `String` and `required` for a user instance. 
    ```js 
    //src/models/user.js
    const userSchema = new mongoose.Schema({
      tokens: [{
        token: {
          type: String, 
          required: true, 
        }
      }]
    }
    ```
    1. Update `userSchema` methods to add the new generated token to the uesr instance. 
    ```js 
    //src/models/user.js
    userSchema.methods.generateAuthToken = async function () {
      const user = this;
      const token = jwt.sign({ _id: user._id.toString(), }, 'thisismynewcourse');

      // assign the token to the user instance 
      user.tokens = user.tokens.concat({ token });
      // save the instance to database 
      await user.save();

      return token;
    }
    ```
1. We should generate a token right after the user signs up, as there's no point to authenticate the user who just register the account. We can reuse the method `.generateAuthToken()` directly. 
    ```js
    // src/routers/user.js
    // POST request to create a new user (sign up)
    router.post('/users', async (req, res) => {
        const user = new User(req.body);

        try {
            await user.save();
            const token = await user.generateAuthToken();
            res.status(201).send({ user, token });
        } catch (error) {
            res.status(400).send(error);
        }

    });
    ```

### Express Middleware
1. Since we generate tokens for users, we can start to use the tokens to verify the process of tasks in the program. Therefore, when users navigate on the website and try to do different tasks, each task will be verified with the token and check authentication before it can proceed. 
1. We can use `middleware` in `express` framework `index.js`. Without a middleware, the new quest come from a user will make the program run the route handler without authentication. This may cause abuse and problems and affect other users on the same website. By using middleware, we can run some code (to authenticate) the user before the program proceed the tasks. 
1. In `index.js`, we add a middleware by passing an anonymous function to `app.use()`. Besides, this task should run before other functions. In the following example, the middleware will check and return the HTTP request made from a user. In this case, we use POSTMAN to send a GET request on `/user` route to check for all users. After sending the requset, we get only `GET /users/` returned in the terminal without any other functions proceeded further. 
1. This middleware takes 3 arguments 
    1. `req` is the request made by the user from client side 
    1. `res` is the response given by the server program
    1. `next` is a callback function that we can pass to keep the program goes after passing through middleware. Note that if we don't call the `next()` function, the middleware will just stop the program and do nothing. 
    ```js
    const express = require('express');
    require('./db/mongoose');
    const userRouter = require('./routers/user');
    const taskRouter = require('./routers/task');

    const app = express();
    const port = process.env.PORT || 3000;

    // a middleware to run after getting a request and before executing a task 
    app.use(function (req, res, next) {
    console.log(req.method, req.path); // GET /users/
    });


    app.use(express.json());
    // other code below...
    ```
1. We can also write logical process to proceed services. For example, we can deny all `GET` request made to all routes. 
  ```js 
  app.use(function (req, res, next) {
    if (req.method === 'GET') {
      res.send('GET requests are disabled');
    } else {
      next();
    }
  });
  ```
1. In the following challenge, we try to 
    1. Register a new middleware funciton 
    1. Send back a maintenance message with a 503 status code 
1. In this case, we can either check if `req` exist or not. However, since the service is not available and server is on maintenance, we don't need to `IF` statement and simply send the message to users directly. 
    ```js 
    app.use(function(req, res, next) {
    res.status(503).send('Server is on maintenance...');
    })
    ```

### Accepting Authentication Tokens
1. Summary 
    1. Set up the middleware in the router to run before executing the route handler function. 
    1. The middleware proceeds 
        1. Find the header info. to check the authentication token. 
        1. Use `jsonwebtoken` to verify the token. 
        1. Find the associated user from the database by its `_id` and `token`. 
1. Though the program is not huge, we can separate the function into different modules. Therefore, we create a new directory in `src` named `middleware` for our middleware functions. In this case, we create a new `auth.js`. 
1. Note that we should clear the middleware we try to use in `index.js` first. 
1. Besides, each middleware has its specific function and should only work on certain routes. Therefore, we export the `auth.js` middle and import it into `/src/routers/user.js`. 
    ```js 
    // src/middleware/auth.js
    const auth = async function (req, res, next) {
    console.log('auth middleware');
    next();
    }

    module.exports = auth;
    ```
1. In each route handler, we add the middleware as the 2nd argument. (The first async callback function will be moved as the 3rd one to be executed after the middleware). In this case, if we make a GET request to `/users` route, we will see a message 'auth middleware' printed in the terminal.  
    ```js 
    // src/routers/user.js
    const auth = require('../middleware/auth');

    // GET request to get all user data 
    // add middleware 'auth' before the async function 
    router.get('/users', auth, async (req, res) => {
        try {
            const users = await User.find({});
            res.send(users);
        } catch (error) {
            res.status(500).send();
        }
    });
    ```
1. In the header tag, we put the key as `authorization` and value is `Bearer [token...]`. Note that the value should start with `Bearer ` with capital "B" and followed with a whitespace before the token.
    <img src="sendTokenInHeader.PNG">

1. We update the middleware `auth.js`. 
    ```js 
    const jwt = require('jsonwebtoken');
    const User = require('../models/user');

    const auth = async function (req, res, next) {
        try {
            // remove 'Bearer ' in the beginning of the String
            const token = req.header('Authorization').replace('Bearer ', '');
            // use jsonwebtoken package to verify if the token is valid 
            const decoded = jwt.verify(token, 'thisismynewcourse');
            // find the single user info according to the id and the token 
            const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

            // return an error if the user is not found 
            if (!user) {
                throw new Error();
            }

            // update user status that the user has been logged in 
            req.user = user;
            next();
        } catch (error) {
            res.status(401).send({ error: 'Please authenticate.' });
        }
    }

    module.exports = auth;
    ```

### Advanced Postman
1. We can setup envrionment variables in POSTMAN, so each time we make a request, we don't need to change the URL manually. The option is on the upper right corner.
    <img src="postmanSetupEnvVar.PNG">
1. Change Envrionment variable. We can put the predefined variable such as `url` in 2 pairs of curly braces, `{{url}}`.
    <img src="postmanEnvVar.PNG">
1. We can add the authentication token in the collection directly, so we don't need to input it everytime. On the left collection panel, we can find the `edit` option in the setting and put the token in the authorization tab. Note that we use `Bearer token` for authentication in this case. 
1. Besides, for those which need token authroization, we can change the authorization option in each task into `inherit auth from parent`. 
1. For automation proces, we can change this to an environment variable {{authToken}} that is generated from the testscript. 
    <img src="postmanSaveToken.PNG">
1. Recalling that "**login**" and "**singup**" process don't requrie authentication. We can go to the tab an turn the authorization off directly. 
    <img src="postmanTurnoffAuth.PNG">
1. We can automate the workflow of returning new access tokens back to the parent auth. This happens when we try to login with different user account and new token is generated. We then have to manually copy and paste the token in the collection's authorization tab, as we did above. However, we can write some JavaScript code to work it out. We can use the testscript in both "**login**" and "**singup**" route.
1. Note that in the "**signup**" process, the status code should be `201` rather than `200`, as it makes a change to the server. Besides, we only need to generate tokens automatically in sign up and login process. 
    ```js
    if (pm.response.code === 201) {
    pm.environment.set('authToken', pm.response.json().token)
    }
    ```
    <img src="postmanAutoFlow.PNG">
### Logging out
1. In this section, we will add a new route in `src/routers/user.js` to allow users to log out. Besides, the user may login in different devices and have different sessions. Since we'd track on the single token that is used on the current device, we will modify `auth.js` and add `req.token = token`.
    ```js 
    const jwt = require('jsonwebtoken');
    const User = require('../models/user');

    const auth = async function (req, res, next) {
        try {
            // remove 'Bearer ' in the beginning of the String
            const token = req.header('Authorization').replace('Bearer ', '');
            console.log(token);
            const decoded = jwt.verify(token, 'thisismynewcourse');
            const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

            if (!user) {
                throw new Error();
            }

            // append current token of the device
            req.token = token;

            req.user = user;
            next();
        } catch (error) {
            res.status(401).send({ error: 'Please authenticate.' });
        }
    }

    module.exports = auth;
    ```
  
1. We then udpate a new route in `src/routers/user.js`. We check all the tokens that the users use in `req.user.tokens` and use `.filter()` method to check which tokens are not used in the current request. Therefore, we use `!==` "not equal to" to create a new `Array` of tokens which has filtered out the one in use. 
1. After saving the new tokens array back to database, the token we use now to login will be invalidated, so the user is logged out. 
1. We can clear the whole `Array` of all tokens to logout a user from his/her all devices. 
    ```js 
    // Log out the current session on a single device
    router.post('/users/logout', auth, async (req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter(function (token) {
                // filter out the tokens which are not in use 
                return token.token !== req.token;
            });
            
            // save the data back to user in database to logout the current session of the device that send this request. 
            await req.user.save();
            res.send();
        } catch (error) {
            res.status(500).send();
        }
    });

    // Log out all sessions of login on all devices of a user
    router.post('/users/logoutAll', auth, async (req, res) => {
        try {
            req.user.tokens = [];
            await req.user.save();
            res.send();
        } catch (error) {
            res.status(500).send();
        }
    });
    ```

### Hiding Private Data 
1. After a user logs in, the server program shouldn't return sensitive data such as `password` and `tokens` of other login session of the user. In this case, our current data returning back to the user is still the whole dataset. 
1. We can use a `mongoose` method [`.toObject()`](https://mongoosejs.com/docs/api.html#document_Document-toObject) to duplicate one. Note that though there are other methods, such as `Object.asisgn({}, [obj])`, `{ ... }`, `JSON.parse(JSON.stringify([obj]))` to duplicate the object, we can use those methods as the `Object` returned is totally different. The `user` object itself has other information in this case. 
1. We then use `delete` keyword to take the properties off from the duplicated `Object` and return it back. Note that this is a regular synchronous function rather than async.
    ```js 
    // src/models/user.js
    // return only non-sensitive data back to user after singup and login 
    userSchema.methods.getPublicProfile = function () {
        const user = this;

        // use mongoose method to creat a new object
        // we can't use Object.assign({}, obj) to duplicate
        const userObject = user.toObject();

        delete userObject.password;
        delete userObject.tokens;

        return userObject;
    }

    // src/routers/user.js
    router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        // generate a specific token for this user, not for all User!
        const token = await user.generateAuthToken();
        // return only filtered data by using `.getPublicProfile()` method
        res.send({ user: user.getPublicProfile(), token });
    } catch (error) {
        res.status(400).send();
    }
    });
    ```

1. Besides the way above, we can use another method to fulfill the purpose. In `src/models/user.js`, we simply change the custom method `.getPublicProfile` to `toJSON`. Therefore, in `src/routers/user.js` we can use the destructing notation as usual. It's because the feature of `Objects` when it has `toJSON` as its method. According to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), `JSON.stringify()` function will only convert the value returned from `.toJSON` method on the `Object` to a JSON format data. By this feature, we can "**hide**" the properties that we don't want to reveal. 
    ```js
    // src/models/user.js
    // change method to `toJSON`
    userSchema.methods.toJSON = function () {
        const user = this;

        // use mongoose method to creat a new object
        // we can't use Object.assign({}, obj) to duplicate
        const userObject = user.toObject();

        delete userObject.password;
        delete userObject.tokens;

        // when this object is converted to JSON format, password and tokens properties will be taken off 
        return userObject;
    }

    // src/routers/user.js
    router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        // generate a specific token for this user, not for all User!
        const token = await user.generateAuthToken();
        // change back to use destructure notation 
        res.send({ user, token });
    } catch (error) {
        res.status(400).send();
    }
    });
    ```

1. Use `.toJSON` method to hide data when a `Object` is converted to a JSON format data. 
    ```js 
    let guy = {
    name: 'Allen',
    age: 25
    };

    guy.toJSON = function(){
    console.log(this) // {name: 'Allen', age: 25}
    return this.name;
    }
    console.log(guy.toJSON()); // {name: 'Allen', age: 25} \n Allen
    console.log(JSON.stringify(guy)); // "Allen"
    ```

### Authenticating User Endpoints 
1. We update `src/routers/user.js` and delete the route that can get user profile by ID, as it's not required since we have `/users/me` to get the profile of the signed in account. 
    ```js 
    // src/routers/user.js
    // delete the following as it's not required in the router handler
    // GET request to a specific user data 
    router.get(`/users/:id`, async (req, res) => {
        const _id = req.params.id;
        if (_id.length !== 24) return res.status(400).send('User ID must be 24 characters long!');
        try {
            const user = await User.findById(_id);
            if (!user) {
                return res.status(404).send();
            }
            res.send(user);
        } catch (error) {
            res.status(500).send()
        }
    });
    ```
1. On the `delete` route, we firstly place the middleware to check authentication and should modify the code, as the user shouldn't be able to delete other users' account by providing their IDs. Besides, we don't need to check if the `user` exist since we are using authentication. 
1. We then use `mongoose` model method [`.remove()`](https://mongoosejs.com/docs/api/model.html#model_Model-remove) to remove the instance from the database. Note that it's an async function, so we should use `await` keyword. 
    ```js 
    // Delete request to remove a specific user
    router.delete('/users/me', auth, async (req, res) => {
        try {
            // use Model.prototype.remove() method to delete the instance
            await req.user.remove();
            res.send(req.user);
        } catch (error) {
            res.status(500).send();
        }
    });
    ```
1. Besides, we should also update the route for update tasks.
    ```js 
    // PATCH request to modify data of a specific user
    router.patch('/users/me', auth, async (req, res) => {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['name', 'email', 'password', 'age'];
        const isValidOperation = updates.every(update => allowedUpdates.includes(update));
        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid udpates!' });
        }

        try {
            const user = req.user
            updates.forEach((update) => user[update] = req.body[update]);
            await user.save();
            res.send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    });
    ```

### The User/Task Relationship
1. We can update the task model in `src/models/task.js` to have a property to save `owner` which is the id of the user who creates the task. Besides, we can drop the current database, as the old inputs doesn't follow the updated schema. 
    ```js 
    // src/models/task.js
    const mongoose = require('mongoose');

    const taskSchema = new mongoose.Schema({
        description: {
            type: String,
            required: true,
            trim: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        owner: {
            // ensure new created tasks has an mongoose ID stored
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        }
    });

    const Task = mongoose.model('task', taskSchema);

    module.exports = Task;
    ```
1. After we update the schema to have `owner` for each `Task` instance, we can use the properties to create new instances. We use spread notation to copy all the properties and values from `req.body` which is written as `...req.body` and hard coded the `owner` property with `req.user._id` returned from the middleware. 
    ```js 
    // src/routers/task.js
    const express = require('express');
    const Task = require('../models/task');
    const auth = require('../middleware/auth'); // import the middelware
    const router = new express.Router();

    // POST request to create a new task 
    router.post('/tasks', auth, async (req, res) => {
        const task = new Task({
            // copy all properties from req.body
            ...req.body,
            owner: req.user._id,
        })

        try {
            await task.save();
            res.status(201).send(task);
        } catch (error) {
            res.status(400).send(error);
        }
    });
    ```

1. Since we get the owner id during the process, we can use another `mongoose` method to set up the relationship and return the user `name` property by referring to it's `_id` automatically. Note that this is only set up the relationship unlike in `task.js` model that we really update a property `owner`. Therefore, we can use the method to refer and connect collections according to different properties. 
    ```js
    // src/models/user.js
    // virtual property set up for mongoose to learn the relationship between collections
    userSchema.virtual('tasks', {
        ref: 'Task',
        localField: '_id',
        foreignField: 'owner',
    });
    ```

1. We then can test the function by setting up relationship between different collections. 
    ```js 
    const Task = require('./models/task');
    const User = require('./models/user');
    const main = async () => {
        // new property set up in Task model 
        const task = await Task.findById('5f2118d9b97c5d090e741111'); // '_id' of the task 
        await task.populate('owner').execPopulate();
        console.log(task.owner); // return user instance
        
        // relationship made by virtual in User model
        const user = await User.findById('5f2117ecc3ffc208dafe32c5'); // '_id' of the user
        await user.populate('tasks').execPopulate();
        console.log(user.tasks); // return task instance according to the user
    }

    main();
    ```
1. We had a bug here that when using `.virtual()` to set up the virtual properties, it's critical about the name we used to export the model. In this case, I firstly set `const Task = mongoose.model('task', taskSchema)` that in `mongoose` model, the model is set in all lowercase. However, in the lecture, it's given as `Task`, so the virtual property can never be set.  

### Authenticating Task Endpoints
1. After setting up virtual relationship to connect the collections, we will update the rest route handlers in `src/routers/task.js`. Therefore, each time we look up a task by the task id, the program will also check if the owner is the same as the user id. If the user id doesn't match, the program will return a `404` status. The following task is to retrieve a single task. 
    ```js 
    // GET request to get a specific task 
    router.get('/tasks/:id', auth, async (req, res) => {
        const _id = req.params.id;

        if (_id.length !== 24) return res.status(400).send('User ID must be 24 characters long!');

        try {
            // find the task by id and check if it's the correct owner
            const task = await Task.findOne({ _id, owner: req.user._id });

            if (!task) {
                return res.status(404).send();
            }

            res.send(task);
        } catch (error) {
            res.status(500).send();
        }
    })
    ```
1. In the route handler, we have another function to return all the tasks owns by a user. Note that we should also add on the middleware.
    1. Use filter directly in `.find()` method to check if the tasks returned are owned by the user. 
    1. Use `.populate().execPopulate()` method to return the tasks of a user. 
    ```js 
    // GET request to get all task data 
    router.get('/tasks', auth, async (req, res) => {
        try {
            const tasks = await Task.find({ owner: req.user._id }); // use filter in .find() method
            res.send(tasks);
            // Choose ONLY ONE!!!          
            await req.user.populate('tasks').execPopulate(); // use virtual property to refer data 
            res.send(req.user.tasks);
        } catch (error) {
            res.status(500).send();
        }
    });
    ```
1. We then modify on the UPDATE command. 
    ```js 
    // PATCH request to modify data of a specific task 
    router.patch('/tasks/:id', auth, async (req, res) => {
        const id = req.params.id;
        const updates = Object.keys(req.body);
        const allowedUpdates = ['description', 'completed'];
        const isDataAllValid = updates.every(update => allowedUpdates.includes(update))
        if (!isDataAllValid) {
            return res.status(400).send({ error: 'The input data is invalid!' });
        }

        try {
            const task = await Task.findOne({ _id: req.params.id, owner: req.user._id, });

            // return 404 if no task matches 
            if (!task) {
                return res.status(404).send();
            }

            updates.forEach(update => task[update] = req.body[update]);
            await task.save();
            res.send(task);
        } catch (error) {
            res.status(400).send();
        }
    });
    ```
1. Similar concept is applied to DELETE path 
    ```js 
    // Delete request to remove a specific task
    router.delete('/tasks/:id', auth, async (req, res) => {
        try {
            // const task = await Task.findByIdAndDelete(req.params.id);
            const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id });

            if (!task) {
                return res.status(404).send();
            }

            res.send(task);
        } catch (error) {
            res.status(500).send();
        }
    });
    ```
1. In summary, all the routes are mainly updated with 
    1. Add middleware `auth` imported from `src/middleware/auth.js`
    1. Use `.findOne()` and `.findByIdAndDelete()` with an `Object` includes `_id` (ID of the instance itself) and `owner: req.user._id` (the user ID). 

### Cascade Delete Tasks 
1. The section here is to delete the tasks of a user, if the user has delete the account of him/herself. Therefore, we won't keep those tasks in the database which have no account can access. 
1. Therefore, in `src/routers/user.js`, we update the delete route to allow the function delete not only the user profile, but also the tasks (or other data) aligned to this user. However, instead of doing this manually, we can set another `.pre()` middleware for `userSchema`. 
1. In `src/models/user.js`, we can use [`.deleteMany()`](https://mongoosejs.com/docs/api.html#model_Model.deleteMany) which is a method that can remove multiple instances by given option. 
    ```js 
    // src/models/user.js
    const Task = require('./task');

    // delete user tasks when user is removed
    userSchema.pre('remove', async function (next) {
        const user = this;
        // delete multiple tasks by using only the owner field
        await Task.deleteMany({owner: user._id});
        next();
    });
    ```

# Sorting, Pagination, and Filtering 
1. We can use POSTMAN to pass paramters for all the function below at the aligned routes. 
### Working with Timestamps
1. We update 2 fields to both user and task model that each of them will have `Last update` and `Created` time stamp to show when was the instance created or modified. When create the schema in models, we can pass a 2nd argument which is an `Object` that can contain an option, so we can enable `timestamp`. Note that the option property name is `timestamps` which is with "s".
    ```js 
    const mongoose = require('mongoose');
    new mongoose.Schema({/* data model */}, {timestamps: true});
    ```

1. Note that this only avaiable for new schema created on `mongoose.Schema`, while it can't be made on the `mongoose.model()`. 
    ```js 
    const mongoose = require('mongoose');

    const taskSchema = new mongoose.Schema({
        description: {
            type: String,
            required: true,
            trim: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        }
    }, {
        timestamps: true,
    });

    const Task = mongoose.model('Task', taskSchema);

    module.exports = Task;
    ```

### Filtering Data
1. If a user has used the program for several years, for example, in this task-manager app, the user may have hundreds or thousands of tasks stored in the database. In this case, we'd like the user to retrieve preferable or certain amout of data rather than returning all the data in the database. 
1. The approach is to let the user pass requirements (as parameters) through URL. The endpoint can parse the parameters. This concept is similar to what we've done in the weather-app to pass parameters to the end to request data. 
1. Therefore, at the endpoint for returning all tasks, users can give options after the route such as `/tasks?completed=true` to show all the tasks that have been done or `/tasks?completed=false` for tasks are incomplete. 
1. The `.populate()` method can take an `Object` rather than just a `String` of a path with options. We can set up a `match` property which is an `Ojbect` that provide the options and filters we want it to render. Thus, we can create a variable of the scope and use destructuring shorthad to pass the object and its properties. 
    ```js 
    // src/routers/task.js
    // GET request to get all task data 
    router.get('/tasks', auth, async (req, res) => {
        const match = {}
        if (req.query.completed) {
            match.completed = req.query.completed === 'true';
        }

        try {
            await req.user.populate({
                path: 'tasks',
                match,
            }).execPopulate();
            res.send(req.user.tasks);
        } catch (error) {
            res.status(500).send();
        }
    });
    ```

### Paginating Data 
1. Pagination is to split the returned results with limited amount in multiple groups. For example, when we search something on Google, we may get millions of results returned from the query. However, we don't need to check all of them at once and get all the data. Google will separate the results into different pages. 
1. We will pass 2 arguments to the endpoint to return results `limit` and `skip`. With such properties, we can render the results in a page-like matter. 
    1. `limit` is the number for each time the database render the results. 
    1. `skip` is the number to "**skip**" from the first instance in the collection. For example, if we have 30 instances in the collection and have `limit` as 10 and `skip` as 10, when we request for the results, we will get from the 11th one to 20th instances from the database. 
1. For example, if we'd like to have 5 items rendered on the `1st` page, we can set `limit` as 5 and `skip` as 0. Therefore, we can have the first 5 instances of the collection. If we'd like the items on the "2nd page", we can use keep `limit` as 5 and `skip` as 5, so the first 5 instances will be skipped and only results from 6th to 10th will be rendered. 
    ```js 
    //src/routers/task.js
    // GET /tasks?completed=true
    // GET /tasks?limit=10&skip=20
    router.get('/tasks', auth, async (req, res) => {
        const match = {}
        if (req.query.completed) {
            match.completed = req.query.completed === 'true';
        }

        try {
            await req.user.populate({
                path: 'tasks',
                match,
                options: {
                    limit: parseInt(req.query.limit),
                    skip: parseInt(req.query.skip),
                },
            }).execPopulate();
            res.send(req.user.tasks);
        } catch (error) {
            res.status(500).send();
        }
    });
    ```

### Sorting Data 
1. With timestamp, we can sort the data in different orders as preference, such as ascending, descending, and `true` or `false` (incomplete) tasks. 
1. We can set up in the options for `sort` which is an `Object` that takes the fields to sort the data. In this case, `1` (in number type) means ascending, while `-1` is descending. 
1. Similar to `match` filter object, we can create another `sort` object that has the same name and pass it to the object in `.populate()` method. 
1. In the URL, user can pass (or pass by button or the UI) parameters as `sortBy=createdAt:desc`. Note that the column after `createdAt` can be another other special character, as we use it as the splicer to split up the strings with `.split()` method. 
1. Thus, we can create the sort function and allow `asc` (ascending as the default option) by using ternary operator `?` 
    ```js 
    // src/routers/task.js
    // GET /tasks?completed=true
    // GET /tasks?limit=10&skip=20
    // GET /tasks?sortBy=createdAt:desc
    router.get('/tasks', auth, async (req, res) => {
        const match = {};
        const sort = {};

        if (req.query.completed) {
            match.completed = req.query.completed === 'true';
        }

        if (req.query.sortBy) {
            const parts = req.query.sortBy.split(':'); // column can be changed to any other character such as underscore _
            sort[parts[0]] = parts[1] === 'desc' ? -1 : 1; // -1 is descending and 1 is ascending 
        }

        try {
            await req.user.populate({
                path: 'tasks',
                match, // use destructor notation to pass the whole object above
                options: {
                    limit: parseInt(req.query.limit),
                    skip: parseInt(req.query.skip),
                    sort, // destructor notation similar to match object 
                },
            }).execPopulate();
            res.send(req.user.tasks);
        } catch (error) {
            res.status(500).send();
        }
    });
    ```

# File Uploads (Task App)
### Adding Support for File Uploads
1. npm `express` framework itself doesn't support file upload, while we can use npm `multer` package to have the job done. 
1. In the previous sections, we send JSON format data from client (user) to the server. Since images aren't JSON, we can use `multer` package as the middleware to handle the `form-data` as it can be read as binary data of a file.
1. We can `require` `multer` package and configure its setting by passing an `Object` of options, such as limit the file types to pdf, excel sheets, and images. (Note that we don't limit the type in this case). Besides, we need to set up the path where the uploaded files will be stored. In this case, we set up `dest` (destination) at `/upload`. We can check for more [details](https://www.npmjs.com/package/multer#multeropts). 
1. In the middleware, we use `.single()` method and have a name, which is the `field` name that will be stored in the database for the file. When the user send a request, the parameter's key must be the same with this given string. According to `multer`, this single file will be stored in `req.file`. Therefore, when we use POSTMAN to upload the file, the key of the parameter should be the same as this. 
    ```js 
    const multer = require('multer');
    const upload = multer({ // configure multer for data type 
        dest: 'images' // this will create a new folder `image` in the root directory
    });
    // 'upload' is the arbitrary name of the key of parameter to send a upload request. 
    app.post('/upload', upload.single('upload'), (req, res) => {
        res.send();
    });
    ```
1. In POSTMAN, we can send the data with `body` tab and change the type from `raw` to `form-data`. In the `key` field, we can change the data type from `text` to `file` and use file selector to choose the file we want to upload. 
    <img src="postmanSendFile.PNG">
1. The uploaded files doesn't have extension (file type suffix). We can manually modify the file name with `.jpg` or other type of format according to its original datatype. 
1. We add a new route handler in `src/routers/user.js`. However, this has no filter for data type and authentication of the user. 
    ```js 
    // src/routers/user.js
    // route handler for users to upload avatar. This has no filter for data type and authentication of the user
    const multer = require('multer');
    const upload = multer({
        dest: 'avatar'
    });
    router.post('/users/me/avatar', upload.single('avatar'), (req, res) => {
        res.send();
    })
    ```

### Validating File Uploads
1. For each user uplaod, we'd like to check and validate the "**file size**" and "**file type**". 
    1. File Size - In the `Object`, which we passed to config `multer`, we can add a property `limits` which takes another `Objec` that we can give limit to the size by `fileSize`. The property takes file limit in "**bytes**". If we'd like to limit the file size to 1mb which is 1 mega bytes, we can pass `1000000` which is a million. 
    1. File type - We can pass another property `fileFilter` which is function that takes 3 arguments `req`, `file`, and `cb`. We can check [here](https://www.npmjs.com/package/multer#filefilter) for more details. 
1. To work on the filter, we can look up the documentation of `multer` for it [API](https://www.npmjs.com/package/multer#api) section. In `fileFilter` method, we can check the file info from the `file` (the 2nd argument) in the function. 
1. As we'd like to check for the extension (suffix) of the file, we can check on `file.originalname`. We can use `String.prototype.endsWith()` method to check if the `String` ends with a certain string. For example, we can check if the file name has `.pdf` as suffix. 
1. Note that for silent process can take either `undefined` or `null` and pass a boolean `true` or `false` as argument. 
    ```js 
    const multer = require('multer');
    const upload = multer({
        dest: 'images',
        limits: {
            fileSize: 1000000, // 1 mb, megabytes
        },
        fileFilter(req, file, cb) { // args are request, file, and callback
        if (!file.originalname.endsWith('.pdf')) { // check if the uploaded file has .pdf as suffix
            return new Error('Please upload a PDF');
        }

        cb(undefined, true) // silently proceed the process if upload succeed
        cb(undefined, false) // silently reject the upload 
        cb(new Error('File must be a PDF')); // send back an error 
        }
    });
    app.post('/upload', upload.single('upload'), (req, res) => {
        res.send();
    });
    ```
1. For the string filter in `fileFilter` method, we can also use `regex` (regular expression) to check. We can use [regex101.com](https://regex101.com/) to check with the `regex` to parse the string. `\.(doc|docx)$` means to start with dot `.` (by using back slash to escape) and ends with `c` or `x`. Note that we can also use question mark `?` as `\.docx?$` which means `x` character can appear 0 or 1 time in the expression. In JavaScript, we can use `String.prototype.match()` method to apply regular expression to check `String` value. 
    ```js 
    const multer = require('multer');
    const upload = multer({
        dest: 'images',
        limits: {
            fileSize: 1000000, 
        },
        fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.docx?$/g)) { // use match method with regex 
            return new Error('Please upload a MS word document');
        }

        cb(undefined, true); 
        // cb(undefined, false); 
        cb(new Error('Something went wrong'));  
        }
    });
    app.post('/upload', upload.single('upload'), (req, res) => {
        res.send();
    });
    ```

### Validation Challenge
1. In `src/routers/user.js`, we can update the filter to allow users to upload avatar 
    1. Limit the upload size to 1MB
    1. Only allow jpg, jpeg, png
1. The concept is similar to the configuration in the last section for validation. 
    ```js 
    // route handler for users to upload avatar. This has no filter for data type and authentication of the user
    const upload = multer({
        dest: 'avatar',
        limits: {
            fileSize: 1000000,
        },
        fileFilter(req, file, cb) {
            if (!file.originalname.match(/\.(jpe?g|png)$/g)) {
                return cb(new Error('Please upload an image as jpg, jpeg, or png file'));
            }

            cb(null, true);
        }
    });

    router.post('/users/me/avatar', upload.single('avatar'), (req, res) => {
        res.send();
    })
    ```

### Handling Express Errors
1. We can customize the message returned back to the user without rendering the whole HTML file by default but return simple JSON format data. In the following example, the program will respond HTML with error message to the user. 
    ```js 
    const errorMiddleware = function(req, res, next){
    throw new Error('From error middleware');
    }

    app.post('/upload', errorMiddleware, function(req, res) {
    res.send();
    });
    ```

1. In the route handler, we pass a 4th argument, which is an anonymous function that has 4 parameters `error`, `req`, `res`, and `next`. Note that the function must have 4 arguments to let `express` framework know that it is for the error handling purpose. Therefore, we can customize the message we'd like to return back on the error when there's a problem. 
1. An error handling function is a middleware similar to regular ones but has 4 arguments rather than only 3. 
    ```js 
    // upload route handler
    app.post('/upload', upload.single('upload'), (req, res) => {
        res.send();
    }, function (error, req, res, next) {
        res.status(400).send({ error: error.message }); // reply simply JSON format message
    });
    ```
1. In `src/router/user.js` we update the `/users/me/avatar` route with the error handling function. 
    ```js 
    // user upload avatar route with error handling 
    router.post('/users/me/avatar', upload.single('avatar'), (req, res) => {
        res.send();
    }, function (error, req, res, next) {
        res.status(400).send({ error: error.message }); // reply simply JSON format message
    });
    ```

### Adding Images to User Profile
1. In the previous sections, we've learnt how to validate an upload and handle errors with custom message. However, we haven't applied authentication to ensure the user can only modify his/her own data. In this case, we can simply add the `auth` middleware to the route handler. Note that a route handler can have multiple middlewares, while their order in the function is critical, as it affects the order (priority) of middleware to be executed.
1. Besides, the uploaded files aren't associated with the owner (who is the person upload the file). 
    ```js 
    // add "auth" before upload.single()
    router.post('/users/me/avatar', auth, upload.single('avatar'), (req, res) => {
        res.send();
    }, function (error, req, res, next) {
        res.status(400).send({ error: error.message }); // reply simply JSON format message
    });
    ```
1. However, we cannot store the uploaded file directly in the file system on the server, because every time we deploy a new program as using GIT repository, the files that are not in recorded (such as the database directory) will be wiped out (removed).
1. Therefore, we can modify the user model to add an extra field and store the image as binary data in the database aligned with users. In `src/models/user.js`, we give another property `avatar` to users. In this case, the new property is added after `tokens` property and has a simple property `type` as `Buffer`. Note that in this case, the profile avatar is not required, so we can have least modification to the model. Besides, we don't need to validate the data as `multer` package middleware has already given limitation on `type` and `size`. 
    ```js 
    const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        },
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number');
            }
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error(`password can't contain "password"!`)
            }
        },
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }],
    avatar: {
        type: Buffer, // store image as binary data 
    },
    }, {
        timestamps: true,
    });
    ```
1. After setting up the model, we can store the binary data to the database as a field of a user. Note that binary data is represented as a long `String`. 
1. Besides, since we will store the image as binary data type in a field of a user, we don't need to store it in the file system. 
    ```js 
    const upload = multer({
        //dest: 'avatar', // we don't need to store the image in the local file system 
        limits: {
            fileSize: 1000000,
        },
        fileFilter(req, file, cb) {
            if (!file.originalname.match(/\.(jpe?g|png)$/g)) {
                return cb(new Error('Please upload an image as jpg, jpeg, or png file'));
            }

            cb(null, true);
        }
    });
    ```
1. In route handler, we update the route method to `async` function. 
1. Add the file updated as the binary data to the user model in the `avatar` field with `req.user.avatar = req.file.buffer`. Note that `req.file` is an `Object` contains the meta-data of the file uploaded by the user and `req.file.buffer` is the type of data we will store in the database.  
1. Use `await req.user.save()` as in the other routes to save data. 
1. In this case, we can just save the data without returning anything back to the user. However, for better UX, we can redirect the page to the user profile with updated data. 
    ```js 
    // user upload avatar route with error handling 
    router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => { // update route method to async function 
        req.user.avatar = req.file.buffer // 'req.file' contains the file sent from the user in the request and the binary data is stored in 'buffer' property
        await req.user.save(); // save the file to user's avatar field 
        res.send();
    }, (error, req, res, next) => {
        res.status(400).send({ error: error.message });
    });
    ```
1. To check the uploaded image, we can access in the database in the `avatar` field and find the long `String`. We can take the binary data to render the image in HTML file. We can do this either in a regular HTML and read it in a browser or use online IDE such as CodePen or [JSBin](https://jsbin.com/). We can create a `<img>` tag in the `<body>` tag.
1. In the image tag, we can specify `data:img` with suffix of the image we are going to render, such as `jpg`, `jpeg`, and `png` and followed with encoding method such as `base64` in this case and follow with the binary code. 
    ```html 
    <body>
    <!-- sepcify the extension of image as jpeg/jpg/png -->
    <img src="data:image/jpg;base64,[image binary code]">
    </body>
    ```
    <img src="jsbinImg.PNG">
1. We update the delete route to allow user to delete avatar. We can simply set the `avatar` field as `undefined`. Though we can set to `null` as well, we will see the field of the model of the instance, as the field holds a `null` value. However, if we pass an `undefined` the field will disappear as there's no value. Besides, we can set up a condition as if there's no avatar data in the field if the user wants to try something funny. Besides, as the user is authenticated, we don't need an error handler in the route methods. 
1. Note that if we use `throw new Error()` in the route method directly, the error will appear in the terminal rather than catched by the error handler. Besides, we can't throw the error directly, as this will crash the server program. 
    ```js 
    router.delete('/users/me/avatar', auth, async (req, res) => {
    if (!req.user.avatar) {
        return res.status(400).send({ error: `You don't have avatar yet` });
    }
    req.user.avatar = undefined; // if we use null, the user 'avatar' filed will exist and has a value 'null' with 'undefined' the field will just disappear
    await req.user.save();
    res.send();
    });
    ```

### Serving up Files
1. To render the image back from the database, we can either 
    1. Use an `<img>` tag by giving attribute `src="data:image/jpg;base64,[binaryData]"`
    1. Set up an URL to return the image
1. Therefore, we set up a new router in `src/routers/user.js` with a GET requets. In this case, there may not have the user, or the user has no avatar image uploaded yet. 
    1. Use `try` and `catch` block to handle potential errors 
        1. Send `404` if there's nothing found. 
    1. Set up `header` info as `res.set('Content-Type', 'image/jpg');`. We can give the info according to the extension of the image such as `png` or `jpg`. Note that this doesn't affect the data rendered in the browser. 
    1. Return the binary data directly to the browser with `res.send()`. 
1. Note that the browser will download the file without suffix if we use `icognito` mode to access `localhost:3000/user/[id]/avatar`. We can change the suffix to `.jpg` to turn the file into an image in the OS. 
    ```js 
    // render user avatar image 
    router.get('/users/:id/avatar', async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            if (!user || !user.avatar) {
                throw new Error();
            }

            res.set('Content-Type', 'image/jpg'); // set up header info
            res.send(user.avatar);
        } catch (error) {
            res.status(404).send();
        }
    })
    ```
    <img src="checkAvatarinBrowser.PNG">
1. Therefore, a user is actually accessing the image data and view the image through browser. We can use this feature to return this URL in a `<img>` tag to use in a HTML page. 
    <img src="accessImgURL">

### Auto-Cropping and Image Formatting
1. When users upload an avatar to the server, we can use npm `sharp` package sharp to unify the data type as in `png` and resize the image to a standard size to store in the database. In this case, as the avatar image is relatively small, we can compress the image to save space in the database. 
1. We can remove the avatar property of the `user` instance model in `src/models/user.js`, as we did for `password` and `token` fields because the binary data is relatively large and we still can access the image from the new route handler through URL. 
    ```js 
    // return only non-sensitive data back to user after singup and login 
    userSchema.methods.toJSON = function () {
        const user = this;
        const userObject = user.toObject();

        delete userObject.password;
        delete userObject.tokens;
        delete userObject.avatar; // remove avatar binary data as it's large 

        return userObject;
    }
    ```
1. We then install [`sharp`](https://sharp.pixelplumbing.com/api-constructor#sharp) package via npm. Note that this package uses several libraries and will detect the envrionment which downloads the package. In my case, I use Windows command prompt to use `npm i sharp`, npm will download the package according to the environment. When we run `npm run dev` in WSL, it returns an error as the package is not available for the environment. However, if we don't use VSCode and use Ubuntu directly npm can run and install package normally. 
1. After installing `sharp`, we import the package in `src/routers/user.js` and use `sharp()` function which return a promise and takes the buffer data as input. Besides, it needs `.toBuffer()` to turn the data back to binary data. 
    1. Use `.resize()` which takes an `Object` that we can pass `width` and `height` of the image. 
    1. Use `.png()` to turn the image extension to `png`, including other types of image data, such as `jpg`. 
    1. Use `.toBuffer()` to turn the data back to buffer. 
    ```js 
    const sharp = require('sharp');
    // user upload avatar route with error handling 
    router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
        // use resice() and png() to standardize the image
        const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250, }).png().toBuffer();
        // all the image will be saved as .png file and has 250px * 250px on width and height.
        req.user.avatar = buffer;
        await req.user.save();
        res.send();
    }, (error, req, res, next) => {
        res.status(400).send({ error: error.message });
    });
    ```
1. Note that we can design user interface to allow users to adjust the photo upon requirements by giving adjustable width and height as input. 

# Sending Emails (Task App)
### Exploring SendGrid
1. We firstly sign up and use the free plan on sendGrid, which can send 10k emails in the first month and up to 100 emails per day after first 30 days free trial. 
1. In this case, we can use Send Grid Web API to work with our backend. 
    ```js 
    // src/emails/account.js 
    const sgMail = require('@sendgrid/mail');
    const sendgridAPIKey = `[your send grid API key]`; // we can store this in environment variable in the OS runs this app

    sgMail.setApiKey(sendgridAPIKey);

    // send email to and from a user
    // we can send HTML format email to users as well 
    sgMail.send({
        to: `apple@gmail.com`,
        from: `apple@gmail.com`, // this can be any even we don't actually own the domain name. This may let email services put the email to spam
        subject: `This is my first creation!`,
        text: `I hope this one actually get to you`,
    });
    ```
1. Sendgrid currectly requires further authentication to prevent users abuse the service to send spams. Therefore, we have to configure more settings before we start. We go to "**settings**" on the left navigation panel and work on "**sender authentication**". We create single sender verification and set the "From email address" and "Reply to" to the email we are going to use in the `account.js`. 
1. We can check documentations for verifying domain, we can prevent email services to put the emails from sendgrid to spams because the email services, such as Gmail or Microsoft, can't verify if we really owns the domain name we give. This is in the last task to work on sender authentication in the setting that we can either authenticate a single user or a domain name. 

### Sending Welcome and Cancelation Emails 
1. When users sign up new accounts or choose to cancel or delete the account, we can send an email to them with a welcome message or questionnaire to check feedbacks and follow up. 
    ```js 
    const sgMail = require('@sendgrid/mail');
    const sendgridAPIKey = `[your API Key]`;

    sgMail.setApiKey(sendgridAPIKey);

    const sendWelcomeEmail = (email, name) => {
        sgMail.send({
            to: email,
            from: 'apple@gmail.com',
            subject: 'Thanks for joining us',
            text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
        })
    }

    module.exports = {
        sendWelcomeEmail,
    };
    ```
1. Therefore, we can set up other function to call in the routers such as send a welcome email to user when firstly sign up and recap email when a user choose to delete the account. In this case, we import the functoin from `src/emails/account.js` and use it in the account create route. Though we can add the function in the router file directly, we can separate it into a different module, so the code can be managed. 
1. Besides, though `sgMail.send()` is a async function, we don't need to use `await` to wait for the result back to proceed on, as the user can just go to their email to check the welcoming email. 
    ```js 
    // src/routers/user.js
    const { sendWelcomeEmail } = require('../emails/account');
    // POST request to create a new user (sign up)
    router.post('/users', async (req, res) => {
        const user = new User(req.body);

        try {
            await user.save();
            sendWelcomeEmail(user.email, user.name); // send a welcome email to the user
            const token = await user.generateAuthToken();
            res.status(201).send({ user, token });
        } catch (error) {
            res.status(400).send(error);
        }
    });
    ```
1. Besides welcome email, we can send a farewell email when a user choose to delete the account for a chance to recap or hold the user back. Note that besides `text` in the email, we can send `html` with HTML elements for marketing campaign. 
    ```js 
    //src/emails/account.js
    const sendGoodByeEmail = (email, name) => {
        sgMail.send({
            to: email,
            from: 'apple@gmail.com',
            subject: `Oh no... Please Don't go...`,
            html: `<h1>Don't Go Away!!!</h1>
                   <p>Dear ${name}</p>
                   <p>Please give us a 2nd chance...</p>
                  `,
        });
    }

    module.exports = {
        sendWelcomeEmail,
        sendGoodByeEmail,
    }

    //src/routers/user.js
    const { sendWelcomeEmail, sendGoodByeEmail } = require('../emails/account');

    // Delete request to remove a specific user
    router.delete('/users/me', auth, async (req, res) => {
        try {
            await req.user.remove();
            sendGoodByeEmail(req.user.email, req.user.name) // send a goodbye email
            res.send(req.user);
        } catch (error) {
            res.status(500).send();
        }
    });
    ```

### Environment Variables 
1. We can set up environment variables for 2 main purposes
    1. We can secure the sensitive data by hiding them in environment variabls, whic can be accessed through the local OS. 
    1. We can customized the code to run in different environment. For example, we use `process.env.PORT` in `index.js`, so when the program is deployed to Heroku, the program will find the correct port in the environment. 
1. In this case, we hard coded the path for `src/db/mongoose.js` to link. When this code deployed to Heroku, it will still try to access the local database which is not correct. 
1. We create a new directory `config` which should be added to `.gitignore` that is not included and uploaded to the repository. In `config` directory, we can create a new file `dev.env` to store the environment variables. In the file, we can simply provide `key=value` pairs directly. Note that there's no space between equal sign and `key` and `value`. 
1. Setting up environment variables in different OS is the pain in the ass. We can use a npm package `env-cmd` to deploy the environment variabls through npm and fufill cross-platform feature. Besides, this package is only required locally, so we can use `npm i env-cmd --save-dev` to install the depency only in development mode. 
1. We create a `config` folder and have the `key=value` pairs stored in the file. 
    ```shell
    PORT=3000
    SENDGRID_API_KEY=[your API key]
    JWT_SECRET=thisismynewcourse
    MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
    ```
1. In JSON, we can update the `dev` property in `scripts`. From the lecture the command can be `env-cmd -f ./config/dev.env nodemon src/index.js`. However, as my environment can't find the file, I have to put a `-f` flag. 
    ```json
    {
        "scripts": {
        "start": "node src/index.js",
        "dev": "env-cmd -f ./config/dev.env nodemon src/index.js" // here requires -f flag 
        },
    }
    ```
1. Note that we store environment variables in all captial letters in convention, so does we do in `index.js` for `PORT` variable. Besides, after updating, we can try with POSTMAN to test the endpoint if it works correctly. 
    ```js 
    // src/emails/account.js
    // const sendgridAPIKey = `[your send grid API key]`;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY); // use environment variable 
    ```
1. Note that in this case, we have several files to modify to change the hard coded value to environment variabls. 
    1. `index.js` for `PORT`
    1. `account.js` for `SENDGRID_API_KEY`
    1. `mongoose.js` for `MONGODB_URL`
    1. `auth.js` for `process.env.JWT_SECRET`
    1. `src/models/user.js` for `process.env.JWT_SECRET`

### Creating a Production MongoDB Database
1. Since we can't link to the local database in production on Heroku, we can use a hosting service from MongoDB in production. 

### Heroku Deployment

# Testing Node.js (Task App)
### Jest Testing Framework 
### Writing Tests and Assertions
### Writing Your Own Test 
### Testing Asynchronous Code 
### Testing an Express Application: Part 1
### Testing an Express Application: Part 2
### Jest Setup and Teardown
### Testing with Authentication 
### Advanced Assertions
### Mocking Libraries
### Wrapping up User Tests
### Setup Task Test Suite
### Testing with Task Data 
### Bonus: Extra Test Ideas

# Real-time Web Applications with Socket.io (Chat App)
### Creating the Chat App Project
### WebSockets
### Getting Started with Socket.io
### Socket.io Events 
### Socket.io Events Challenge
### Broadcasting Events 
### Sharing Your Location 
### Event Acknowledgements 
### Form and Button states 
### Rendering Messages
### Rendering Location MEssages
### Working with Time 
### Timestamps for Location Messages 
### Styling the Chat App
### Join Page
### Socket.io Rooms 
### Storing Users: Part 1 
### Storing Users: Part 2
### Tracking Users Joining and Leaving 
### Sending Messages to Rooms
### Rendering User List 
### Automatic Scrolling 
### Deploying the Chat Application 