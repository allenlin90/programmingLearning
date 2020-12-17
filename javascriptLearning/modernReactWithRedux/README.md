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
    1. [What is JSX](#What-is-JSX)
    1. [Converting HTML to JSX](#Converting-HTML-to-JSX)
    1. [Inline Styling with JSX](#Inline-Styling-with-JSX)
    1. [Converting Styling to JSX Format](#Converting-Styling-to-JSX-Format)
    1. [Class vs ClassName](#Class-vs-ClassName)
    1. [Referencing JS Variables in JSX](#Referencing-JS-Variables-in-JSX)
    1. [Values JSX Can't Show](#Values-JSX-Can't-Show)
    1. [Finding Forbidden Property Name](#Finding-Forbidden-Property-Name)
1. [Communicating with Props](#Communicating-with-Props)
    1. [Three Tenets of Components](#Three-Tenets-of-Components)
    1. [Getting Some Free Styling](#Getting-Some-Free-Styling)
    1. [Specifying Images in JSX](#Specifying-Images-in-JSX)
    1. [Duplicating a Single Component](#Duplicating-a-Single-Component)
    1. [Extracting JSX to New Components](#Extracting-JSX-to-New-Components)
    1. [React's Props System](#React's-Props-System)
1. [Strucuturing Apps with Class-based Components](#Strucuturing-Apps-with-Class-based-Components) 
    1. [Class-based Components](#Class-based-Components)
    1. [Application Overview](#Application-Overview)
    1. [Application Overview - Season Experiencing](#Application-Overview---Season-Experiencing)
    1. [Handling Async Operations with Functional Components](#Handling-Async-Operations-with-Functional-Components)
    1. [Refactoring from Functional to Class Components](#Refactoring-from-Functional-to-Class-Components)
1. [State in React Components](#State-in-React-Components) 
    1. [The Rules of State](#The-Rules-of-State)
    1. [Initializing State Through Constructors](#Initializing-State-Through-Constructors)
    1. [Updating State Properties](#Updating-State-Properties)
    1. [Handling Error Gracefully](#Handling-Error-Gracefully)
1. [Understanding Lifecycle Methods](#Understanding-Lifecycle-Methods) 
    1. [Introducing Lifecycle Methods](#Introducing-Lifecycle-Methods)
    1. [Why Lifecycle Methods](#Why-Lifecycle-Methods)
    1. [Alternate State Initialization](#Alternate-State-Initialization)
    1. [Passing State as Props](#Passing-State-as-Props)
    1. [Showing Icons](#Showing-Icons)
    1. [Specifying Default Props](#Specifying-Default-Props)
    1. [Avoid Conditionals in Render](#Avoid-Conditionals-in-Render)
    1. [Breather and Review](#Breather-and-Review)
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
## What is JSX
1. In React, we use `Babel` to tranform ES2015 or more modern JavaScript code into ES5 to ensure all the browser can run the JavaScript. 
1. `Babel` can not only translate modern JavaScript code but also JSX code to work as JavaScript DOM.

## Convert HTML to JSX
1. JSX is special dialect of JS (which is not HTML).
1. Browser don't understand JSX code. We write JSX then run tools to turn it into normal JS.
1. JSX is very similar in form and function to HTML with a couple differences.
1. In convention, we can put parenthesis to wrap the HTML in after the `return` keyword in `App` function. 
1. However, in the following case, the code doesn't work and can't be rendered on React App.
    ```js
    // import the React and ReactDOM libraries
    import React from 'react';
    import ReactDOM from 'react-dom';

    // Create a react component
    const App = () => {
        return (
            <div>
                <label class="label" for="name">Enter name:</label>
                <input id="name" type="text"/>
                    <button style="background-color: blue; color: white;">Submit</button>
            </div>
        );
    };

    // Take the react component and show it on the screen
    ReactDOM.render(
                <App />,
        document.querySelector('#root')
    );
    ```

## Inline Styling with JSX
1. In JSX, we can't use regular inline styling syntax to decorate HTML elements.
1. In the naming convention in JSX, any properties that has dash `-` as delimeter between strings shall be converted into camel case. For example we turn `background-color` into `backgroundColor`.
    ```html
    <!-- html -->
    <div style="background-color:red;"></div>
    ```
    ```js
    <div style={{backgroundColor:'red'}}></div>
    ```

## Converting Styling to JSX Format
## Class vs ClassName
## Referencing JS variable in JSX
1. The value of the property should be single-quoted and be put as JavaScript object. While single-line properties such as `class` and `for`, we can use double quotes to wrap them.
1. The custom styling syntax to an element are different in JSX and HTML.
1. JSX uses different syntax to add a class to an element.
1. JSX can reference JS variables.
1. In JSX, we use `className` for `class` property in HTML. The main reason is that `class` is a reserved keyword in JavaScript to create classes for OOP.
1. We can easily insert a JavaScript variable in JSX by wrapping the JavaScript variable with curly braces `{}`. Note that this JavaScript variable reference has its limitation for certain data type or returned data value from the function.
    ```js
    // import the React and ReactDOM libraries
    import React from 'react';
    import ReactDOM from 'react-dom';

    function getButtonText() {
        return 'Click Me!';
    }
    // Create a react component
    const App = () => {
        const labelName = 'Click Me!';
        return (
            <div>
                <label className="label" for="name"> // use className rather than class in JSX
                    {labelName} // use curly braces to wrap JavaScript variable 
                </label>
                <input id="name" type="text" />
                <button style={{ backgroundColor: 'blue', color: 'white'}}> // use JavaScript object and change css property to camelCase
                    {getButtonText()} // use curly braces to wrap JavaScript function
                </button>
            </div>
        );
    };

    // Take the react component and show it on the screen
    ReactDOM.render(
        <App />,
        document.querySelector('#root')
    );
    ```

## Values JSX Can't Show
## Finding Forbidden Property Names
1. The JavaScript variable reference can take `Number` and `String` or an `Array` that has `Number` or `String` as its elements.
1. The elements in the array will be concatenated 
1. However, regular `Objects` are not available to be used as React child. However, if the value of a property in an object is string or number type of value, we can refer it in JSX directly. 
1. `for` is also a reserved JavaScript keyword which is used in `for loop`. Therefore, in the following case, we can specify the `for` attribute for `label` element in HTML as `htmlFor` to prevent warnning message from React. 
    ```js
    const App = () => {
        const buttonText = {text: 'Click Me'};
        const style = {backgroundColor: 'blue', color: 'white'};
        const labelText = 'Enter name:';

        return (
            <div>
                <label className="label" for="name">
                    {labelText}
                </label>
                <input id="name" type="text"/>
                <button style={style}>
                    {buttonText.text}
                </button>
            </div>
        );
    };
    ```



# Communicating with Props
## Three Tenets of Components
1. Component Nesting - A component can be shown in side of another
1. Component Reusability - We want to make components that can be easily reused through out application.
1. Component Configuration - We should be able to configure a component when it is created. 

## Application Overview
1. We are going to create a React component which has user profile, user name, date and time, and user comment.
1. We will use `semantic` UI CDN, which is a CSS library similar to Bootstrap. We can use the cdn at [<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">](<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">).
1. In this case, we create a new react project `components` with `npx create-react-app components`.

## Getting Some Free Styling
1. After creating the new react project, we remove all the files in `src` directory to get a clean start. 
1. We then create `index.js` in `src` directory.
1. In this case, we use the [comment](https://semantic-ui.com/views/comment.html) styling from semantic UI.

## Naive Component Approach
1. In the JSX, we use the follow HTML elements with semantic UI css to style it. 
    ```js
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" />
        </a>
        <div className="content">
            <a href="/" className="author">
                Sam
            </a>
            <div class="metadata">
                <span className="date">Today at 6:00PM</span>
            </div>
            <div className="text">Nice blog post!</div>
        </div>
    </div>
    ```

## Specifying Images in JSX
1. In this case, we use a npm package `faker` which can provide mock up contents, data, and images. We can use `npm i faker --save` in the project directory.
    ```js
    import faker from 'faker';
    const App = () => {
        return (
            <img alt="avatar" src={faker.image.image()} />
        );
    }
    ```

## Duplicating a Single Component
## Extracting JSX to New Components
1. From the previous case, if we'd like to duplicate the same components from the page, we can only copy the HTML elements to be rendered in JSX, which can be very confusing when the project goes larger. This is why we'd like to use reusable components.
1. To create a reusable, configurable component, we can 
    1. Identify the JSX taht appears to be duplicated.
    ```js
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.image()} />
        </a>
        <div className="content">
            <a href="/" className="author">
                Sam
            </a>
            <div class="metadata">
                <span className="date">Today at 6:00PM</span>
            </div>
            <div className="text">Nice blog post!</div>
        </div>
    </div>
    ```
    1. What is the purpose of that block of JSX? Think of a descriptive name for what it does.    
    1. Create a new file to house this new component - it should have the same name as the component. In convention, we can capitalize the first letter of each term of the name. 
    1. Create a new component in the new file, paste the JSX into it.
    1. Make the new component configurable by using React's "props" system.
    ```js
    // CommentDetail.js
    import React from 'react';

    const CommentDetail = () => {
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.image()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div class="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        );
    };
    ```

## Component Nesting
1. To use the component, we need to `export` to component from the JavaScript file
    ```js
    // CommentDetail.js
    export default CommentDetail;
    ```
1. In the main `index.js` file, we can import the component with relative path.
1. To use the component we can use it as HTML element in JSX directly. Note that we don't use curly braces to render them as regular JavaScript functions. 
1. In this case, the components and contents of it are still static from hard code.
1. After the structure and layout is settled, we can start working on "props" system.
    ```js
    // index.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import CommentDetail from './CommentDetail';

    const App = () => {
        return (
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
        );
    };
    ```

## React's Props System
1. `Props` is the system for passing data from a "parent" component to a "child" compponent.
1. The goal is to customize or configure a child component.
1. In this case, each "comment" component has variables as `name`, `time`, `content` of comment.
1. "Props" stands for properties.

## Passing and Receiving Props
1. We can pass the data or value for the variable through the parent component to child component.
1. The parent component are those in `index.js`. In this case, we give each `CommentDetail` component with `author` attribute.
    ```js
    // index.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import CommentDetail from './CommentDetail';

    const App = () => {
        return (
            <div className="ui container comments">
                <CommentDetail author="Sam" />
                <CommentDetail author="Alex" />
                <CommentDetail author="Jane" />
            </div>
        );
    };

    ReactDOM.render(<App />, document.querySelector('#root'));
    ```
1. If we check in the component JS file, we can give component function a argument, such as `props` and check what data is in the object.
    ```js
    // CommentDetail
    const CommentDetail = (props) => {
        console.log(props);
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.image()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author} // take data given from the parent component 
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        );
    };
    ```

## Passing Multiple Props
1. In the last section, we pass autor name of each user who left a comment on the page. 
1. We'd like to pass other variables to the component. We can reformat the component into multiple lines.
    ```js
    // CommentDetail
    const CommentDetail = (props) => {
        console.log(props);
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">{props.comment}</div>
                </div>
            </div>
        );
    };

    // index.js
    const App = () => {
        return (
            <div className="ui container comments">
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    avatar={faker.image.image()} 
                    comment={faker.lorem.slug()} 
                />
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    avatar={faker.image.image()}
                    comment={faker.lorem.slug()}
                />
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 5:00PM"
                    avatar={faker.image.image()}
                    comment={faker.lorem.slug()}
                />
            </div>
        );
    };
    ```

## Component Reuse
## Implementing an Approval Card
1. We'd like to add more features on the comment component. In this case, we'd like to add an "Approve" and "Reject".
1. We create a new file in the same directory. In this case, we create `ApprovalCard.js`. In this case, we refer to the [cards](https://semantic-ui.com/views/card.html) in Semantic UI.
    ```js
    // ApprovalCard 
    import React from 'react';

    const ApprovalCard = () => {
        return (
            <div className="ui card">
                <div className="content">Are you sure?</div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Reject</div>
                    </div>
                </div>
            </div>
        );
    };

    export default ApprovalCard;
    ```
1. We then can put the new component in `index.js` directly to use. However, we haven't know how to make the `CommentDetail` component as the child element in the `ApprovalCard`. In the current layout the 2 components are parallel to each other in the same tier. 
    ```js
    // index.js
    const App = () => {
        return (
            <div className="ui container comments">
                <ApprovalCard />
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    avatar={faker.image.image()}
                    comment={faker.lorem.slug()}
                />
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    avatar={faker.image.image()}
                    comment={faker.lorem.slug()}
                />
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 5:00PM"
                    avatar={faker.image.image()}
                    comment={faker.lorem.slug()}
                />
            </div>
        );
    };
    ```

## Showing Custom Child
1. To create relationship between the components, we can use opening and closing tags as regular HTML element to wrap the child compnent.
    ```js
    // index.js
    <ApprovalCard>
        <CommentDetail
            author="Sam"
            timeAgo="Today at 4:45PM"
            avatar={faker.image.image()}
            comment={faker.lorem.slug()}
        />
    </ApprovalCard>
    ```
1. If we go to `ApprovalCard.js` and add an argument to the render function, we can find that the `CommentDetail` has now become a child property in the object.
1. Therefore, we can use JSX syntax to call the value from the property to have `CommentDetail` nested in the `ApprovalCard`. The property of the object is `children`. Note that if we don't call the `children` property in the parent component, the children won't show up.
    ```js
    const ApprovalCard = (props) => {
        console.log(props) // check the child object in the parent component
        return (
            <div className="ui card">
                <div className="content">{props.children}</div> // use the child object in the parent component
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Reject</div>
                    </div>
                </div>
            </div>
        );
    };
    ```
1. Besides putting other comopnent as child or to be nested, we can use the `ApprovalCard` component with regualr HTML elements. Note that in the child component, we must put and refer to the properties that send from parent component.
    ```js
    // index.js
    <ApprovalCard>
        <div>
            <h4>Warning!</h4>
            Are you sure you want to do this?
        </div>
    </ApprovalCard>

    // ApprovalCard
    ApprovalCard = (props) => {
        return (
            {props.children}
        );
    };
    ```

# Strucuturing Apps with Class-based Components
## Class-based Components
1. A component can be either a `Function` or `Class` that produces HTML to show the user (which is using JSX) and handles feedback from the user (which is using event handler).
1. React used to work as the followings
    1. Functional Components can product JSX to show content to the user
    1. Class Components can produce JSX to show content to the user
        1. Can use the "Lifecycle Method" system to run code at specific points in time.
        1. Can use the "State" system to update content on the screen.
    1. The main difference between `Function` and `Class` componenet is that the function one is more straight forward while the class one can access "lifecycle method system" and "state system".
    1. In the past, `Class` components have more features than `Function` components.
1. React is now working with `"Hook"` system, which makes `Function` components similar to `Class` components.
1. In this case, companies with "established projects" are using class-based components, while companies with "newer projects" may be using class-based or function-based components.
1. In this sense, we should learn both class-based and function-based components.

## Application Overview - Season Experiencing
1. This app requires
    1. Needs to get the users physical location
    1. Needs to determine the current month
    1. Need to change text and styling based on location and month

## Scaffoldingthe the App
1. For this project, we use semantic UI at [<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">](<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">).
1. The steps of building the app in 2 parts, `App` and `SeasonDisplay`.
    1. Has the code to determine `location` and `month`.
    1. Shows different text/icons based on props.
    ```js
    // index.js
    import React from 'react';
    import ReactDOM from 'react-dom';

    const App = () => {
        return <div>Hi there!</div>;
    };

    ReactDOM.render(
        <App />,
        document.querySelector('#root')
    );


    // SeasonDisplay
    import React from 'react';

    const SeasonDisplay = () => {
        return <div>Season Display</div>;
    };

    export default SeasonDisplay;
    ```

## Getting a Users Physical Location
1. We can use browser navigator API to fetch user's location under user permission.
1. `windows.navigator.geoloaction.getCurrentPosition` takes 2 function arguments which is to return the `coords` object with users latitude and longitude with other metadata and the other callback function for returning error message.
1. Therefore, we can check user's location or get the message to know that if the user deny for location access.
    ```js
    // index.js
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );
    ``` 

## Handling Async Operations with Functional Components
1. After getting the location of the user from the API, it is challenging to use function component to render the data from async operations on the screen.
1. When the app is working
    1. JS file loaded by browser
    1. App component get created
    1. We call geolocation service
    1. App returns JSX, gets rendered to page as HTML
    1. We get result of geolocation
1. In short, the page is rendered before we get the location data from the user. 

## Refactoring from Functional to Class Components
1. Rules of Class Components
    1. Must be JavaScript class
    1. Must extend (subclss) `React.Component`
    1. Must define a `render` method that returns some amount of JSX
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';

    class App extends React.Component {
        render() {
            window.navigator.geolocation.getCurrentPosition(
                (position) => console.log(position),
                (err) => console.log(err)
            );

            return <div>Latitude: </div>;
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('#root')
    );
    ```



# State in React Components 
## The Rules of State
1. Rules of State
    1. Only useable with class component.
    1. You will confuse `props` with state.
    1. '`State`' is a JS object that contains data relevant to a component.
    1. Updating '`state`' on a component causes the component to (almost) instantly rerender.
    1. State must be initialized when a component is created. 
    1. State can only be updated using the function `setState`!
1. We should always remeber to update state of a component only through `setState` function.

## Initializing State Through Constructors
1. As learnt from the previous section, we know that the state of a react component must be initialized when it is created. Therefore, in JavaScript class, we can use `constructor` function which will be first initiated when an instance is created through the object. 
    ```js
    class App extends React.Component {
        constructor (props) {
            super(props);

            this.state = { lat: null };
        }

        render() {
            windows.navigator.geolocation.getCurrentPosition(
                position => console.log(position),
                err => console.log(err),
            );

            return <div>Latitude: </div>
        }
    }
    ```
1. In addition, a side note that we must declare a render method in `App` class, which is extended from `React.Component`. React will return an error if the method is not defined. 
1. Besides, `constructor (props) {super(props);}` is like ceremonial process which must be done for react. 
1. By initializing the state, we can firstly assign a default value. In this case, we'd like to have the "**latitude**" of the user. As we haven't got the data, we can give the inital value as `null`. 

## Updating State Properties
1. We then can put the `this.state.lat` to the JSX to allow it to be rendered on the screen. 
1. Note that at this point, there's nothing will be rendered because the `state.lat` is set to be `null` by default. This is the only time we will use direct assignment to assign a value to the state.
1. We should always remember that we should use `.setState` method to update the state only.
    ```js
    class App extends React.Component {
        constructor (props) {
            super(props);

            this.state = { lat: null };

            windows.navigator.geolocation.getCurrentPosition(
                position => {
                    // we update state only through .setState method
                    this.setState({ lat = position.coords.latitude });
                },
                err => console.log(err),
            );
        }

        render() {
            return <div>Latitude: { this.state.lat }</div> // provide the value according to state
        }
    }
    ```

## App Lifecycle Walkthrough
1. We can only use `this.state` property on `this` object. The state system doesn't work if we use other property other than `state`. 
1. Note that every time when `state` is updated, react will almost instantly rerender the component. 
1. When the react app is opened by browser
    1. JS file loaded by browser.
    1. Instance of App component is created.
    1. App component `constructor` function gets called.
    1. State object is created and assigned to the `this.state` property.
    1. We call geolocation service.
    1. React calls the components render method.
    1. App returns JSX, gets rendered to page as HTML.
    1. We get result of geolocation from the async request.
    1. We update our state object that contains data with a call to `this.setState`.
    1. React sees that we updated the state of a component.
    1. React calls our `render` method a second time. 
    1. Render method returns some (updated) JSX.
    1. React takes that JSX and updates contents on the screen.
1. An important take away is that the components are actually rendred twice in this case. 
1. In this case, the `state` is firstly assigned with `null`, so that there's nothing shown after "**Latitude**".
1. After we receive data from the geolocation API, the `state` is updated, so react created the view with the updated view with the same components again.

## Handling Error Gracefully
1. Though we may have multiple properties in the `state` object, we don't need to update all the properties when receiving the data.
1. Besides, when we change returned JSX component from single line to multiple line, we would easily forget to take the semi-column at the last off, which can be hard to identify for the compiling error. 
    ```js
    class App extends React.Component {
        constructor(props) {
            super(props);

            // assign a 2nd property on state object
            this.state = { lat: null, errorMessage: '' };

            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({ lat: position.coords.latitude });
                    console.log(position);
                },
                (err) => {
                    this.setState({ errorMessage: err.message });
                    console.log(err);
                }
            );
        }

        // React says we have to define render
        render() {
            return (
                <div>
                    Latitude: {this.state.lat}
                    <br />
                    Error: {this.state.errorMessage}
                </div> // don't forget to take semi-column off at the last line when changing from single line to multiple line
            );
        }
    }
    ```

## Conditionally Rendering Content
1. In this app, we'd like to show different content on the screen in different conditions.
    1. If we have got the `latitude`, we can show `latitude`.
    1. If we have error message, we should show the error message.
    1. If we haven't had any change or update, we can show "loading...".
1. Though there's another way to render contents on the screen by conditions, we can simply use `if` statements to decide what to be shown according to the properties in the `state` object.
    ```js
    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = { lat: null, errorMessage: '' };

            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({ lat: position.coords.latitude });
                    console.log(position);
                },
                (err) => {
                    this.setState({ errorMessage: err.message });
                    console.log(err);
                }
            );
        }

        // React says we have to define render
        render() {
            if (this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>;
            }

            if (!this.state.errorMessage && this.state.lat) {
                return <div>Latitude: {this.state.lat}</div>;
            }

            return <div>Loading!</div>;
        }
    }
    ```



# Understanding Lifecycle Methods
## Introducing Lifecycle Methods
1. For the `App` class instance, we can give more methods other than `constructor` and `render`. We can have `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. 
1. Each of those methods will be called in the different stage of the lifecycle of a component. 
1. Besides, `render` will be called multiple times during the lifecycle to render the JSX w/n updated data and values.
1. Component Lifecycle
    1. `constructor`
    1. `render` (which makes content visible on the screen)
    1. `componentDidMount` (Sit and wait for updates)
    1. `componentDidUpdate` (Sit and wait until this component is not longer shown)
    1. `componentWillUnmount` 
    ```js
    class App extends React.Component {
        constructor(props) {
            // properties and states
        }

        componentDidMount() {
            console.log('My component was rendered to the screen');
        }

        componentDidUpdate() {
            console.log('My component was just updated - it rerendered!');
        }

        render() {
            // render view to the screen
        }
    }
    ```

## Why Lifecycle Methods?
1. `constructor`is a good place to do one-time setup.
1. `render` can avoid doing anything besides returning JSX.
1. `componentDidMount` is a good place to do data loading.
1. `componentDidUpdate` is good place to do more data loading when state/props change.
1. `componentWillUnmount` is good place to do cleanup (especially for non-React stuff).
1. Though we can make API calls for asnyc request in `constructor` directly, it's not recommended to do so.
1. By keeping the data request separated in constructor, we can make the code cleaner.
1. In addition, there are other lifecycle methods avaiable but not in frequent use, such as `shouldComponentUpdate`, `getDerivedStateFromProps`, and `getSnapshotBeforeUpdate`.

## Refactoring Data Loading to Lifecycle Methods
1. We put the geolocation API which request for user location in `componentDidMount` method
    ```js
    // index.js in App class
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }
    ```

## Alternate State Initialization
1. We can refactor the constructor function in the class. In this case, we can simply use `state = { lat: null, errorMessage: ''}` without using `constructor (props) { super(props) }`.
1. The reason that it works because `Babel` compile the JavaScript into another form which is compatible with ES5 and older browsers.
    ```js
    class App extends React.Component {
        // build state without constructor function
        state = { lat: null, errorMessage: '' };

        componentDidMount() {
            // data that is mounted
        }

        componentDidUpdate() {
            console.log('My component was just updated - it rerendered!');
        }

        // React says we have to define render
        render() {
            // render JSX on screen
        }
    }
    ```
    <img src="./images/buildWithoutConstructorInReact.png">

## Passing State as Props
1. If there's no error message and we have received the latitude from geolocation API, we can pass it to the component to be rendered on the screen.
    ```js
    render() {
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
    }
    ```
1. We can update in `SeasonDisplay` component to receive the data from state. 
    ```js
    // SeasonDisplay.js
    import React from 'react';

    const SeasonDisplay = (props) => {
        console.log(props.lat);
        return <div>Season Display</div>;
    };

    export default SeasonDisplay;
    ```

## Determing Season
1. As we have got the latitude to know which part in the world (or area) is the user at, we can return the aligned weather or season according to the location.
1. In this case, if the month is from March to October, the northern part will be in summer, while the southern part will be in winter and vice versa. 
    ```js
    const getSeason = (lat, month) => {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'summer' : 'winter';
        } else {
            return lat > 0 ? 'winter' : 'summer';
        }
    }

    const SeasonDisplay = (props) => {
        const season = getSeason(props.lat, new Date().getMonth());
        console.log(season);
        return <div>Season Display: {season}</div>;
    };
    ```

## Ternary Expresssion in JSX
1. We then can show different contents based on the returned value from `getSeason` function.
1. As the case is relatively simple, we can use ternary statement to return the desirable statement.
    ```js
    const SeasonDisplay = (props) => {
        const season = getSeason(props.lat, new Date().getMonth());
        const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';

        return (
            <div>
                <h1>{text}</h1>
            </div>
        );
    };
    ```

## Showing Icons
1. We can use the [icons](https://semantic-ui.com/elements/icon.html#/icon) from semantic UI. In this case, we can use `sun` and `snowflake`. The syntax for semantic UI is `<i class="icon_name icon"></i>`.
1. We then can import the icon according to the data from `season`.
    ```js
    const SeasonDisplay = (props) => {
        const season = getSeason(props.lat, new Date().getMonth());
        const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
        const icon = season === 'winter' ? 'snowflake' : 'sun';

        return (
            <div>
                <i className={`${icon} icon`} />
                <h1>{text}</h1>
                <i className={`${icon} icon`} />
            </div>
        );
    };
    ```

## Extracting Options to Config Objects
1. For the required data as configurations, we can create another object in the file to serve the purpose for cleaner code. 
1. We can also use ES6 distructure to create variables from object properties. 
    ```js
    // SeasonDisplay.js
    const seasonConfig = {
        summer: {
            text: `Let's hit the beach`,
            iconName: 'sun'
        },
        winter: {
            text: `Burr, it is chilly`,
            iconName: 'snowflake'
        }
    };

    const getSeason = (lat, month) => {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'summer' : 'winter';
        } else {
            return lat > 0 ? 'winter' : 'summer';
        }
    }

    const SeasonDisplay = (props) => {
        const season = getSeason(props.lat, new Date().getMonth());
        // ES6 destructuring assignment
        const { text, iconName } = seasonConfig[season];

        return (
            <div>
                <i className={`${iconName} icon`} />
                <h1>{text}</h1>
                <i className={`${iconName} icon`} />
            </div>
        );
    };
    ```

## Adding some styling
1. For styling with CSS, we can create `SeasonDisplay.css` in the same directory (src) with `SeasonDisplay.js`.
1. Note that we give each icon a class as `icon-left` and `icon-right`.
    ```js
    <div>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
    </div>
    ```
1. After creating the css file, we can import it into the JavaScript by using webpack. In react framework, we can simply import the css file.
    ```js
    // SeasonDisplay
    import './SeasonDisplay.css';
    ```
1. It is suggested to have the component name as the class name of the wrapper (container) of the HTML element, so we can ensure the following HTML elements can be easily grouped and selected with CSS as well.
    ```js
    const SeasonDisplay = (props) => {
        const season = getSeason(props.lat, new Date().getMonth());
        const { text, iconName } = seasonConfig[season];

        return (
            <div className={`season-display ${season}`}> // use component name
                <i className={`icon-left massive ${iconName} icon`} />
                <h1>{text}</h1>
                <i className={`icon-right massive ${iconName} icon`} />
            </div>
        );
    };
    ```
1. We use the following css to style our page.
    ```css
    /* SeasonDisplay.css */
    .icon-left {
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .icon-right {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }

    .season-display {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .season-display.winter i {
        color: blue;
    }

    .season-display.summer i {
        color: red;
    }

    .winter {
        background-color: aliceblue;
    }

    .summer {
        background-color: orange;
    }
    ```

## Showing a Loading Snipper
1. During the very first view when the page is rendered, as we haven't got the data of the location from the user because the browser is asking for user's permission, the page is blank in this case.
1. We can add a loader to improve user experience and understand the state of the program that it is waiting to receive and load the contents after getting the data or permission from the user. 
1. In this case, we can refer to the [loader](https://semantic-ui.com/elements/loader.html) element from semantic UI.
1. As we should avoid using raw JSX in `App` directly and tend to create reusable components, we can create another file for `Spinner`.
    ```js
    // Spinner.js
    import React from 'react';

    const Spinner = () => {
        return (
            <div className="ui active dimmer">
                <div className="ui big text loader">Loading...</div>
            </div>
        );
    };

    export default Spinner;
    ```
1. We then can import and use the component in `App`.
    ```js
    import Spinner from './Spinner';
    render() {
        return <Spinner />;
    }
    ```

## Specifying Default Props
1. Though we have installed a loader (spinner animation) to indicate that the page is loading, it will much clearer to users that what are the current requirements to them. 
1. Therefore, we can use `props` to send `prop.message` variable from `App`.
1. In the component file, we can use `||` logical operator to return a default message when there's nothing passed to the variable because we could forget to put variable in by chances. However, we can use another syntax for the case.
    ```js
    // Spinner.js
    Spinner.defaultProps = {
        message: 'Loading...'
    }
    ```

## Avoid Conditionals in Render
1. If we'd like to create a template-like styling feature to apply to all the JSX, we don't need to add raw JSX directly with classes to the components.
1. We can use "helper function" that can apply all the elements with styling to the components. In this case, we create another method `renderContent` in `App` instance.
1. We then can use single element to wrap the returned JSX and call the method by `this.renderContent()`.
    ```js
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        // return <Spinner />;
        return <Spinner message="Please accept location request" />;
    }

    // React says we have to define render
    render() {
        return (
            <div className="border red">
                {this.renderContent()} // call the rednerContent function for JSX
            </div>
        );
    };
    ```

## Breather and Review
1. Benefits of using `class` components
    1. Easier code organization.
    1. Can use `state` (another React system) which makes it easier to handle user input.
    1. Understands lifecycle events which makes it easier to do things when the app first starts.
1. In convention, we should put components at the bottom of the code and put configure object and helper function above.
1. Rules of `Class Components`
    1. Must be a JavaScript class.
    1. Must extend (subclass) from `React.Component`.
    1. Must define a `render` method that returns some amount of JSX.
1. Rules of `State`
    1. Only useable with class components.
    1. You will confuse `props` with `state`.
    1. `State` is a JS object that contains data relevant to a component.
    1. Updating `state` on a component causes the component to (almost) instantly rerender.
    1. `State` must be initializd when a component is created.
    1. `State` can be updated using the function `setState`.
1. We should never assign the value to properties on `state` object.
1. Component Lifecycle
    1. `constructor`
    1. `render`
    1. `componentDidMount`
    1. `componentDidUpdate`
    1. `componentWillUnmount`



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

