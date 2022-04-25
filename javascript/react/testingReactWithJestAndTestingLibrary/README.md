Start learning: 2022/03/29

- [1. Introduction](#1-introduction)
  - [1.1. Testing Library and Jest](#11-testing-library-and-jest)
  - [1.2. create-react-app](#12-create-react-app)
  - [1.3. First Test with Testing Library](#13-first-test-with-testing-library)
  - [1.4. Jest and Jest-DOM Assertions](#14-jest-and-jest-dom-assertions)
  - [1.5. Jest: Watch Mode and How Test Work](#15-jest-watch-mode-and-how-test-work)
  - [1.6. TDD (Test-Driven Development)](#16-tdd-test-driven-development)
  - [1.7. React Testing Library philosophy](#17-react-testing-library-philosophy)
  - [1.8. Function testing vs Unit testing](#18-function-testing-vs-unit-testing)
  - [1.9. TDD vs BDD (Behavior Driven Development)](#19-tdd-vs-bdd-behavior-driven-development)
  - [1.10. Testing Library and Accessibility](#110-testing-library-and-accessibility)
- [2. Simple App: Color Button](#2-simple-app-color-button)
  - [2.1. Overall course plan](#21-overall-course-plan)
  - [2.2. Start Color Button App](#22-start-color-button-app)
  - [2.3. Test that finds Button by Role and Clicks Button](#23-test-that-finds-button-by-role-and-clicks-button)
  - [2.4. React Code: Click Button to Change Color](#24-react-code-click-button-to-change-color)
  - [2.5. Manual Acceptance Testing](#25-manual-acceptance-testing)
  - [2.6. Testing Initial Condition of Button and Checkbox](#26-testing-initial-condition-of-button-and-checkbox)
  - [2.7. Code Quiz! Confirm Button Disable on Checkbox Check](#27-code-quiz-confirm-button-disable-on-checkbox-check)
  - [2.8. Finding Checkbox with Label](#28-finding-checkbox-with-label)
  - [2.9. Code Quiz! Disabled Button Turns Grey](#29-code-quiz-disabled-button-turns-grey)
  - [2.10. Unit Testing Functions](#210-unit-testing-functions)
  - [2.11. Code Quiz! Colors with Spaces](#211-code-quiz-colors-with-spaces)
  - [2.12. When to unit test](#212-when-to-unit-test)
- [3. ESLint with Testing Library, plus Prettier](#3-eslint-with-testing-library-plus-prettier)
  - [3.1. ESLint and Prettier](#31-eslint-and-prettier)
    - [3.1.1. ESLint](#311-eslint)
    - [3.1.2. Linting vs Formatting](#312-linting-vs-formatting)
  - [3.2. ESLint Plugins](#32-eslint-plugins)
  - [3.3. ESLinting for Testing Library and Jest-DOM](#33-eslinting-for-testing-library-and-jest-dom)
- [4. Sundaes On Demand: Form Review and Popover](#4-sundaes-on-demand-form-review-and-popover)
  - [4.1. Introduction to Sundaes on Demand](#41-introduction-to-sundaes-on-demand)
  - [4.2. ESlint and Prettier setup](#42-eslint-and-prettier-setup)
  - [4.3. React Bootstrap setup](#43-react-bootstrap-setup)
  - [4.4. Code organization and introduction to SummaryForm](#44-code-organization-and-introduction-to-summaryform)
  - [4.5. Code Quiz: Checkbox Enables Button](#45-code-quiz-checkbox-enables-button)

# 1. Introduction
## 1.1. Testing Library and Jest
1. React Testing Library provides virtual DOM for tests
2. Jest is a test runner that
   1. Finds test
   2. Runs tests
   3. Determines whether tests pass or fail

## 1.2. create-react-app
1. `npm` package creates react applications with
   1. Configuration
   2. Webpack and Babel
   3. Web server
   4. Testing Library

## 1.3. First Test with Testing Library
1. A testing file is created by `npx create-react-app` by default
    ```tsx
    import React from 'react';
    import { render, screen } from '@testing-library/react';
    import App from './App';

    test('renders learn react link', () => {
      render(<App />);
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });
    ```
2. We get `render` and `screen` from `@testing-library/react`
3. With `screen.getByText`, we can find element by display text.
4. `/learn react/i` is a regular expression with a case "**insensitive**" flag `i` so that the string could also be `Learn React`.
5. `expect().toBeInTheDocument()` is an assertion, causes test to succeed or fail.

## 1.4. Jest and Jest-DOM Assertions
1. From the last section, the testing use an assertion `expect(linkElement).toBeInTheDocument()`.
2. `expect` is Jest global that starts the assertion and takes an argument as the subject of the assertion.
3. It then works on a method such as `.toBeInTheDocument` which is a matcher, coming from `Jest-DOM` , to indicate the type of assertion.
4. The matcher may take an argument which refines the matcher.
5. More assertion examples
   1. `expect(element.textContent).toBe('hello')`
   2. `expect(elementsArray).toHaveLength(7)`
6. `jest-dom`
   1. comes with `create-react-app`
   2. `sec/setupTests.js` imports it before each test, makes matchers available
   3. DOM-based matchers `toBeVisible()` or `toBeChecked()`

## 1.5. Jest: Watch Mode and How Test Work
1. React Testing Library helps with 
   1. rendering components into virtual DOM
   2. searching virtual DOM
   3. Interacting with virtual DOM
2. Needs a test runner
   1. Find tests, run them, make assertions
3. Jest 
   1. is recommended by Testing Library
   2. comes with `create-react-app`
4. `npm test` runs a npm script that runs `Jest` in watch mode
5. Jest watch mode
   1. watches for changes in files since last commit
   2. Only runs tests related to these files
   3. No changes? No tests 
      1. Type `a` to run all tests
6. How does Jest work?
   1. global `test` method has 2 arguments
      1. string description
      2. test function
   2. Test fails if error is thrown when running function
      1. assertions throw errors when expectation fails
   3. No error -> tests pass
      1. Empty test passes

## 1.6. TDD (Test-Driven Development)
1. Write tests before writing code
   1. then write code according to "spec" set by tests
2. "red-green" testing
   1. Tests fail before code is written
3. Why TDD?
   1. Makes a huge difference in how it feels to write tests
      1. part of the coding process, not a "chore" to do at the end
   2. More efficient
      1. Re-run tests "for free" after changes

## 1.7. React Testing Library philosophy
1. Creates virtual DOM for testing
   1. and utilities for interacting with DOM
2. Allows testing without a browser
3. Types of Tests
   1. Unit tests - Tests one unit of code in isoloation
   2. Integration tests - How multiple units work together
   3. Functional tests - Tests a particular function of software
4. Acceptance/End-to-end (E2E) Tests
   1. Use actual browser and server (Cypress, Selenium)

## 1.8. Function testing vs Unit testing
1. Unit Testing
   1. Isolated: mock dependencies, test internals
   2. Pros
      1. Very easy to pinpoint failures
   3. Cons
      1. Further from how users interact with software
      2. More likely to break with refactoring
2. Functional Testing
   1. Include all relevant units, test behavior
   2. Pros
      1. Close to how users interact with software
      2. Robust tests
   3. Cons
      1. More difficult to debug failing tests

## 1.9. TDD vs BDD (Behavior Driven Development)
1. Testing library encourages testing behavior over implementation
2. BDD is very explicitly defined
   1. involves collaboration between lots of roles - such as developers, QA, business partners, etc.
   2. defines process for different groups to interact

## 1.10. Testing Library and Accessibility
1. Testing Library recommends finding elements by accessibility handles [link](https://testing-library.com/docs/queries/about/#priority)
2. `create-react-app` exmaple test uses `getByText`
   1. ok for non-interactive elements
   2. better: `getByRole`
      ```js
      import React from 'react';
      import { render, screen } from '@testing-library/react';
      import App from './App';

      test('renders learn react link', () => {
        render(<App />);
        const linkElement = screen.getByRole('link', { name: /learn react/i });
        expect(linkElement).toBeInTheDocument();
      });
      ```
3. Roles documentation: [https://www.w3.org/TR/wai-aria/#role_definitions](https://www.w3.org/TR/wai-aria/#role_definitions)
   1. some elements have built-in roles: `button`, `a`
4. Can't find an element like a screen reader would?
   1. Then the app isn't friendly to screen readers

# 2. Simple App: Color Button
## 2.1. Overall course plan 
1. Start with very simple React
   1. focus on Testing Library syntax
2. First app: not much of an app
   1. changing button color, disabling button with checkbox
   2. introduce: testing interactions that affect DOM, unit testing functions
3. Build up to more complex functionality and tests
4. Second app: design and order an ice-cream sundae
   1. testing more complex user interactions, interactions between components.
   2. mocking server responses with Mock Service Worker
   3. testing async functionality

## 2.2. Start Color Button App
1. We can check the custom matchers on [`jest-dom`](https://www.npmjs.com/package/@testing-library/jest-dom)
    ```ts
    // App.test.tsx
    import { render, screen } from '@testing-library/react';
    import App from './App';

    test('button has correct initial color', () => {
      render(<App />);

      // find an element with a role of button and text of 'Change to blue'
      const colorButton = screen.getByRole('button', { name: 'Change to blue' });

      // expect the background color to be red
      expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
    });

    test('button turns blue when clicked', () => {});
    ```
    ```tsx
    // App.tsx
    import './App.css';

    function App() {
      return (
        <div>
          <button style={{ backgroundColor: 'red' }}>Change to blue</button>
        </div>
      );
    }

    export default App;
    ```

## 2.3. Test that finds Button by Role and Clicks Button
## 2.4. React Code: Click Button to Change Color
1. The Testing Library will suggest a "role" if we give an invalid one.
```tsx
//APp.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});
```
```tsx
// App.tsx
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

enum ButtonColor {
  red = 'red',
  blue = 'blue',
}

function App() {
  const [buttonColor, setButtonColor] = useState<ButtonColor>(
    'red' as ButtonColor
  );
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor as ButtonColor)}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
```

## 2.5. Manual Acceptance Testing
1. Run the project with `npm start` and check the component manually.

## 2.6. Testing Initial Condition of Button and Checkbox
```tsx
// App.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditinos', () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});
```
```tsx
// App.tsx
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

enum ButtonColor {
  red = 'red',
  blue = 'blue',
}

function App() {
  const [buttonColor, setButtonColor] = useState<ButtonColor>(
    'red' as ButtonColor
  );
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor as ButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input type='checkbox' />
    </div>
  );
}

export default App;
```

## 2.7. Code Quiz! Confirm Button Disable on Checkbox Check
1. When checkbox is checked, button should be disabled
2. Assertions on button
   1. `expect(button).toBeEnabled()`
   2. `expect(button).toBeDisabled()`
```tsx
// App.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditinos', () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Confirm Button Disable on Checkbox Check', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
```
```tsx
// App.tsx
import { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

enum ButtonColor {
  red = 'red',
  blue = 'blue',
}

function App() {
  const [buttonColor, setButtonColor] = useState<ButtonColor>(
    'red' as ButtonColor
  );
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor as ButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type='checkbox'
        id='enable-button-checkbox'
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setDisabled(event.target.checked)
        }
        aria-checked={disabled}
        defaultChecked={disabled}
      />
    </div>
  );
}

export default App;
```

## 2.8. Finding Checkbox with Label
1. We can find a `checkbox` role by `name` when it works with a `label`.
```tsx
// App.tsx
import { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

enum ButtonColor {
  red = 'red',
  blue = 'blue',
}

function App() {
  const [buttonColor, setButtonColor] = useState<ButtonColor>(
    'red' as ButtonColor
  );
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor as ButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <label htmlFor='enable-button-checkbox'>
        Disable button
        <input
          type='checkbox'
          id='enable-button-checkbox'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setDisabled(event.target.checked)
          }
          aria-checked={disabled}
          defaultChecked={disabled}
        />
      </label>
    </div>
  );
}

export default App;
```
```tsx
// App.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditinos', () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Confirm Button Disable on Checkbox Check', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
```

## 2.9. Code Quiz! Disabled Button Turns Grey
```tsx
// App.tsx
import { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

enum ButtonColor {
  red = 'red',
  blue = 'blue',
}

function App() {
  const [buttonColor, setButtonColor] = useState<ButtonColor>(
    'red' as ButtonColor
  );

  const [disabled, setDisabled] = useState<boolean>(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'grey' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor as ButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <label htmlFor='enable-button-checkbox'>
        Disable button
        <input
          type='checkbox'
          id='enable-button-checkbox'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setDisabled(event.target.checked)
          }
          aria-checked={disabled}
          defaultChecked={disabled}
        />
      </label>
    </div>
  );
}

export default App;
```
```tsx
// App.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Change button to grey color when disabled', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  // disable button
  expect(colorButton).toBeDisabled();
  // button is grey
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(checkbox);
  // enable button
  expect(colorButton).toBeEnabled();
  // button is red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  // disable button
  expect(colorButton).toBeDisabled();
  // button is grey
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});
```

## 2.10. Unit Testing Functions
1. Functions separate from components
   1. Used by several components
   2. Complex logic
2. Unit test if 
   1. Complex logic difficult to test via function tests
   2. Too many edge cases
```tsx
// App.tsx
export const replaceCamelWithSpaces = (colorName: string) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};
```
```tsx
// App.test.tsx
describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letter', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightVioletRed')).toBe(
      'Midnight Violet Red'
    );
  });
});
```

## 2.11. Code Quiz! Colors with Spaces
1. Color starts with `MediumViletRed` and changes to `MidnightBlue`
2. Need to update existing tests. Expected behavior change
3. Tests for checkbox disabling should still pass. "Free" regression testing
4. The case is simply changes the colors to `MidnightBlue` and `MediumVioletRed`.

## 2.12. When to unit test
1. When to unit test?
   1. `replaceCamelWithSpaces` is pretty simple
   2. could be covered by functional tests on button
2. For more complicated functions, unit tests help with:
   1. covering all possible edge cases
   2. detereming what caused functional test to fail
3. Issue with functional tests:
   1. high-level makes them resistant to refactos
   2. high-level makes them difficult to diagnose

# 3. ESLint with Testing Library, plus Prettier
## 3.1. ESLint and Prettier
### 3.1.1. ESLint
1. Popular linter for Javascript
2. Linting keeps code style consistent, especially for multi-eng projects
3. Catches errors in code
   1. using variable before defining
   2. importing from nonexisting file
4. Linter: analyzes static text and marks syntax that breaks rules
5. Static: analyze code as written, not what happens when code is run
### 3.1.2. Linting vs Formatting
1. Formatters (like prettier) automatically format code (indents, spacing). E.g.
   1. `import {useEffect} from 'react';`
   2. `import { useEffect } from 'react';`
2. Linter address format and style. E.g. preferred assertion method
   1. `expect(checkbox).toHaveAttribute(checked);`
   2. `expect(checkbox).toBeChecked();`
## 3.2. ESLint Plugins
1. Plug-ins extend ESLint
2. Testing Library and jest-dom ESLint plugins

## 3.3. ESLinting for Testing Library and Jest-DOM
1. `eslint` and `prettier` extensions are required to be installed in VSCode.
```json
// .eslintrc.json
{
  "plugins": ["testing-library", "jest-dom"],
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ]
}
```
```json
// .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

# 4. Sundaes On Demand: Form Review and Popover
## 4.1. Introduction to Sundaes on Demand
1. App summary
   1. Choose ice cream flavors and toppings and submit order
   2. Flavors and toppings come from server
   3. Order is sent to server
2. Backdrop to test
   1. More complex user interactions
      1. Multiple form entry, moving through order phases
   2. Mouseover popup
      1. Test that element disappears from DOM
   3. Simulating server response 
      1. Mock service worker
   4. `async` app updates
      1. awaiting DOM changes
   5. Global state via context
3. In this case
   1. We will not be testing context implementation
   2. We are only interested in testing behavior as seen by user
   3. Tests no different if we used Redux, Mobx, etc.
   4. Only difference is the test setup
      1. Make sure component is wrapped in context
      2. Ensure functionality
      3. Avoid errors
4. Server
   1. For order, simply generates random order number
   2. Server not needed for functional rect app testing
      1. Use mock-service-worker to mock responses from server
      2. Server for spec, manual acceptance testing

## 4.2. ESlint and Prettier setup
1. Install packages by `npm install eslint-plugin-testing-library eslint-plugin-jest-dom`
2. Remove `eslintConfig` from `package.json`
3. Add `.eslintcache` and `.vscode` to `.gitignore`
4. Create `.vscode/settings.json` and add standard config
5. Test that it worked in `App.test.js`.
    ```js
    expect(linkElement).toHaveAttribute('checked');

    import { useEffect } from 'react';
    ```
6. After remove `eslintConfig` in `package.json`, we can create `.eslintrc.json` in the root directory.
    ```json
    {
      "plugins": ["jest-dom", "testing-library"],
      "extends": [
        "react-app",
        "react-app/jest",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended"
      ]
    }
    ```
7. We can create `setting.json` under `.vscode` directory. Note that we need to add more items in `eslint.validate` if we are going to use Typescript.
    ```json
    {
      "eslint.option": {
        "configFile": "eslintrc.json"
      },
      "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
      ],
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    }
    ```

## 4.3. React Bootstrap setup
1. We can install Boostrap by `npm install react-bootstrap bootstrap` and add the following links for Javascript files. [Reference](https://react-bootstrap.github.io/getting-started/introduction)
    ```html
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

    <script
      src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
      crossorigin></script>

    <script
      src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossorigin></script>
    ```
2. We then add `import 'bootstrap/dist/css/bootstrap.min.css';` to `index.js`.
3. Besides, to enable dark theme, we will modify `index.html` in `public` direclty by giving `style` attribute to `body` tag `<body style="background-color: teal; color: ivory">`.

## 4.4. Code organization and introduction to SummaryForm
1. In this case, we will create a `SummaryForm` component.
2. Test and code checkbox/button
3. Test and code Terms and Conditions "popover"
   1. syntax to test that element is no longer on page
4. Test and code summary text
5. Test and code button functionality
6. Code Organization
   1. Organization by pages
      1. `test` directory for each page
      2. Jest will find and run any files that end in `.test.js` or `.test.ts`
   2. `src/pages/summary`
      1. `OrderSummary.jsx`
      2. `SummaryForm.jsx`
   3. `src/pages/summary/test`
      1. `SummaryForm.test.jsx`

## 4.5. Code Quiz: Checkbox Enables Button
1. Write tests to ensure that
   1. Checkbox is unchecked by default
   2. Checking checkbox enables button
   3. Unchecking checkbox again disables button
2. A Chance to setup your own test file from scratch
   1. Use tests from last section as a model
   2. Render the `<SummaryForm />` component
3. Find checkbox and button using `{ name }` option
   1. Use mockup for `name` option values
4. Check that tests fail! Read part of read-green testing
