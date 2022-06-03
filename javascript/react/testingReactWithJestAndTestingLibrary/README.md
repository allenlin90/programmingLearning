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
  - [4.6. React Bootstrap Popover and Testing Library userEvent](#46-react-bootstrap-popover-and-testing-library-userevent)
  - [4.7. Screen Query Method](#47-screen-query-method)
  - [4.8. Testing element is not on the page: Start popover tests](#48-testing-element-is-not-on-the-page-start-popover-tests)
  - [4.9. React code: Popover](#49-react-code-popover)
  - [4.10. "Not wrapped in act(...)" Error, Async Disappearance](#410-not-wrapped-in-act-error-async-disappearance)
- [5. Simulating Server Resopnse with Mock Service Worker](#5-simulating-server-resopnse-with-mock-service-worker)
  - [5.1. OrderEntry Server Data Introduction](#51-orderentry-server-data-introduction)
  - [5.2. Introduction to Mock Service Worker and Handlers](#52-introduction-to-mock-service-worker-and-handlers)
  - [5.3. Setting up the Mock Service Worker Server](#53-setting-up-the-mock-service-worker-server)
  - [5.4. Tests with Mock Service Worker: Scoop Options](#54-tests-with-mock-service-worker-scoop-options)
  - [5.5. OPTIONAL React Code: Options and ScoopOption Components](#55-optional-react-code-options-and-scoopoption-components)
  - [5.6. Using `await findBy` to Find Elements that Populate Asynchronously](#56-using-await-findby-to-find-elements-that-populate-asynchronously)
  - [5.7. Code Quiz! Topping Options from Server](#57-code-quiz-topping-options-from-server)
  - [5.8. REFERENCE: Toubleshooting `Unable to find role="img"` error](#58-reference-toubleshooting-unable-to-find-roleimg-error)
  - [5.9. Error Server Response Planning](#59-error-server-response-planning)
  - [5.10. Simulating Server Error Response in Tests](#510-simulating-server-error-response-in-tests)
  - [5.11. OPTIONAL React Code: React Banner for Options Server Error](#511-optional-react-code-react-banner-for-options-server-error)
  - [5.12. Running only Selected Test, and `waitFor`](#512-running-only-selected-test-and-waitfor)
  - [5.13. Review: Server Error Response and Test Debugging Tools](#513-review-server-error-response-and-test-debugging-tools)
- [6. Testing Components Wrapped in a Provider](#6-testing-components-wrapped-in-a-provider)
  - [6.1. Intro to Tests for Total and Subtotals](#61-intro-to-tests-for-total-and-subtotals)
  - [6.2. Entering Text Input: Subtotal Tests](#62-entering-text-input-subtotal-tests)
  - [6.3. OPTIONAL React Code: OrderDetails Context](#63-optional-react-code-orderdetails-context)
  - [6.4. OPTIONAL React Code: Use Context to Display Scoops Subtotal](#64-optional-react-code-use-context-to-display-scoops-subtotal)
  - [6.5. Adding Context to test Setup; Test Catching Error in Code](#65-adding-context-to-test-setup-test-catching-error-in-code)
  - [6.6. Creating Custom Render to Wrap in Provider](#66-creating-custom-render-to-wrap-in-provider)
  - [6.7. Review: Scoops Subtotal with Context](#67-review-scoops-subtotal-with-context)
  - [6.8. Code Quiz! Toppings Subtotal](#68-code-quiz-toppings-subtotal)
  - [6.9. OPTIONAL React Code: Toppings Checkboxes](#69-optional-react-code-toppings-checkboxes)
  - [6.10. Code Quiz! Grand Total](#610-code-quiz-grand-total)
  - [6.11. "Unmounted Component" Error](#611-unmounted-component-error)
  - [6.12. What Should Functional Test Catch? and Refactor](#612-what-should-functional-test-catch-and-refactor)
- [7. Final Exam: Order Phases](#7-final-exam-order-phases)
  - [7.1. Introduction to Final Exam: Order Phases](#71-introduction-to-final-exam-order-phases)
  - [7.2. Adding a New Handler: Copy/Paste Warning!](#72-adding-a-new-handler-copypaste-warning)
  - [7.3. Debugging Tips](#73-debugging-tips)
  - [7.4. OPTIONAL: React Hints for Order Phase Coding](#74-optional-react-hints-for-order-phase-coding)
  - [7.5. Final Exam Solution](#75-final-exam-solution)
  - [7.6. OPTIONAL React Code: Order Phases](#76-optional-react-code-order-phases)
  - [7.7. Jest Mock Functions as Props](#77-jest-mock-functions-as-props)
  - [7.8. Review: Final Exam, and Introduction to Optional Practice](#78-review-final-exam-and-introduction-to-optional-practice)
  - [7.9. Common Mistakes with React Testing Library](#79-common-mistakes-with-react-testing-library)
- [8. Optional Extra Practice](#8-optional-extra-practice)
  - [8.1. Standard Questions for New Tests and Introduction to Exercises](#81-standard-questions-for-new-tests-and-introduction-to-exercises)
  - [8.2. Confirm "Loading" Text](#82-confirm-loading-text)
  - [8.3. Conditional Toppings Section on Summary Page](#83-conditional-toppings-section-on-summary-page)
  - [8.4. Disable Order Button if No Scoops Ordered](#84-disable-order-button-if-no-scoops-ordered)
  - [8.5. Red Input Box for Invalid Scoop Count](#85-red-input-box-for-invalid-scoop-count)
  - [8.6. No Scoops Subtotal Updatefor Invalid Scoop Count](#86-no-scoops-subtotal-updatefor-invalid-scoop-count)
  - [8.7. Server Error on Order Confirmation Page](#87-server-error-on-order-confirmation-page)

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
    ```tsx
    // src/pages/tests/SummaryForm.test.tsx
    import { render, screen, fireEvent } from '@testing-library/react';
    import SummaryForm from '../SummaryForm';

    test('Initial conditions', () => {
      render(<SummaryForm />);

      const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
      });
      expect(checkbox).not.toBeChecked();

      const confirmButton = screen.getByRole('button', { name: /confirm order/i });
      expect(confirmButton).toBeDisabled();
    });

    test('Checkbox disable button on first click and enables on second click', () => {
      render(<SummaryForm />);
      const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
      });
      const confirmButton = screen.getByRole('button', { name: /confirm order/i });

      fireEvent.click(checkbox);
      expect(confirmButton).toBeEnabled();

      fireEvent.click(checkbox);
      expect(confirmButton).toBeDisabled();
    });
    ```


## 4.6. React Bootstrap Popover and Testing Library userEvent
1. Besides `fireEvent`, we may use `userEvent` to trigger user actions.
2. Note that we need to install additional packages to work with `userEvent`. 
3. `npm install --save-dev @testing-library/user-event @testing-library/dom`
4. Starting from ver. 14, `userEvent` requires to call a setup and simluate an user with `userEvent.setup()`.
5. We then can use the object to interact with the components.
6. Besides, we need to turn the testing function into `async` and `await` for the click event as the state in React apps changes asynchronously. 
    ```tsx
    // src/pages/tests/SummaryForm.test.tsx
    import {
      render,
      screen,
      // fireEvent
    } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import SummaryForm from '../SummaryForm';

    test('Initial conditions', () => {
      render(<SummaryForm />);

      const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
      });
      expect(checkbox).not.toBeChecked();

      const confirmButton = screen.getByRole('button', { name: /confirm order/i });
      expect(confirmButton).toBeDisabled();
    });

    test('Checkbox disable button on first click and enables on second click', async () => {
      render(<SummaryForm />);

      const user = userEvent.setup();

      const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
      });
      const confirmButton = screen.getByRole('button', { name: /confirm order/i });

      await user.click(checkbox);
      expect(confirmButton).toBeEnabled();

      await user.click(checkbox);
      expect(confirmButton).toBeDisabled();
    });

    test('popover respondsto hover', () => {
      // popover starts out hidden
      // popover appears upon mouseover of checkbox label
      // popover disappears when we moust out
    });
    ```

## 4.7. Screen Query Method
1. screen Query Method
   1. command
      1. `get` expect element to be in DOM
      2. `query` expect element not to be in DOM
      3. `find` expect element to appear async
   2. [All] - returns an array of matches
      1. (exclude) expect only one match
      2. (include) expect more than one match
   3. QueryType
      1. `Role` (most preferred)
      2. `AltText` (images)
      3. `Text` (display elements)
      4. Form elements
         1. `PlaceHolderText`
         2. `LabelText`
         3. `DisplayValue`
2. These are useful links for the APIs and methods
   1. [https://testing-library.com/docs/react-testing-library/cheatsheet/](https://testing-library.com/docs/react-testing-library/cheatsheet/)
   2. [https://testing-library.com/docs/queries/about/](https://testing-library.com/docs/queries/about/)
   3. [https://testing-library.com/docs/queries/about/#priority](https://testing-library.com/docs/queries/about/#priority)

## 4.8. Testing element is not on the page: Start popover tests
## 4.9. React code: Popover
1. The popover element only shows on the screen when a user hovers on an element to trigger the event.
2. However, the following testing code doesn't actually work, as the popover doesn't disappear when it "unhovers".
    ```tsx
    // src/pages/summary/tests/SummaryForm.test.tsx
    import {
      render,
      screen,
      // fireEvent
    } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import SummaryForm from '../SummaryForm';

    test('Initial conditions', () => {
      render(<SummaryForm />);

      const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
      });
      expect(checkbox).not.toBeChecked();

      const confirmButton = screen.getByRole('button', { name: /confirm order/i });
      expect(confirmButton).toBeDisabled();
    });

    test('Checkbox disable button on first click and enables on second click', async () => {
      render(<SummaryForm />);

      const user = userEvent.setup();

      const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
      });
      const confirmButton = screen.getByRole('button', { name: /confirm order/i });

      await user.click(checkbox);
      expect(confirmButton).toBeEnabled();

      await user.click(checkbox);
      expect(confirmButton).toBeDisabled();
    });

    test('popover respondsto hover', async () => {
      render(<SummaryForm />);

      const popoverRegex = new RegExp(/no ice cream will actually be delivered/i);
      // popover starts out hidden
      const nullPopover = screen.queryByText(popoverRegex);
      expect(nullPopover).not.toBeInTheDocument();

      // popover appears upon mouseover of checkbox label
      const termsAndConditions = screen.getByText(/terms and conditions/i);
      await userEvent.hover(termsAndConditions);

      const popover = screen.getByText(popoverRegex);
      expect(popover).toBeInTheDocument();

      // popover disappears when we moust out
      await userEvent.unhover(termsAndConditions);
      const nullPopoverAgain = screen.queryByText(popoverRegex);
      expect(nullPopoverAgain).not.toBeInTheDocument();
    });
    ```
    ```tsx
    // src/pages/summary/SummaryForm
    import { useState, FC, ChangeEvent } from 'react';
    import { Form, Button, Popover, OverlayTrigger } from 'react-bootstrap';

    export const SummaryFormPage: FC = () => {
      const [tcChecked, setTcChecked] = useState<boolean>(false);

      const popover = (
        <Popover id='popover-basic'>
          <Popover.Header></Popover.Header>
          <Popover.Body>No ice cream will actually be delivered</Popover.Body>
        </Popover>
      );

      const checkboxLabel = (
        <span>
          I agree to
          <OverlayTrigger placement='right' overlay={popover}>
            <span style={{ color: 'blue' }}>Terms and Conditions</span>
          </OverlayTrigger>
        </span>
      );

      return (
        <Form>
          <Form.Group controlId='terms-and-conditions'>
            <Form.Check
              type='checkbox'
              checked={tcChecked}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTcChecked(e.target.checked)
              }
              label={checkboxLabel}
            />
          </Form.Group>
          <Button variant='primary' type='submit' disabled={!tcChecked}>
            Confirm order
          </Button>
        </Form>
      );
    };

    export default SummaryFormPage;
    ```

## 4.10. "Not wrapped in act(...)" Error, Async Disappearance
1. React updated element after text was finished.
2. Don't want to follow the advice to wrap in act(...)
   1. Testing library actually works this for us.
   2. [https://testing-library.com/docs/preact-testing-library/api/#act](https://testing-library.com/docs/preact-testing-library/api/#act)
3. To remedy this error:
   1. Determine what changes after the test is over (async)
   2. Account for the change in test by
      1. awaiting the change, and
      2. asserting on it
   3. More info: [https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning](https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning)
4. We can check on [https://testing-library.com/docs/guide-disappearance/](https://testing-library.com/docs/guide-disappearance/)
5. Note that we don't need to check with `expect` to know if the element is `.not.toBeInTheDocument`.
6. According to [https://testing-library.com/docs/guide-disappearance/#waiting-for-disappearance](https://testing-library.com/docs/guide-disappearance/#waiting-for-disappearance), we can return the `queryByText` object in the callback function to check if the element has been removed.
    ```tsx
    // src/pages/summary/SummaryFrom.test.tsx
    import {
      render,
      screen,
      waitForElementToBeRemoved,
      // fireEvent
    } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import SummaryForm from '../SummaryForm';

    test('Initial conditions', () => {
      render(<SummaryForm />);

      const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
      });
      expect(checkbox).not.toBeChecked();

      const confirmButton = screen.getByRole('button', { name: /confirm order/i });
      expect(confirmButton).toBeDisabled();
    });

    test('Checkbox disable button on first click and enables on second click', async () => {
      render(<SummaryForm />);

      const user = userEvent.setup();

      const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
      });
      const confirmButton = screen.getByRole('button', { name: /confirm order/i });

      await user.click(checkbox);
      expect(confirmButton).toBeEnabled();

      await user.click(checkbox);
      expect(confirmButton).toBeDisabled();
    });

    test('popover respondsto hover', async () => {
      render(<SummaryForm />);
      const popoverRegex = new RegExp(/no ice cream will actually be delivered/i);

      // popover starts out hidden
      const nullPopover = screen.queryByText(popoverRegex);
      expect(nullPopover).not.toBeInTheDocument();

      // popover appears upon mouseover of checkbox label
      const termsAndConditions = screen.getByText(/terms and conditions/i);
      await userEvent.hover(termsAndConditions);
      const popover = screen.getByText(popoverRegex);
      expect(popover).toBeInTheDocument();

      // popover disappears when we moust out
      await userEvent.unhover(termsAndConditions);
      await waitForElementToBeRemoved(() => screen.queryByText(popoverRegex));
    });
    ```

# 5. Simulating Server Resopnse with Mock Service Worker
## 5.1. OrderEntry Server Data Introduction
1. In this app, we have 2 options to choose the flavor of and scoops of ice cream. 
2. Besides, the user is allowed to add up toppings. 
3. For testing, we 
   1. Test that option images render
   2. Mock service worker
   3. Mock server response for `/scoops` and `/toppings`

## 5.2. Introduction to Mock Service Worker and Handlers
1. Mock service worker is to 
   1. intercept network calls and 
   2. return specified response
2. Prevents network calls during tests
3. Set up test conditions using server response
4. To use mock service worker, we 
   1. Install with `npm install msw`
   2. Create handlers
   3. Create test server
   4. Make sure test server listens during all tests
      1. Reset after each test
5. We create a new folder `mocks` in root directory. Note that the handler can be either `rest` or `graphql`.
6. We can check more setting from the [doc](https://mswjs.io/docs/basics/response-resolver).
7. For example, we can use `import { rest } from 'msw'` to mock RESTful API.
```ts
// src/mocks/handlers.ts
import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imagePath: '/images/chocolate.png' },
        { name: 'Vanilla', imagePath: '/images/vanilla.png' },
      ])
    );
  }),
];
```

## 5.3. Setting up the Mock Service Worker Server
1. To set up the mock server, we create `server.js` file in `src/mock` and import the following code to create a mock Node.js server.
    ```ts
    // doc https://mswjs.io/docs/getting-started/integrate/node
    import { setupServer } from 'msw/node';
    import { handlers } from './handlers';

    setupServer(...handlers);
    ```
2. After setting up and configure the mock server, we can integrate it with Jest and testing library by updating `setupTest.js` in root directory.
    ```ts
    // setupTests.ts
    // jest-dom adds custom jest matchers for asserting on DOM nodes.
    // allows you to do things like:
    // expect(element).toHaveTextContent(/react/i)
    // learn more: https://github.com/testing-library/jest-dom
    import '@testing-library/jest-dom';

    // src/setupTests.js
    import { server } from './mocks/server';
    // Establish API mocking before all tests.
    beforeAll(() => server.listen());

    // Reset any request handlers that we may add during the tests,
    // so they don't affect other tests.
    afterEach(() => server.resetHandlers());

    // Clean up after the tests are finished.
    afterAll(() => server.close());
    ```

## 5.4. Tests with Mock Service Worker: Scoop Options
1. To check all the images rendered on the screen, we can use [`getAllByRole`](https://testing-library.com/docs/queries/byrole/) to get an array of element(s).
2. We can check with [`.toHaveLength(number)`](https://jestjs.io/docs/expect#tohavelengthnumber) for the number of items in an array of characters of a string value.
    ```tsx
    // src/pages/entry/tests/Options.test.tsx
    import { render, screen } from '@testing-library/react';
    import Options from '../Options';

    test('displays image for each scoop option from server', () => {
      render(<Options optionType='scoops' />);

      // find multiple images
      const scoopImages = screen.getAllByRole('img', { name: /scoop$/i });
      expect('scoopImages').toHaveLength(2);

      // confirm alt text of images
      // @ts-ignore
      const altText = scoopImages.map((element) => element.alt);
      expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
    });
    ```

## 5.5. OPTIONAL React Code: Options and ScoopOption Components
1. Though we set up `Options` and `ScoopOption` component, the feature isn't ready and can't pass the test with current setup.
2. We can notice the component has a single `div` with class `row` with empty content. 
3. It indicates that the mock server doesn't work and serve the data as it should. 
    ```tsx
    // src/pages/entry/ScoopOption.tsx
    import { FC } from 'react';
    import { Col } from 'react-bootstrap';

    export interface OptionType {
      name: string;
      imagePath: string;
    }

    export const ScoopOption: FC<OptionType> = ({ name, imagePath }) => {
      return (
        <Col xs={12} sx={6} md={4} lg={3} style={{ textAlign: 'center' }}>
          <img
            style={{ width: '75%' }}
            src={`http://localhost:3030/${imagePath}`}
            alt={`${name}_scoop`}
          />
        </Col>
      );
    };

    export default ScoopOption;
    ```
    ```tsx
    // src/pages/entry/Options.tsx
    import axios from 'axios';
    import { Row } from 'react-bootstrap';
    import { FC, useEffect, useState } from 'react';
    import ScoopOption from './ScoopOption';
    import { OptionType } from './ScoopOption';

    export const Options: FC<{ optionType: string }> = ({ optionType }) => {
      const [items, setItems] = useState<OptionType[]>([]);

      // optionType is 'scoops' or 'toppings
      useEffect(() => {
        axios(`http://localhost:3030/${optionType}`)
          .then((res) => setItems(res.data))
          .catch((err) => console.log(err));
      }, [optionType]);

      const ItemComponent: FC<OptionType> = ({ name, imagePath }) =>
        optionType === 'scoops' ? (
          <ScoopOption name={name} imagePath={imagePath} />
        ) : null;

      const optionItem = items.map(({ name, imagePath }) => (
        <ItemComponent key={name} name={name} imagePath={imagePath} />
      ));

      return <Row>{optionItem}</Row>;
    };

    export default Options;
    ```

## 5.6. Using `await findBy` to Find Elements that Populate Asynchronously
1. To fix the issue in the last section, we can use both `await` and `findBy` to simulate the asynchronous behavior.
    ```tsx
    // src/pages/entry/tests/Options.test.tsx
    import { render, screen } from '@testing-library/react';
    import Options from '../Options';

    test('displays image for each scoop option from server', async () => {
      render(<Options optionType='scoops' />);

      // find multiple images
      const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
      expect(scoopImages).toHaveLength(2);

      // confirm alt text of images
      // @ts-ignore
      const altText = scoopImages.map((element) => element.alt);
      expect(altText).toEqual(['Chocolate_scoop', 'Vanilla_scoop']);
    });
    ```

## 5.7. Code Quiz! Topping Options from Server
1. Mock service worker mimics response from server
   1. Create handler
   2. Create server
   3. Update `setupTests` to listen for requests
2. `getAllByRole`
   1. Search for more than one match to role
3. `await` `findAllByRole`
   1. For asynchronous DOM update of elements

## 5.8. REFERENCE: Toubleshooting `Unable to find role="img"` error
1. Some reasons for incorrect or unexpected output
2. Mistyping scoops URL
3. Mistyping `alt` attribute or `name` option
4. Omitting `res` from handler return value
5. Omitting square brackets in handler return value
6. ScoopOption props not destructured
7. Importing ScoopOption from the wrong module
8. Handler Response Resolver Arguments in Incorrect Order

## 5.9. Error Server Response Planning
1. Fill in that `catch` statement we left as TODO
2. Display `AlertBanner` component if `axios` fall throw error
   1. Instead of content from server
3. Use simple react-bootstrap alert
   1. [https://react-bootstrap.github.io/components/alerts/](https://react-bootstrap.github.io/components/alerts/)
   2. role: `alert`
4. By default, handlers return non-error response
   1. Override with error response for particular tests
5. Jest debugging tools
   1. Running only one test file
   2. Running only one test within a file

## 5.10. Simulating Server Error Response in Tests
1. To simluate an error response, we overwrite the service worker by resting and setting up specific error handler.
2. Note that to pass the test, we need to update `Options` to handle error response with `alert` component which hasn't been deployed in the current progress. 
    ```tsx
    // src/entry/__tests__/OrderEntry.test.tsx
    import { render, screen } from '@testing-library/react';
    import OrderEntry from '../OrderEntry';
    import { rest } from 'msw';
    import { server } from '../../../mocks/server';

    test('handles error for scoops and toppings routes', async () => {
      server.resetHandlers(
        rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
          res(ctx.status(500))
        ),
        rest.get('http://localhost:3030/toppings', (req, res, ctx) =>
          res(ctx.status(500))
        )
      );

      render(<OrderEntry />);

      const alerts = await screen.findAllByRole('alert', {
        name: 'An unexpected error ocurred. Please try again later.',
      });

      expect(alerts).toHaveLength(2);
    });
    ```

## 5.11. OPTIONAL React Code: React Banner for Options Server Error
1. We create `AlertBanner` component to show when the app gets an error response
    ```tsx
    import { FC } from 'react';
    import Alert from 'react-bootstrap/Alert';

    interface AlertBannerProps {
      message?: string;
      variant?: string;
    }

    export const AlertBanner: FC<AlertBannerProps> = ({
      message = 'An unexpected error ocurred. Please try again later.',
      variant = 'danger',
    }) => {
      return (
        <Alert variant={variant} style={{ backgroundColor: 'red' }}>
          {message}
        </Alert>
      );
    };

    export default AlertBanner;
    ```
2. We create `OptionEntry` component to show both scoop options and topping options
    ```tsx
    import { FC } from 'react';
    import Options from './Options';

    export const OrderEntry: FC = () => {
      return (
        <>
          <Options optionType='scoops' />
          <Options optionType='toppings' />
        </>
      );
    };

    export default OrderEntry;
    ```
3. We update `Options` component with `error` state to show `AlertBanner` when the app gets error response.
    ```tsx
    import axios from 'axios';
    import { Row } from 'react-bootstrap';
    import { FC, useEffect, useState } from 'react';
    import { OptionType } from 'src/types';
    import ScoopOption from './ScoopOption';
    import ToppingOption from './ToppingOption';
    import AlertBanner from './AlertBanner';

    export const Options: FC<{ optionType: string }> = ({ optionType }) => {
      const [items, setItems] = useState<OptionType[]>([]);
      const [error, setError] = useState<boolean>(false);

      // optionType is 'scoops' or 'toppings
      useEffect(() => {
        axios(`http://localhost:3030/${optionType}`)
          .then((res) => setItems(res.data))
          .catch((err) => setError(true));
      }, [optionType]);

      if (error) {
        return <AlertBanner />;
      }

      const ItemComponent: FC<OptionType> = ({ name, imagePath }) =>
        optionType === 'scoops' ? (
          <ScoopOption name={name} imagePath={imagePath} />
        ) : optionType === 'toppings' ? (
          <ToppingOption name={name} imagePath={imagePath} />
        ) : null;

      const optionItem = items.map(({ name, imagePath }) => (
        <ItemComponent key={name} name={name} imagePath={imagePath} />
      ));

      return (
        <>
          <Row>{optionItem}</Row>;
        </>
      );
    };

    export default Options;
    ```

## 5.12. Running only Selected Test, and `waitFor`
1. When run `npm run test` or `yarn test`, the app runs all the tests available in the project.
2. We can tap <kbd>p</kbd> to run certain test by searching with regular expression.
3. In a test file, we can use `test.only` method to run a single test if there's multiple tests in the same file.
4. On the other hand, we can use `test.skip` to skip certain test in the file.
5. When there are more than 2 async calls, using only `await` isn't enough as the test may run before all API calls are done. 
6. In this case, we can use [`waitFor`](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor). 
    ```tsx
    // src/pages/entry/tests/OrderEntry.test.tsx
    import { render, screen, waitFor } from '@testing-library/react';
    import OrderEntry from '../OrderEntry';
    import { rest } from 'msw';
    import { server } from '../../../mocks/server';

    test('handles error for scoops and toppings routes', async () => {
      server.resetHandlers(
        rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
          res(ctx.status(500))
        ),
        rest.get('http://localhost:3030/toppings', (req, res, ctx) =>
          res(ctx.status(500))
        )
      );

      render(<OrderEntry />);

      await waitFor(async () => {
        const alerts = await screen.findAllByRole('alert');
        expect(alerts).toHaveLength(2);
      });
    });
    ```

## 5.13. Review: Server Error Response and Test Debugging Tools
1. Override mock service worker response for individual tests
2. Misleading unable to find `role='alert'` errror
3. Isolate file by typing `p` in Jest watch mode
4. Isolate test within file with `test.only` or `test.skip`.
5. `waitFor` for tests where `await findBy` isn't enough.

# 6. Testing Components Wrapped in a Provider
## 6.1. Intro to Tests for Total and Subtotals
1. When the user add scoops and toppings, the subtotal of each section will change accordingly.

## 6.2. Entering Text Input: Subtotal Tests
1. When checking and getting an element with `getByText`, we can use either regular expression or string value with an option `{ exact: false }` to look up for substring match. 
2. This can be useful when the element updates along the usage with different text content. 

## 6.3. OPTIONAL React Code: OrderDetails Context
```tsx
// src/contexts/OrderDetails.tsx
import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { pricePerItem } from '../constants';
import { formatCurrency } from '../utilities';

// @ts-ignore
const OrderDetails = createContext<
  [
    orderDetails: {
      scoops: Map<any, any>;
      toppings: Map<any, any>;
      totals: { toppings: string; scoops: string };
    },
    updateItemCount: (
      itemName: string,
      newItemCount: string,
      optionType: 'scoops' | 'toppings'
    ) => void,
    resetOrder: () => void
  ]
>();

// create custom hook to check whether we're inside a provider
export function useOrderDetails() {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error(
      'useOrderDetails must be used within an OrderDetailsProvider'
    );
  }

  return context;
}

function calculateSubtotal(optionType: string, optionCounts: any) {
  let optionCount = 0;
  for (const count of optionCounts[optionType].values()) {
    optionCount += count;
  }

  return optionCount * pricePerItem[optionType as 'scoops' | 'toppings'];
}

export function OrderDetailsProvider(props: any) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });
  const zeroCurrency = formatCurrency(0);
  const [totals, setTotals] = useState({
    scoops: zeroCurrency,
    toppings: zeroCurrency,
    grandTotal: zeroCurrency,
  });

  useEffect(() => {
    const scoopsSubtotal = calculateSubtotal('scoops', optionCounts);
    const toppingsSubtotal = calculateSubtotal('toppings', optionCounts);
    const grandTotal = scoopsSubtotal + toppingsSubtotal;
    setTotals({
      scoops: formatCurrency(scoopsSubtotal),
      toppings: formatCurrency(toppingsSubtotal),
      grandTotal: formatCurrency(grandTotal),
    });
  }, [optionCounts]);

  const value = useMemo(() => {
    function updateItemCount(
      itemName: string,
      newItemCount: string,
      optionType: 'scoops' | 'toppings'
    ) {
      const newOptionCounts = { ...optionCounts };

      // update option count for this item with the new value
      const optionCountsMap = optionCounts[optionType];
      optionCountsMap.set(itemName, parseInt(newItemCount));

      setOptionCounts(newOptionCounts);
    }

    // alternate updateItemCount that DOES NOT mutate state. Reference Q&A:
    // https://www.udemy.com/course/react-testing-library/learn/#questions/14446658/
    // function updateItemCount(itemName, newItemCount, optionType) {
    //   // get option Map and make a copy
    //   const { [optionType]: optionMap } = optionCounts;
    //   const newOptionMap = new Map(optionMap);

    //   // update the copied Map
    //   newOptionMap.set(itemName, parseInt(newItemCount));

    //   // create new object with the old optionCounts plus new map
    //   const newOptionCounts = { ...optionCounts };
    //   newOptionCounts[optionType] = newOptionMap;

    //   // update state
    //   setOptionCounts(newOptionCounts);
    // }

    function resetOrder() {
      setOptionCounts({
        scoops: new Map(),
        toppings: new Map(),
      });
    }
    // getter: object containing option counts for scoops and toppings, subtotals and totals
    // setter: updateOptionCount
    return [{ ...optionCounts, totals }, updateItemCount, resetOrder];
  }, [optionCounts, totals]);
  return <OrderDetails.Provider value={value} {...props} />;
}
```
```ts
// src/contants/index.ts
export const pricePerItem = {
  scoops: 2,
  toppings: 1.5,
};
```

## 6.4. OPTIONAL React Code: Use Context to Display Scoops Subtotal
```tsx
// src/App.tsx
import { useState } from 'react';
import Container from 'react-bootstrap/Container';

import OrderConfirmation from './pages/confirmation/OrderConfirmation';
import OrderEntry from './pages/entry/OrderEntry';
import OrderSummary from './pages/summary/OrderSummary';

import { OrderDetailsProvider } from './contexts/OrderDetails';

export default function App() {
  // orderPhase needs to be 'inProgress', 'review' or 'completed'
  const [orderPhase, setOrderPhase] = useState('inProgress');

  let Component = OrderEntry; // default to order page
  switch (orderPhase) {
    case 'inProgress':
      Component = OrderEntry;
      break;
    case 'review':
      Component = OrderSummary;
      break;
    case 'completed':
      Component = OrderConfirmation;
      break;
    default:
  }

  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  );
}
```
```tsx
// src/pages/entry/Options.tsx
import axios from 'axios';
import { Row } from 'react-bootstrap';
import { FC, useEffect, useState } from 'react';
import { OptionType } from 'src/types';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import AlertBanner from '../common/AlertBanner';
import { pricePerItem } from '../../constants';
import { useOrderDetails } from '../../contexts/OrderDetails';
import { formatCurrency } from '../../utilities';

export const Options: FC<{ optionType: string }> = ({ optionType }) => {
  const [items, setItems] = useState<OptionType[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [orderDetails, updateItemCount] = useOrderDetails();

  // optionType is 'scoops' or 'toppings
  useEffect(() => {
    axios(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((err) => setError(true));
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(
          itemName,
          newItemCount as string,
          optionType as 'scoops' | 'toppings'
        )
      }
    />
  ));

  return (
    <>
      <h2>{title}</h2>
      <p>
        {formatCurrency(pricePerItem[optionType as 'scoops' | 'toppings'])} each
      </p>
      <p>
        {title} total:{' '}
        {orderDetails.totals[optionType as 'toppings' | 'scoops']}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
};

export default Options;
```
```tsx
// src/pages/entry/ScoopOption.tsx
import { ChangeEvent, FC, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { OptionType } from 'src/types';

export const ScoopOption: FC<OptionType> = ({
  name,
  imagePath,
  updateItemCount,
}) => {
  const [isValid, setIsValid] = useState(true);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;

    // make sure we're using a number and not a string to validate
    const currentValueFloat = parseFloat(currentValue);
    const valueIsValid =
      0 <= currentValueFloat &&
      currentValueFloat <= 10 &&
      Math.floor(currentValueFloat) === currentValueFloat;

    // validate
    setIsValid(valueIsValid);

    // only update context if the value is valid
    if (valueIsValid && updateItemCount) {
      updateItemCount(name, currentValueFloat);
    }
  };

  return (
    <Col xs={12} sx={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name}_scoop`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: '10px' }}
      >
        <Form.Label column xs='6' style={{ textAlign: 'right' }}>
          {name}
        </Form.Label>
        <Col xs='5' style={{ textAlign: 'left' }}>
          <Form.Control
            type='number'
            defaultValue={0}
            onChange={handleChange}
            isInvalid={!isValid}
          />
        </Col>
      </Form.Group>
    </Col>
  );
};

export default ScoopOption;
```

## 6.5. Adding Context to test Setup; Test Catching Error in Code
1. At the current step, we still can't pass most of the tests we have made.
2. The main reason is that the components aren't rendered in the context provider that they can't access the data and values in the context.
3. Therefore, we can pass a 2nd argument to `render` with a `wrapper` property. 
4. Note that we need to `await` for `userEvent.type` to ensure the component is updated to certain state we want.
    ```tsx
    // src/pages/entry/tests/totalUpdates.test.tsx
    import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import Options from '../Options';
    import { OrderDetailsProvider } from '../../../contexts/OrderDetails';

    test('update scoop subtotal when scoops change', async () => {
      render(<Options optionType='scoops' />, { wrapper: OrderDetailsProvider });
      // make sure total starts out $0.00
      const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
      expect(scoopsSubtotal).toHaveTextContent('0.00');

      // update vanilla scoops to 1 and check the subtotal
      const vanillaInput = await screen.findByRole('spinbutton', {
        name: 'Vanilla',
      });
      await userEvent.clear(vanillaInput);
      await userEvent.type(vanillaInput, '1');
      expect(scoopsSubtotal).toHaveTextContent('2.00');

      // update chocolate scoops to 2 and check subtotal
      const chocolateInput = await screen.findByRole('spinbutton', {
        name: 'Chocolate',
      });
      await userEvent.clear(chocolateInput);
      await userEvent.type(chocolateInput, '2');
      expect(scoopsSubtotal).toHaveTextContent('6.00');
    });
    ```
    ```tsx
    // src/contexts/OrderDetails.tsx
    import { createContext, useContext, useState, useMemo, useEffect } from 'react';
    import { pricePerItem } from '../constants';
    import { formatCurrency } from '../utilities';

    // @ts-ignore
    const OrderDetails = createContext<
      [
        orderDetails: {
          scoops: Map<any, any>;
          toppings: Map<any, any>;
          totals: { toppings: string; scoops: string };
        },
        updateItemCount: (
          itemName: string,
          newItemCount: string,
          optionType: 'scoops' | 'toppings'
        ) => void,
        resetOrder: () => void
      ]
    >();

    // create custom hook to check whether we're inside a provider
    export function useOrderDetails() {
      const context = useContext(OrderDetails);

      if (!context) {
        throw new Error(
          'useOrderDetails must be used within an OrderDetailsProvider'
        );
      }

      return context;
    }

    function calculateSubtotal(optionType: string, optionCounts: any) {
      let optionCount = 0;
      for (const count of optionCounts[optionType].values()) {
        optionCount += count;
      }

      return optionCount * pricePerItem[optionType as 'scoops' | 'toppings'];
    }

    export function OrderDetailsProvider(props: any) {
      const [optionCounts, setOptionCounts] = useState({
        scoops: new Map(),
        toppings: new Map(),
      });
      const zeroCurrency = formatCurrency(0);
      const [totals, setTotals] = useState({
        scoops: zeroCurrency,
        toppings: zeroCurrency,
        grandTotal: zeroCurrency,
      });

      useEffect(() => {
        const scoopsSubtotal = calculateSubtotal('scoops', optionCounts);
        const toppingsSubtotal = calculateSubtotal('toppings', optionCounts);
        const grandTotal = scoopsSubtotal + toppingsSubtotal;
        setTotals({
          scoops: formatCurrency(scoopsSubtotal),
          toppings: formatCurrency(toppingsSubtotal),
          grandTotal: formatCurrency(grandTotal),
        });
      }, [optionCounts]);

      const value = useMemo(() => {
        function updateItemCount(
          itemName: string,
          newItemCount: string,
          optionType: 'scoops' | 'toppings'
        ) {
          const newOptionCounts = { ...optionCounts };

          // update option count for this item with the new value
          const optionCountsMap = optionCounts[optionType];
          optionCountsMap.set(itemName, parseInt(newItemCount));

          setOptionCounts(newOptionCounts);
        }

        // alternate updateItemCount that DOES NOT mutate state. Reference Q&A:
        // https://www.udemy.com/course/react-testing-library/learn/#questions/14446658/
        // function updateItemCount(itemName, newItemCount, optionType) {
        //   // get option Map and make a copy
        //   const { [optionType]: optionMap } = optionCounts;
        //   const newOptionMap = new Map(optionMap);

        //   // update the copied Map
        //   newOptionMap.set(itemName, parseInt(newItemCount));

        //   // create new object with the old optionCounts plus new map
        //   const newOptionCounts = { ...optionCounts };
        //   newOptionCounts[optionType] = newOptionMap;

        //   // update state
        //   setOptionCounts(newOptionCounts);
        // }

        function resetOrder() {
          setOptionCounts({
            scoops: new Map(),
            toppings: new Map(),
          });
        }
        // getter: object containing option counts for scoops and toppings, subtotals and totals
        // setter: updateOptionCount
        return [{ ...optionCounts, totals }, updateItemCount, resetOrder];
      }, [optionCounts, totals]);
      return <OrderDetails.Provider value={value} {...props} />;
    }
    ```

## 6.6. Creating Custom Render to Wrap in Provider

## 6.7. Review: Scoops Subtotal with Context

## 6.8. Code Quiz! Toppings Subtotal

## 6.9. OPTIONAL React Code: Toppings Checkboxes

## 6.10. Code Quiz! Grand Total

## 6.11. "Unmounted Component" Error

## 6.12. What Should Functional Test Catch? and Refactor


# 7. Final Exam: Order Phases
## 7.1. Introduction to Final Exam: Order Phases
## 7.2. Adding a New Handler: Copy/Paste Warning!
## 7.3. Debugging Tips
## 7.4. OPTIONAL: React Hints for Order Phase Coding
## 7.5. Final Exam Solution
## 7.6. OPTIONAL React Code: Order Phases
## 7.7. Jest Mock Functions as Props
## 7.8. Review: Final Exam, and Introduction to Optional Practice
## 7.9. Common Mistakes with React Testing Library

# 8. Optional Extra Practice
## 8.1. Standard Questions for New Tests and Introduction to Exercises
## 8.2. Confirm "Loading" Text
## 8.3. Conditional Toppings Section on Summary Page
## 8.4. Disable Order Button if No Scoops Ordered
## 8.5. Red Input Box for Invalid Scoop Count
## 8.6. No Scoops Subtotal Updatefor Invalid Scoop Count
## 8.7. Server Error on Order Confirmation Page
