Start learning on 2020/12/10
Finished 
---
1. [Let's Dive In!](#Let's-Dive-In!)
    1. [Our First App](#Our-First-App)
    1. [Critical Questions](#Critical-Questions)
    1. [Generating a React Project](#Generating-a-React-Project)
    1. [Why Create React App?](#Why-Create-React-App?)
    1. [Exploring a create-react-app project](#Exploring-a-create-react-app-project)
    1. [Starting and Stopping a React App](#Starting-and-Stopping-a-React-App)
    1. [Displaying Content with Functional Components](#Displaying-Content-with-Functional-Components)
1. [Building Content with JSX](#Building-Content-with-JSX) 
1. [Communicating with Props](#Communicating-with-Props) 
1. [Strucuturing Apps with Class-based Components](#Strucuturing-Apps-with-Class-based-Components) 
1. [State in React Components](#State-in-React-Components) 
1. [Understanding Lifecycle Methods](#Understanding-Lifecycle-Methods) 
1. [Handling User Input with Forms and Events](#Handling-User-Input-with-Forms-and-Events) 
1. [Making API Requests with React](#Making-API-Requests-with-React) 
1. [Building Lists of Records](#Building-Lists-of-Records) 
1. [Using Ref's for DOM Access](#Using-Ref's-for-DOM-Access) 
1. [Let's Test Your React Mastery!](#Let's-Test-Your-React-Mastery!) 
1. [Understanding Hooks in React](#Understanding-Hooks-in-React) 
1. [Navigation From Scratch](#Navigation-From-Scratch) 
1. [Hooks in Practice](#Hooks-in-Practice) 
1. [Deploying a React App](#Deploying-a-React-App) 
1. [On We Go...To Redux!](#On-We-Go...To-Redux!) 
1. [Integrating React with Redux](#Integrating-React-with-Redux) 
1. [Async Actions with Redux Thunk](#Async-Actions-with-Redux-Thunk) 
1. [Redux Store Design](#Redux-Store-Design) 
1. [Navigation with React Router](#Navigation-with-React-Router) 
1. [Handling Authenitcation with React](#Handling-Authenitcation-with-React) 
1. [Reducx Dev Tools](#Reducx-Dev-Tools) 
1. [Handling Forms with Redux Form](#Handling-Forms-with-Redux-Form) 
1. [REST-based React Apps](#REST-based-React-Apps) 
1. [Using React Portals](#Using-React-Portals) 
1. [Implementing Streaming Video](#Implementing-Streaming-Video) 
1. [The Context System with React](#The-Context-System-with-React) 
1. [Replacing Redux with Context](#Replacing-Redux-with-Context) 
1. [Working with Older Versions of React](#Working-with-Older-Versions-of-React) 
1. [Ajax Requets with React ](#Ajax-Requets-with-React) 
1. [Modeling Application State](#Modeling-Application-State) 
1. [Managing App State with Redux](#Managing-App-State-with-Redux) 
1. [Intermediate Redux: Middleware](#Intermediate-Redux:-Middleware) 
1. [React Router + Redux Form v6](#React-Router-+-Redux-Form-v6) 
1. [Bonus Topics](#Bonus-Topics) 
1. [React Router + Redux Form v4](#React-Router-+-Redux-Form-v4) 
1. [Extras](#Extras) 
---
# Let's Dive In!
## Our First App
1. We imported several objects from the other JavaScript file. We can check the [demo](https://codesandbox.io/s/react-jg4cq)
    ```js
    import "./styles.css";
    import React, { useState } from "react";
    import Field from "./components/field";
    import Languages from "./components/languages";
    import Translate from "./components/translate";

    export default function App() {
        const [language, setLanguage] = useState("zh-CN");
        const [text, setText] = useState("");

        return (
            <div>
            <Field label="Enter English" onChange={setText} value={text} />
            <Languages language={language} onLanguageChange={setLanguage} />
            <hr />
            <Translate text={text} language={language} />
            </div>
        );
    }
    ```
    <img src="./images/firstReactAppDemo.gif">

## Critical Questions
1. What was the 'App' function? 
    1. The `App` function in the previous is a `React Component`. The `App Component` produces JSX and handles user events.
    1. `JSX` is a set of instructions to tell React what content we want to show on the screen.
    1. We can use JSX elements to tell React to create a normal HTML element or show another component that has been created. 
    1. `JSX` will go through each of the elements in the code to check if it is a DOM element. If there's a DOM element, it shows on the screen. If the entity is not a DOM element, it will call the component function and inspect all the JSX.
1. How did some content get displayed on the screen?
    1. The first step is that the browser make a request to the host for the `index.html`.
    1. In the `index.html`, there's more script that will request another `bundle.js` which is bundled from `index.js`, `app.js`, and `react.js`. 
    1. Therefore, we get `index.html` and `bundle.js` from 2 requests. 
    <img src="./images/reactAppFiles.png">    
    1. In this case, the browser will firstly get `index.html` from the `public` folder which will make another requst for the script `index.js`.
    ```js
    // index.js 
    import React from "react";
    import ReactDOM from "react-dom";
    import App from "./App";

    ReactDOM.render(
        <App />, 
        document.getElementById("root")
        );
    ```
    1. Checking from the code, we can find the first statement in `ReactDOM.render()` is `<App />` which is to check the `App` function in `App.js`, get back `JSX` and turn it into HTML.
    1. Then `ReactDOM.render()` will take the HTML created by `JSX` and put it into the element selected by `document.getElementById("root")`.
1. What's the difference between React and ReactDOM?
    1. When working with React, we are working with 2 separate libraries. `React` and `ReactDOM`. 
    1. `React` knows how to work with components and is called a `reconciler`.
    1. `ReactDOM` knows how to work with take instructions on what we want to show and turn it into HTML and is called a `renderer`. It works as to take the HTML elements rendered by JSX to show on the screen.
1. What was all the '`useState`' stuff?
    1. `useState` is a function for users to work with React's `state` system. 
    1. State system is used to manage data and track data that changes over time.
    1. State system can be used to update the HTML on the screen.    

## Generating a React Project
1. After installing `NodeJS`, we can use `npm install -g create-react-app` to install the npm package to install `create-react-app` which is used to generate react projects. 
1. We then can use `create-react-app project_name` to create a react project at current directory.
1. `npx create-react-app project_name` is an alternative way to generate and start a react project.
1. This command will install all the required packages to work on a react project.
1. Note that since some update in year 2020, the method to install react with `create-react-app` locally has made some new generated project issues. Therefore, it's recommended to use `npx create-react-app project_name` to generate new react app.

## Why Create React App?
1. The main topic introduced here is `Babel` which can take any version of JavaScript such as ES2015, ES2016, and so on to turn them into ES5 which is the version that mostly all the browser support.

## Exploring a create-react-app project
1. By default, several files and folders are generated when creating a react project. 
1. `src` is the folder where we put all the source code we write.
1. `public` is the folder that stores static files like images.
1. `node_modules` is the folder that contains all of our project dependencies.
1. `package.json` records the project dependencies.
1. `package-lock.json` records the exact version of packages that we install.
1. `README.md` has the instructions on how to use this project. 

## Starting and Stopping a React App
1. After creating the new project, we can `cd` into the directory and use `npm start` to start the developing server and start development. The testing server will create the app at `localhost` at port `3000`.

## JavaScript Module Systems
1. In React, the code is separated in different JavaScript files and each of the won't affect to each other. 
1. By developing the React App, we use JavaScript module system which syntax is `imoprt React from 'react'`
    1. `import` is the key word to indicate that we want to get code from some other file or dependency.
    1. `React` is the variable we want to assign this import to. We can use the name arbitrarily. However, we should try to follow the convention to name the variable.
    1. `from` is a keyword that used in the syntax.
    1. `'react'` is the name of the dependency or path to the file we are importing.
1. When `import` from a file, this statement is to ask JavaScript to find the desirable module from `node_module` directories. In this case, we want to use the code in `react` and `react-dom`. 
1. There are 2 ways to import code from different JavaScript files. One is using `import` which is "ES2015 Modules system, while `require` is from "CommonJS Modules" which is a different module system. 
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    ```

## Displaying Content with Functional Components
1. A component is a "Function" or "Class" that produces HTML to show the user using "JSX" and handles feedback from the user using "Event Handlers".
1. After creating the JSX component, we use `ReactDOM` with `.render()` method to give the component and render it on the `index.html`. Note that in the HTML template, we have a HTML element `<div id="root"></div>` that will be used to render the React App. 
    ```js
    // import the React and ReactDOM libraries
    import React from 'react';
    import ReactDOM from 'react-dom';

    // Create a react component
    const App = () => {
        return <div>Hi there!</div>;
    }

    // Take the react component and show it on the screen
    ReactDOM.render(
        <App />,
        document.querySelector('#root')
    );
    ```

# Building Content with JSX

# Communicating with Props

# Strucuturing Apps with Class-based Components

# State in React Components 

# Understanding Lifecycle Methods

# Handling User Input with Forms and Events 

# Making API Requests with React 

# Building Lists of Records

# Using Ref's for DOM Access

# Let's Test Your React Mastery! 

# Understanding Hooks in React 

# Navigation From Scratch

# Hooks in Practice

# Deploying a React App 

# On We Go...To Redux!

# Integrating React with Redux

# Async Actions with Redux Thunk

# Redux Store Design 

# Navigation with React Router

# Handling Authenitcation with React

# Reducx Dev Tools

# Handling Forms with Redux Form

# REST-based React Apps 

# Using React Portals 

# Implementing Streaming Video

# The Context System with React 

# Replacing Redux with Context

# Working with Older Versions of React

# Ajax Requets with React 

# Modeling Application State

# Managing App State with Redux

# Intermediate Redux: Middleware

# React Router + Redux Form v6

# Bonus Topics

# React Router + Redux Form v4

# Extras

