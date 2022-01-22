Started: 2022/01/11
- [1. React Refresher](#1-react-refresher)
  - [1.1. What is ReactJS, Demo, React Alternatives, Creating new React Project, and Setting up a code editor](#11-what-is-reactjs-demo-react-alternatives-creating-new-react-project-and-setting-up-a-code-editor)
  - [1.2. Diving into the created project](#12-diving-into-the-created-project)
  - [1.3. How React works and understanding components](#13-how-react-works-and-understanding-components)
  - [1.4. More component works and styling with CSS classes](#14-more-component-works-and-styling-with-css-classes)
  - [1.5. Building and re-using components](#15-building-and-re-using-components)
  - [1.6. Passing Data with Props and dynamic content](#16-passing-data-with-props-and-dynamic-content)
  - [1.7. Handling events](#17-handling-events)
  - [1.8. Adding more components](#18-adding-more-components)
  - [1.9. Introducing State](#19-introducing-state)
  - [1.10. Working with "Event Props"](#110-working-with-event-props)
  - [1.11. Adding Routing](#111-adding-routing)
  - [1.12. Adding links and navigation](#112-adding-links-and-navigation)
  - [1.13. Scoping component styles with CSS modules](#113-scoping-component-styles-with-css-modules)
  - [1.14. Outputting lists of data and components](#114-outputting-lists-of-data-and-components)
  - [1.15. Adding even more components](#115-adding-even-more-components)
  - [1.16. Creating "wrapper" components](#116-creating-wrapper-components)
  - [1.17. Working with forms](#117-working-with-forms)
  - [1.18. Getting user input and handling form submission](#118-getting-user-input-and-handling-form-submission)
  - [1.19. Preparing the App for Http requests and adding a backend](#119-preparing-the-app-for-http-requests-and-adding-a-backend)
  - [1.20. Sending a POST Http Request](#120-sending-a-post-http-request)
  - [1.21. Navigating programmatically](#121-navigating-programmatically)
  - [1.22. Getting started with fetching data](#122-getting-started-with-fetching-data)
  - [1.23. Using the "useEffect" hook](#123-using-the-useeffect-hook)
  - [1.24. Introducing React context](#124-introducing-react-context)
  - [1.25. Updating state based on previous state](#125-updating-state-based-on-previous-state)
  - [1.26. Using context in components](#126-using-context-in-components)
  - [1.27. More context usage](#127-more-context-usage)
- [Pages and File-based Routing](#pages-and-file-based-routing)

---

# 1. React Refresher
## 1.1. What is ReactJS, Demo, React Alternatives, Creating new React Project, and Setting up a code editor
1. React is a client-side Javascript library to build user interface.
2. Mobile and desktop apps are very "reactive". Things happen instantly that you don't need to wait for new pages to load or actions to start.
3. React.js is a lean and focused component-based UI library. Certain featuers (e.g. routing) are added via community packages.
4. `npx create-react-app [my-app]` to create a React with Node.js.
5. `Prettier` is the VS Code extension that is recommended to use in the course.

## 1.2. Diving into the created project
1. We can start a clean React project to remove all the code in `src/index.css`. Besides, we configure both `src/App.js` and `src/index.js`.
   ```js
   // index.js
   import React from 'react';
   import ReactDOM from 'react-dom';

   import './index.css';
   import App from './App';

   ReactDOM.render(<App />, document.getElementById('root'));

   // App.js
   function App() {
     return <div>Hello World!</div>;
   }

   export default App;
   ```

## 1.3. How React works and understanding components
1. A React component is using "JSX" syntax which is a combination of HTML and Javascript. 
2. A functional React component should render JSX elements by default on the screen.

## 1.4. More component works and styling with CSS classes
1. React components will be compiled to regular Javascript. 
2. Thus, though JSX is similar to HTML syntax, we need to use the property name in Javascript such as `className` when we select the DOM. 
    ```js
    function App() {
      return (
        <div>
          <h1>My Todos</h1>
          <div className="card">
            <h2>TITLE</h2>
            <div className="actions">
              <button className="btn">Delete</button>
            </div>
          </div>
        </div>
      );
    }

    export default App;
    ```

## 1.5. Building and re-using components
1. Besides replicating similar codes, we can create components.
2. In convention, we can create `components` folder in `src` to keep the components. Besides, the naming is with a capital letter at the start. This helps to separate the functions and components when importing the code.
3. To use a component, we can use it as a customized HTML tag or have it as self-closing tag.
4. We can import and use the same component more than once.
    ```js
    // src/components/Todo.js
    function Todo() {
      return (
        <div className="card">
          <h2>TITLE</h2>
          <div className="actions">
            <button className="btn">Delete</button>
          </div>
        </div>
      );
    }

    export default Todo;

    // src/App.js
    import Todo from './components/Todo';

    function App() {
      return (
        <div>
          <h1>My Todos</h1>
          <Todo />
        </div>
      );
    }

    export default App;
    ```

## 1.6. Passing Data with Props and dynamic content
1. Similar to using functions that we can pass parameters to work with functions, we can pass `props` to React components from the parent node.
2. In the previous example, we can pass `text` as props to `Todo` component to have customized content in the child (Todo) component.
3. In JSX, we can use curly braces to wrap Javascript code to run it as expression.
    ```js
    // src/components/Todo.js
    function Todo(props) {
      return (
        <div className="card">
          <h2>{props.text}</h2>
          <div className="actions">
            <button className="btn">Delete</button>
          </div>
        </div>
      );
    }

    export default Todo;
    ```

## 1.7. Handling events
1. When assigning an event handler, we don't want to execute the function when the code starts up. 
2. Therefore, we can simply put the function there as a pointer. When the user clicks on the button, the assigned function will handle the "click" event.
    ```js
    // src/components/Todo.js
    function Todo(props) {
      function deleteHandler() {
        console.log('Clicked');
        console.log(props.text);
      }

      return (
        <div className="card">
          <h2>{props.text}</h2>
          <div className="actions">
            <button className="btn" onClick={deleteHandler}>Delete</button>
          </div>
        </div>
      );
    }

    export default Todo;
    ```

## 1.8. Adding more components
1. In general, we'd like to keep every component and its JSX as simple as possible.
2. However, we now have another issue that the components are static without state.
3. For example, when `App` loads up, `Modal` is loaded and cover the page as well which isn't an ideal behavior for user experience.
```js
// src/components/Modal.js
function Modal() {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt">Cancel</button>
      <button className="btn">Confirm</button>
    </div>
  );
}

export default Modal;

// src/components/Backdrop.js
function Backdrop() {
  return (
    <div className="backdrop"/>
  );
}

export default Backdrop;

// src/App.js
import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the full React course" />
      <Modal />
      <Backdrop />
    </div>
  )
}

export default App;
```

## 1.9. Introducing State
1. In this case, the `Modal` should only shows up when the user click the "delete" button on a task in the Todo list.
2. Therefore, we can use `state` to control the behavior of components.
3. `useState` hook will always return an array of 2 variables.
   1. The state itself
   2. A function to set/change the state
4. Besides, we can pass a value (in any data type) as the initial value of the state.
5. We can use tenary expression to show `Modal` component only when `modalIsOpen` is `true`.
6. In addition, we can use AND `&&` operator to check and Javascript will return the 2nd value if both the values are "**truthy**".
    ```js
    // src/components/Todo.js
    import { useState } from 'rect';

    import Modal from './Modal';
    import Backdrop from './Backdrop';

    function Todo(props) {
      // react hook that can only be used in React functional components
      const [ modalIsOpen, setModalIsOpen ] = useState(false);

      function deleteHandler() {
        setModalIsOpen(true);
      }

      return (
        <div className="card">
          <h2>{props.text}</h2>
          <div className="actions">
            <button className="btn" onClick={deleteHandler}>Delete</button>
          </div>
          { modalIsOpen ? <Modal /> : null }
          { modalIsOpen && <Backdrop /> }
        </div>
      );
    }

    export default Todo;
    ```

## 1.10. Working with "Event Props"
1. To work with customize components, we can't put event handler to work on it direclty.
2. We need to access the component and handle events from its `props`.
3. Note that the event passing from the parent component can be customized.
4. For example, we can change the event to `onCancel` when in `Todo`, while in `Backdrop`, we can listen to `onCancel` event from `props` and pass to a regular HTML tag.
    ```js
    // src/components/Todo.js
    import { useState } from 'rect';

    import Modal from './Modal';
    import Backdrop from './Backdrop';

    function Todo(props) {
      // react hook that can only be used in React functional components
      const [ modalIsOpen, setModalIsOpen ] = useState(false);

      function deleteHandler() {
        setModalIsOpen(true);
      }

      function closeModalHandler() {
        setModalIsOpen(false);
      }

      return (
        <div className="card">
          <h2>{props.text}</h2>
          <div className="actions">
            <button className="btn" onClick={deleteHandler}>Delete</button>
          </div>
          { modalIsOpen ? <Modal /> : null }
          { modalIsOpen && <Backdrop onCancel={closeModalHandler} /> }
        </div>
      );
    }

    export default Todo;

    // src/components/Backdrop.js
    function Backdrop(props) {
      return <div onClick={props.onCancel} className="backdrop" />
    }

    export default Backdrop;

    // src/components/Modal.js
    function Modal(props) {
      function cancelHandler() {
        props.onCancel();
      }

      function confirmHandler() {
        props.onConfirm();
      }

      return (
        <div className="modal">
          <p>Are you sure?</p>
          <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
          <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
      );
    }
    ```

## 1.11. Adding Routing
1. We clone the code and work in `reactRefresher_routing` in the repo.
2. SPA routing is very different from regular routing or redirect process that the user never really goes to another HTML page but rather changing the elements on the same HTML file.
3. However, the URL in the search bar does change and when the user type in certain URL, the framework with the routing library is smart enough to render the components on the specific route.
4. In convention, we can have `pages` folder to keep the components on different routes which is similar to `components` to keep the reusable components.
5. In this case, we create 3 main page components, `AllMeetups`, `Favorites`, and `NewMeetups`.
6. For browser routing, we can import `{BrowserRouter}` from `react-router-dom`. Note that we use version 5 in this case. We then wrap the `App` component with `BrowserRouter`.
   ```js
   import React from 'react';
   import ReactDOM from 'react-dom';
   import { BrowserRouter } from 'react-router-dom';

   import './index.css';
   import App from './App';

   ReactDOM.render(
     <BrowserRouter>
       <App />
     </BrowserRouter>,
     document.getElementById('root'),
   );
   ```
7. To install a specific version, we can use `npm install react-router-dom@5`.
8. We then can configure the routes in `App` components.
    ```js
    import { Route } from 'react-router-dom';

    import AllMeetupsPage from './pages/AllMeetups';
    import NewMeetupPage from './pages/NewMeetup';
    import FavoritesPage from './pages/Favorites';

    function App() {
      return (
        <div>
          <Route path="/">
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </div>
      );
    }

    export default App;
    ```
9. However, the current setup will show both `AllMeetupsPage` with other components as sub-components. 
10. This is because React router, by default, matches all the routes including the root route `/`. 
11. This feature could be useful in some conditions to have the main component as the wrapper or layer and changing only some parts in the view.
12. To render only a single route and component, we can use `Switch` from `react-router-dom`. 
13. However, this still isn't enough for having the correct match as the route will be checked and if it matches any by the order, React router will render the first match.
14. For example, `/favorites` is part of `/`, and since `/` route is the first item in the list, `AllMeetupsPage` will be rendered. 
15. Therefore, we can either re-order the sequence of routes in the list or give an `exact` attribute to the root route, so `AllMeetupsPage` will only be rendered when the user is on `/`.
16. Note that `exact` can be a standalone attribute, while we can give boolean values as conditions to enable/disable the `exact` route.
    ```js
    // src/App.js
    import { Route, Switch } from 'react-router-dom';

    import AllMeetupsPage from './pages/AllMeetups';
    import NewMeetupPage from './pages/NewMeetup';
    import FavoritesPage from './pages/Favorites';

    function App() {
      return (
        <div>
          <Switch>
            <Route path="/" exact={true}>
              <AllMeetupsPage />
            </Route>
            <Route path="/new-meetup">
              <NewMeetupPage />
            </Route>
            <Route path="/favorites">
              <FavoritesPage />
            </Route>
          </Switch>
        </div>
      );
    }

    export default App;
    ```

## 1.12. Adding links and navigation
1. Though we can use `<a>` tag to navigate between different routes, its default behavior is sending request to the server and request documents and files such as HTML, JS, and CSS to render the page.
2. Since we are using React and creating a SPA, we'd like the user to stay on the same page but changing the browser URL.
3. We can use `Link` component from `react-router-dom` which is similar to `router-link` in Vue.js. This component does navigate the users to different routes without refreshing the page for new files and documents from the server.
    ```js
    // src/components/layout/MainNavigation.js
    import { Link } from 'react-router-dom';

    function MainNavigation() {
      return (
        <header>
          <div>React Meetups</div>
          <nav>
            <ul>
              <li>
                <Link to="/">All Meetups</Link>
              </li>
              <li>
                <Link to="/new-meetup">Add New Meetup</Link>
              </li>
              <li>
                <Link to="/favorites">My Favorites</Link>
              </li>
            </ul>
          </nav>
        </header>
      );
    }

    export default MainNavigation;
    ```

## 1.13. Scoping component styles with CSS modules
1. To scope and limit styling of a CSS file to certain React component, we can name the CSS file with a `module` in the middle as `[file_name].module.css`.
2. We then can import the CSS module to the React component that we want to style.
3. Note that this is a build-in React feature to import CSS module in Javascript with Webpack or the other bundling tools. This can't be used in regular Javascript code.
4. The imported CSS will be a Javascript object which includes all the classes in CSS as its properties.
    ```js
    // src/components/layout/MainNavigation.js
    import { Link } from 'react-router-dom';

    import classes from './MainNavigation.module.css';

    function MainNavigation() {
      return (
        <header className={classes.header}>
          <div>React Meetups</div>
          <nav>
            <ul>
              <li>
                <Link to="/">All Meetups</Link>
              </li>
              <li>
                <Link to="/new-meetup">Add New Meetup</Link>
              </li>
              <li>
                <Link to="/favorites">My Favorites</Link>
              </li>
            </ul>
          </nav>
        </header>
      );
    }

    export default MainNavigation;
    ```

## 1.14. Outputting lists of data and components
1. In React, an array of JSX values can be rendered directly on the screen.
2. Thus, to work with array of data, we can use the built-in Javascript `Array.map` method to work create a list of JSX.
3. The idea is very similar to its coutner part in Vue as `v-for` in the parent tag, while having all the child components nested in the wrapper with `v-for`. 
4. Besides, similar to Vue, each child in the list should have a unique `key` or the engine will make a warning in the deverlop console.
  ```js
  // src/components/AllMeetups.js
  const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

  function AllMeetupsPage() {
    return (
      <section>
        <h1>All Meetups</h1>
        <ul>
          {DUMMY_DATA.map((meetup) => {
            return <li key={meetup.id}>{meetup.title}</li>;
          })}
        </ul>
      </section>
    );
  }

  export default AllMeetupsPage;
  ```

## 1.15. Adding even more components
1. We can breakdown components to smaller chunks which can be easier to manage.
    ```js
    // src/pages/AllMeetups.js
    import MeetupList from '../components/meetups/MeetupList';

    const DUMMY_DATA = [
      {
        id: 'm1',
        title: 'This is a first meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
      {
        id: 'm2',
        title: 'This is a second meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
    ];

    function AllMeetupsPage() {
      return (
        <section>
          <h1>All Meetups</h1>
          <MeetupList meetups={DUMMY_DATA} />
        </section>
      );
    }

    export default AllMeetupsPage;
    ```
2. Receiving `meetups` from `AllMeetups` component and pass down to `MeetupItem`.
3. We can choose to pass each property one by one or pass the whole object and break it down in the child component. 
    ```js
    // src/components/meetups/MeetupList.js
    import MeetupItem from './MeetupItem';
    import classes from './MeetupList.module.css';

    function MeetupList(props) {
      return (
        <ul className={classes.list}>
          {props.meetups.map((meetup) => (
            <MeetupItem
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
              description={meetup.description}
            />
          ))}
        </ul>
      );
    }

    export default MeetupList;

    // src/components/meetups/MeetupItem.js
    import classes from './MeetupItem.module.css';

    function MeetupItem(props) {
      return (
        <li className={classes.item}>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button>To Favorites</button>
          </div>
        </li>
      );
    }

    export default MeetupItem;
    ```

## 1.16. Creating "wrapper" components
1. Though we can modify css of all components to create card-like view.
2. In this case, we can create a "wrapper" component `Card` to wrap the tags which we want to style as the content in a card.
    ```js
    import classes from './Card.module.css';

    function Card() {
      return <div className={classes.card}></div>;
    }

    export default Card;
    ```
3. However, the wrapper component doesn't take any content yet, so any elements in the wrapper will "disappear" on the screen.
4. To solve this issue, we can use `children` property in `props` to render the contents in the wrapper. This is much similar to `slot` tag in Vue template which takes the content wrapped in the component.
5. After setting up reusable components, we can handle the whole layout and add up more white space to align the view.
6. We create `Layout.js` component in `src/components/layout` which wraps `MainNavigation`.
    ```js
    // src/components/layout/Layout.js
    import MainNavigation from './MainNavigation';
    import classes from './Layout.module.css';

    function Layout() {
      return (
        <div>
          <MainNavigation />
          <main></main>
        </div>
      );
    }

    export default Layout;
    ```
7. We then can update the layout in `App` component.
    ```js
    // src/App.js
    import { Route, Switch } from 'react-router-dom';

    import AllMeetupsPage from './pages/AllMeetups';
    import NewMeetupPage from './pages/NewMeetup';
    import FavoritesPage from './pages/Favorites';
    import Layout from './components/layout/Layout';

    function App() {
      return (
        <Layout>
          <Switch>
            <Route path="/" exact>
              <AllMeetupsPage />
            </Route>
            <Route path="/new-meetup">
              <NewMeetupPage />
            </Route>
            <Route path="/favorites">
              <FavoritesPage />
            </Route>
          </Switch>
        </Layout>
      );
    }

    export default App;
    ```

## 1.17. Working with forms
1. We can use form to collect data from users and store on backend server with a database.
    ```js
    // src/components/meetup/NewMeetupForm.js
    import Card from '../ui/Card';
    import classes from './NewMeetupForm.module.css';

    function NewMeetupForm() {
      return (
        <Card>
          <form className={classes.form}>
            <div className={classes.control}>
              <label htmlFor="title">Meetup Title</label>
              <input type="text" required id="title" />
            </div>
            <div className={classes.control}>
              <label htmlFor="image">Meetup Image</label>
              <input type="url" required id="image" />
            </div>
            <div className={classes.control}>
              <label htmlFor="address">Address</label>
              <input type="text" required id="address" />
            </div>
            <div className={classes.control}>
              <label htmlFor="description">Description</label>
              <textarea required id="description" rows="5"></textarea>
            </div>
            <div className={classes.actions}>
              <button type="submit">Add Meetup</button>
            </div>
          </form>
        </Card>
      );
    }

    export default NewMeetupForm;
    ```

## 1.18. Getting user input and handling form submission
1. By default, when a user submits a form, the page will send a request to the backend and be refreshed.
2. To collect data input from users, we can handle `change` event whenever the input value is changed by the user in the `input` tag.
3. However, we'd like to know only the final input values from the user.
4. We can use `useRef` to create a reference on a html element. This concept is pretty much similar in Vue to use `ref` attribute on a HTML tag.
5. We then can access the DOM and its value with the `ref` API. 
6. Though we can both access to "read" and "edit" the value of the ref object, it's suggested to read on the value only with `useRef` API and use `useState` to modify the values.
    ```js
    import { useRef } from 'react';

    const titleInputRef = useRef();

    function submitHandler(event) {
      event.preventDefault();
      // useRef is suggested to use for read-only purpose
      // to modify the value, use useState
      const enteredTitle = titleInputRef.current.value;
    }

    return (
      <form onSubmit={submitHandler}>
      <input name="title" id="title" ref="titleInputRef" />
      </form>
    )
    ```
7. There are several ways to extract data from elements in a `form` tag. Besides the following solution, we can access from 
   1. `event.target.elements` to get all the element in the form.
   2. `document.forms` to get a list of forms or `document.forms[index]` to access a specific form.

```js
// src/components/meetups/NewMeetupForm.js
import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            name="title"
            required
            id="title"
            ref={titleInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            name="image"
            required
            id="image"
            ref={imageInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            required
            id="address"
            ref={addressInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            name="description"
            id="description"
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
```

## 1.19. Preparing the App for Http requests and adding a backend
1. We can create a realtime database on [Firbase](https://firebase.google.com/) (Google Service).
2. To keep the code clean, we can pass a function to handle HTTP request from `NewMeetup` rather than sending the request from `NewMeetupForm` itself.
3. We can use custom event and pass a function from the parent to its child component, which is `NewMeetup` -> `NewMeetupForm` in this case.
    ```js
    // src/pages/NewMeetup.js
    import NewMeetupForm from '../components/meetups/NewMeetupForm';

    function NewMeetupPage() {
      function addMeetupHandler(meetupData) {}

      return (
        <section>
          <h1>Add New Meetup</h1>
          <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
      );
    }

    export default NewMeetupPage;
    ```

## 1.20. Sending a POST Http Request
1. After creating a realtime database in Firebase, we can send requests to the endpoint.
2. Accoridng to [Firebase documentation](https://firebase.google.com/docs/reference/rest/database), we can add a desired name of collection to store data. If the collection doesn't exist, Firebase will create a new collection automatically.

## 1.21. Navigating programmatically
1. We have setup the navigation between the tabs using React router.
2. In the other use case, we'd like to navigate to the other links programmatically. 
3. For example, after the user submits a form, we'd like to redirect the user to success page. 
4. We can use `useHistory` method from `react-router-dom`. Note that there are several methods we can use on the object.
5. A regular use is with `push` to move the user forward to a given page. However, since we are submitting a form and wouldn't want the use to "get back" to the submit page, we can use `replace` instead.
    ```js
    // src/pages/NewMeetups.js
    import { useHistory } from 'react-router-dom';

    const history = useHistory();

    function addMeetupHandler(meetupData) {
      fetch(
        `https://react-getting-started-66326-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(meetupData),
        },
      ).then(() => {
        history.replace('/');
      });
    }
    ```

## 1.22. Getting started with fetching data
1. After enabling creating new places, we can fetch all the created data to replace the dummay data in `AllMeetups` component.
2. We can use `fetch` API to call the firebase endpoint directly without any setting. 
3. Besides, we can't turn the React component into async/await function as it will return a `Promise`. The react component must be in sync code. 
4. One of the solutions is to show a placeholder such as a loading spinner and use `state` with `useState` from `react` to manage the data and rerender the component once the data is received/updated. 
5. In this case, we can create 2 states `isLoading` and `loadedMeetups` to handle the states and data.
6. In addition, we cannot `fetch` in the component directly as it will cause an infinite loop.
7. Once the state is updated the component will re-render and the `fetch` API will be called again which triggers another re-render.
8. Therefore, we need to use lifecycle hook and run the `fetch` only once when the component is firsly rendered.
9. Note that data coming from firebase is an `Object` rather than an array to carry all the data.
    ```js
    // src/pages/AllMeetups.js
    // DO NOT run this
    // calling 'fetch' directly with state will cause an infinite loop
    import { useState } from 'react';

    import MeetupList from '../components/meetups/MeetupList';

    function AllMeetupsPage() {
      const [isLoading, setIsLoading] = useState(true);
      const [loadedMeetups, setLoadedMeetups] = useState([]);

      // DO NOT call fetch API directly
      fetch(
        `https://react-getting-started-66326-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json`,
      )
        .then((res) => res.json())
        .then((data) => {
          // this cause an infinite loop
          setIsLoading(false);
          // firebase returns an object rather than array of data
          setLoadedMeetups(Object.values(data));
        });

      if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }

      return (
        <section>
          <h1>All Meetups</h1>
          <MeetupList meetups={loadedMeetups} />
        </section>
      );
    }

    export default AllMeetupsPage;
    ```

## 1.23. Using the "useEffect" hook
1. We can use `useEffect` lifecycle hook from `react` package to work with `fetch` API.
2. `useEffect` takes a callback function to work with and a 2nd argument which is optional and takes an array of state that we want to track with.
3. If we give an empty array, the lifecycle hooks will run only once when the component is firstly rendered. 
    ```js
    // src/pages/AllMeetups.js
    import { useState, useEffect } from 'react';

    import MeetupList from '../components/meetups/MeetupList';

    function AllMeetupsPage() {
      const [isLoading, setIsLoading] = useState(true);
      const [loadedMeetups, setLoadedMeetups] = useState([]);

      useEffect(() => {
        setIsLoading(true);

        fetch(
          `https://react-getting-started-66326-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json`,
        )
          .then((res) => res.json())
          .then((data) => {
            const meetups = [];

            for (const key in data) {
              const meetup = {
                id: key,
                ...data[key],
              }

              meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(meetups);
          });
      }, []);

      if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }

      return (
        <section>
          <h1>All Meetups</h1>
          <MeetupList meetups={loadedMeetups} />
        </section>
      );
    }

    export default AllMeetupsPage;
    ```

## 1.24. Introducing React context
1. We'd like to add a meetup into the favorite list once we click the "Favorite" button on the card.
2. One solution to manage the state is to pass state as props from the parent component, such as `App` in this case. 
3. Therefore, we can pass the states from one to another and manage them all in the same component.
4. However, this approach has a obvious downside that when the app becomes bigger, there are much more states to manage and can make `App` component very complicated to manage.
5. For such scenario, we can use `Redux` (3rd party library) to manage global states, while we can use native React `context` hooks for global state management as well. 
6. In this case, we create `favorites-context.js` in a new folder `store` in `src`.
7. We firstly import `createContext` and give the initial value by calling the method.
8. We then create a React component as a wrapper and pass `value` as props to the component. This is similar to `getters` function in `vuex` that provide data from the store.
9. Besides, we can use `useState` for local state management to work with the component. 
    ```js
    // src/store/favorites-context.js
    import { createContext, useState } from 'react';

    const FavoriteContext = createContext({
      favorites: [],
      totalFavorites: 0,
    });

    function FavoriteContextProvider(props) {
      const [userFavorites, setUserFavorites] = useState([]);

      const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
      };

      return (
        <FavoriteContext.Provider value={context}>
          {props.children}
        </FavoriteContext.Provider>
      );
    }
    ```

## 1.25. Updating state based on previous state
1. When updating states with methods from `useState`, we can pass a callback function to ensure the state has the latest data.
2. When a state can be changed by multiple functions, the execution order in the context can be confusing and thus causing bugs for data updates.
3. Note that none of the functions are used and wired up with the provider component.
    ```js
    // src/store/favorites-context.js
    import { createContext, useState } from 'react';

    const FavoriteContext = createContext({
      favorites: [],
      totalFavorites: 0,
    });

    function FavoriteContextProvider(props) {
      const [userFavorites, setUserFavorites] = useState([]);

      function addFavoriteHandler(favoriteMeetup) {
        // use callback function to ensure userFavorites has the latest data
        setUserFavorites((prevUserFavorites) => {
          return prevUserFavorites.concat(favoriteMeetup);
        });

        // not good practice as userFavorites is a snapshot
        // and may not have the latest data
        setUserFavorites(userFavorites.concat(favoriteMeetup));
      }

      function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
          return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
        });
      }

      function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId);
      }

      const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
      };

      return (
        <FavoriteContext.Provider value={context}>
          {props.children}
        </FavoriteContext.Provider>
      );
    }
    ```

## 1.26. Using context in components
1. We then wire up and export the "provider component" with the `context`.
    ```js
    // src/store/favorites-context.js
    import { createContext, useState } from 'react';

    const FavoriteContext = createContext({
      favorites: [],
      totalFavorites: 0,
      addFavorite: (favoriteMeetup) => {},
      removeFavorite: (meetupId) => {},
      itemIsFavorite: (meetupId) => {},
    });

    export function FavoriteContextProvider(props) {
      const [userFavorites, setUserFavorites] = useState([]);

      function addFavoriteHandler(favoriteMeetup) {
        // use callback function to ensure userFavorites has the latest data
        setUserFavorites((prevUserFavorites) => {
          return prevUserFavorites.concat(favoriteMeetup);
        });

        // not good practice as userFavorites is a snapshot
        // and may not have the latest data
        setUserFavorites(userFavorites.concat(favoriteMeetup));
      }

      function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
          return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
        });
      }

      function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId);
      }

      const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
      };

      return (
        <FavoriteContext.Provider value={context}>
          {props.children}
        </FavoriteContext.Provider>
      );
    }

    export default FavoriteContext;
    ```
2. In `src/index.js` we use `FavoriteContextProvider` to wrap both `BrowserRouter` and `App` component.
    ```js
    // src/index.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter } from 'react-router-dom';

    import './index.css';
    import App from './App';
    import { FavoriteContextProvider } from './store/favorites-context';

    ReactDOM.render(
      <FavoriteContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoriteContextProvider>,
      document.getElementById('root'),
    );
    ```
3. In `MeetupItem` component, we import `useContext` from `react` and start with the initial states from `FavoriteContext`.
4. Note that we export `FavoriteContext` by default from `src/store/favorites-context.js`.
5. We can use `itemIsFavorite` method from the context and check if the item has been set as "favorite".
6. We decalre the other helper function `toggleFavoriteStatusHandler` to handle the button click event to either add or remove the "meetup" from the favorite list.
7. Note that we haven't updated `/favorites` route with the context and data, so nothing is shown there though we toggle the favorite context.
    ```js
    // src/components/meetups/MeetupItem.js
    import { useContext } from 'react';
    import FavoriteContext from '../../store/favorites-context';

    import Card from '../ui/Card';
    import classes from './MeetupItem.module.css';

    function MeetupItem(props) {
      const favoriteCtx = useContext(FavoriteContext);

      const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

      function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
          favoriteCtx.removeFavorite(props.id);
        } else {
          favoriteCtx.addFavorite({
            id: props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            address: props.address,
          });
        }
      }

      return (
        <li className={classes.item}>
          <Card>
            <div className={classes.image}>
              <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
              <h3>{props.title}</h3>
              <address>{props.address}</address>
              <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
              <button onClick={toggleFavoriteStatusHandler}>
                {itemIsFavorite ? 'Remove from favorites' : 'To Favorites'}
              </button>
            </div>
          </Card>
        </li>
      );
    }

    export default MeetupItem;
    ```

## 1.27. More context usage
1. We then wire up and use `useContext` in `Favorites.js` component.
2. Note that the state and context is only store in memory which will reset to initial conditions every time the user refresh the browser.
    ```js
    // src/pages/Favorites.js
    import { useContext } from 'react';

    import FavoritesContext from '../store/favorites-context';
    import MeetupList from '../components/meetups/MeetupList';

    function FavoritesPage() {
      const favoriteCtx = useContext(FavoritesContext);

      let content;

      if (!favoriteCtx.totalFavorites) {
        content = <p>You got no favorites yet. Start adding some?</p>;
      } else {
        content = <MeetupList meetups={favoriteCtx.favorites}></MeetupList>;
      }

      return (
        <section>
          <h1>My Favorites</h1>
          {content}
        </section>
      );
    }

    export default FavoritesPage;
    ```
3. We then add an indicator in `MainNavigation`, the top navigation bar, to show how many favorite meetups are in the list.
    ```js
    // src/components/layout/MainNavigation.js
    import { useContext } from 'react';
    import { Link } from 'react-router-dom';

    import classes from './MainNavigation.module.css';
    import FavoritesContext from '../../store/favorites-context';

    function MainNavigation() {
      const favoriteCtx = useContext(FavoritesContext);

      return (
        <header className={classes.header}>
          <div className={classes.logo}>React Meetups</div>
          <nav>
            <ul>
              <li>
                <Link to="/">All Meetups</Link>
              </li>
              <li>
                <Link to="/new-meetup">Add New Meetup</Link>
              </li>
              <li>
                <Link to="/favorites">
                  My Favorites{' '}
                  <span className={classes.badge}>
                    {favoriteCtx.totalFavorites}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      );
    }

    export default MainNavigation;
    ```

# Pages and File-based Routing