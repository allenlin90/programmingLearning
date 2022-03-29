Start learning: 2022/03/29

- [1. Introduction](#1-introduction)
  - [1.1. Testing Library and Jest](#11-testing-library-and-jest)
  - [create-react-app](#create-react-app)
  - [First Test with Testing Library](#first-test-with-testing-library)
  - [Jest and Jest-DOM Assertions](#jest-and-jest-dom-assertions)

# 1. Introduction
## 1.1. Testing Library and Jest
1. React Testing Library provides virtual DOM for tests
2. Jest is a test runner that
   1. Finds test
   2. Runs tests
   3. Determines whether tests pass or fail

## create-react-app
1. `npm` package creates react applications with
   1. Configuration
   2. Webpack and Babel
   3. Web server
   4. Testing Library

## First Test with Testing Library
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

## Jest and Jest-DOM Assertions
1. From the last section, the testing use an assertion `expect(linkElement).toBeInTheDocument()`.
2. `expect` is Jest global that starts the assertion and takes an argument as the subject of the assertion.
3. It then works on a method such as `.toBeInTheDocument` which is a matcher, coming from `Jest-DOM` , to indicate the type of assertion.
