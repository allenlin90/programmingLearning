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