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
    const chalk = require('chalk');
    const getNotes = require('./notes.js');

    const command = process.argv[2]; 

    console.log(process.argv); 

    if (command === 'add') {
        console.log('Adding note!');
    } else if (command === 'remove') {
        console.log('Removing note!');
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
    const yargs = require('yargs');
    console.log(yargs.argv);
    // { _: [ 'add' ], title: 'Things to buy', '$0': 'app.js' }
    ```
1. `yargs` module has a default function `--help` which we can check what commands are available of the JS App. 
1. We then can use `.command()` method to set up the commands. We can also change the version of the program when users checks it. `.command()` method takes an `Object` as argument which contains `command` (with a `String` value), `describe` (with a `String` value), and `handler` (a method). 
    ```js 
    // Customize yargs 
    yargs.version('1.1.0');

    // Create add command 
    yargs.command({
        command: 'add', 
        describe: 'Add a new note',
        handler: function() {
            console.log('Adding a new note!');
        },
    });

    // Create remove command 
    yargs.command({
        command: 'remove', 
        describe: 'Remove a note',
        handler: function() {
            console.log('Removing the note!');
        },
    });

    // Create list command 
    yargs.command({
        command: 'list',
        describe: 'List all the notes!',
        handler: function(){
            console.log('Listing the note!');
        }
    });

    // Create read command
    yargs.command({
        command: 'read', 
        describe: 'Read only mode',
        handler: function(){
            console.log('You can read the notes only!');
        }
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
        command: 'add', 
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string',
            },
        }, 
        handler: function(argv) {
            console.log('Adding a new note!', argv);
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
        command: 'add', 
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string',
            },
            body: {
                describe: 'Note contents',
                demandOption: true,
                type: 'string',
            }, 
        }, 
        handler: function(argv) {
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