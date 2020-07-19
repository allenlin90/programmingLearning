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

1. In Heroku, adding the public key is relatively simple that we can just type `heroku add:key` in command line. Note that in this case, we use Windows command prompt (or PowerShell), as we can't install Heroku CLI in WSL. Heroku CLI will check the folder and find the available public key(s) it self. After that we type `yes` and allow Heroku CLI upload the public key.
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
