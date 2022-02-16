Start learning on 2022/02/06

- [1. Types around Props and State](#1-types-around-props-and-state)
  - [1.1. Changes with TypeScript](#11-changes-with-typescript)
  - [1.2. Explicit Component Type Annotations](#12-explicit-component-type-annotations)
  - [1.3. Annotations with Children](#13-annotations-with-children)
  - [1.4. State with Typescript](#14-state-with-typescript)
  - [1.5. Type inference with State](#15-type-inference-with-state)
  - [1.6. Quick finish to the example](#16-quick-finish-to-the-example)
  - [1.7. More on state](#17-more-on-state)
  - [1.8. Type union in state](#18-type-union-in-state)
- [2. Types around props and state](#2-types-around-props-and-state)
  - [2.1. Inline event handlers](#21-inline-event-handlers)
  - [2.2. Typing standalone event handler](#22-typing-standalone-event-handler)
  - [2.3. Applying types to Refs](#23-applying-types-to-refs)
  - [2.4. More on Refs](#24-more-on-refs)
- [3. Typescript with Redux](#3-typescript-with-redux)
  - [3.1. Project setup](#31-project-setup)
  - [3.2. Redux store design](#32-redux-store-design)
  - [3.3. Reducer setup](#33-reducer-setup)
  - [3.4. Annotating the return type](#34-annotating-the-return-type)
  - [3.5. Typing an action](#35-typing-an-action)
  - [3.6. Separate interfaces for Actions](#36-separate-interfaces-for-actions)
  - [3.7. Applying action interfaces](#37-applying-action-interfaces)
  - [3.8. Adding an action type enum](#38-adding-an-action-type-enum)
  - [3.9. A better way to organize code](#39-a-better-way-to-organize-code)
  - [3.10. Adding action creators](#310-adding-action-creators)
  - [3.11. Adding request logic](#311-adding-request-logic)
  - [3.12. Applying Typings to Dispatch](#312-applying-typings-to-dispatch)
  - [3.13. Setting up exports](#313-setting-up-exports)
  - [3.14. Wiring up to React](#314-wiring-up-to-react)
  - [3.15. Initial state](#315-initial-state)
  - [3.16. Reminder on Event Types](#316-reminder-on-event-types)
  - [3.17. Calling an action creator](#317-calling-an-action-creator)
  - [3.18. Binding action creators](#318-binding-action-creators)
  - [3.19. Selecting state](#319-selecting-state)
  - [3.20. Awkward Typings around React-Redux](#320-awkward-typings-around-react-redux)
  - [3.21. Creating a typed selector](#321-creating-a-typed-selector)
  - [3.22. Consuming store state](#322-consuming-store-state)
- [4. Code Transpiling in the Browser](#4-code-transpiling-in-the-browser)
  - [4.1. Transpiliing Options](#41-transpiliing-options)
  - [4.2. Remote Transpiling](#42-remote-transpiling)
  - [4.3. Module Systems](#43-module-systems)
  - [4.4. Behind the Scenes with Webpack](#44-behind-the-scenes-with-webpack)
  - [4.5. Webpack with ES Modules](#45-webpack-with-es-modules)
  - [4.6. One Small change](#46-one-small-change)
  - [4.7. Options for building](#47-options-for-building)
  - [4.8. So which approach](#48-so-which-approach)
  - [4.9. A Webpack replacement](#49-a-webpack-replacement)

# 1. Types around Props and State
## 1.1. Changes with TypeScript
1. Applying types to component props
2. Applying types to state in a component
3. Types with event handlers
4. Several other assorted areas

## 1.2. Explicit Component Type Annotations
1. As we declare a React functional component, the props doesn't know other default properties in a FC props such as `displayName`. 
2. The 2nd approach in the following code has the benefits that Typescript knows `ChildAsFC` is a functional component with extended props from `ChildProps` interface.
   1. `Child` will be a React function component.
   2. `Child` might have properties assigned to it like `propTypes` and `contextTypes`.
   3. `Child` will receive props of type `ChildProps`. 
      ```tsx
      // src/props/Child.tsx
      interface ChildProps {
        color: string;
      }

      export const Child = ({ color }: ChildProps) => {
        return <div>{color}</div>;
      };

      export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
        return <div>{color}</div>;
      };
      ```
3. Note that `React.FC` is identifical of using `React.FunctionComponent`.

## 1.3. Annotations with Children
1. To pass any JSX or element in between a custom component, we can't use a custom props interface directly as the component can't use `children` directly as the props `interface` doesn't include `children`.
2. Therefore, by declaring with `ChildAsFC: React.FC<ChildProps>` the React functional component got regular properties of a component and extends the additionals from the `interface`.
    ```tsx
    // src/props/Child.tsx
    interface ChildProps {
      color: string;
      onClick: () => void;
    }

    export const Child = ({ color, onClick }: ChildProps) => {
      return (
        <div>
          {color}
          <button onClick={onClick}>Click Me</button>
        </div>
      );
    };

    export const ChildAsFC: React.FC<ChildProps> = ({
      color,
      onClick,
      children,
    }) => {
      return (
        <div>
          {color}
          {children}
          <button onClick={onClick}>Click Me</button>
        </div>
      );
    };
    ```

## 1.4. State with Typescript
1. In this case, we use `useState` hook from `react`.
    ```tsx
    import { useState } from 'react';

    const GuestList: React.FC = () => {
      const [name, setName] = useState('');

      return (
        <div>
          <h3>Guest List</h3>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => {}} type='button'>
            Add Guest
          </button>
        </div>
      );
    };

    export default GuestList;
    ```

## 1.5. Type inference with State
## 1.6. Quick finish to the example
```tsx
// src/state/GuestList.tsx
import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick} type='button'>
        Add Guest
      </button>
    </div>
  );
};

export default GuestList;
```

## 1.7. More on state
```tsx
// src/state/UserSearch.tsx
import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');

  const onClick = () => {};

  return (
    <div>
      User Search
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
    </div>
  );
};

export default UserSearch;
```

## 1.8. Type union in state
1. When declaring `useState`, we can give annotation to indicate the type of the value.
2. In this case, the `user` state can be either an object with `name` and `age` or `undefined` when nothing is found from the search.
    ```tsx
    // src/state/UserSearch.tsx
    import { useState } from 'react';

    const users = [
      { name: 'Sarah', age: 20 },
      { name: 'Alex', age: 20 },
      { name: 'Michael', age: 20 },
    ];

    const UserSearch: React.FC = () => {
      const [name, setName] = useState('');
      const [user, setUser] = useState<{ name: string; age: number } | undefined>();

      const onClick = () => {
        const foundUser = users.find((user) => user.name === name);
        setUser(foundUser);
      };

      return (
        <div>
          User Search
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={onClick}>Find User</button>
          <div>
            {user && user.name}
            {user && user.age}
          </div>
        </div>
      );
    };

    export default UserSearch;
    ```

# 2. Types around props and state
## 2.1. Inline event handlers
## 2.2. Typing standalone event handler
1. When we give the callback event as inline handler in JSX, there's no specific error for the code.
2. However, when we extract the event handler out as a helper function, Typescript will indicates that issue if we don't specific the event.
    ```tsx
    // src/events/EventComponent.tsx
    const EventComponent: React.FC = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e);
    };

    return (
      <div>
        <input type='text' onChange={onChange} />
      </div>
    );
  };

  export default EventComponent;
  ```

## Handling drag events too
1. Not only `change` event for inputs or `drag` event could be used for different UI/UX.
    ```tsx
    // src/events/EventComponent.tsx
    import React from 'react';

    const EventComponent: React.FC = () => {
      const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
      };

      const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log('im being dragged');
      };

      return (
        <div>
          <input type='text' onChange={onChange} />
          <div draggable onDragStart={onDragStart}>
            Drag Me
          </div>
        </div>
      );
    };

    export default EventComponent;
    ```

## Typescript with class components
```tsx
// src/classes/UserSearch.tsx
import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find(
      (user) => user.name === this.state.name
    );
    this.setState({ user: foundUser });
  };

  render() {
    const { user, name } = this.state;
    return (
      <div>
        User Search
        <input
          type='text'
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
```

## 2.3. Applying types to Refs
1. To use `refs` with Typescript, we need to specify the type of elements.
2. Besides, `useRef` isn't bundled to the element directly when the component initiates.
3. Therefore, `useRef` can take `null` when it starts which should be annotated.
4. In addition, to prevent assigning `undefined` to `useRef`, we can initiate the function with `null` value.
    ```tsx
    // src/refs/UserSearch.tsx
    import { useState, useRef } from 'react';

    const users = [
      { name: 'Sarah', age: 20 },
      { name: 'Alex', age: 20 },
      { name: 'Michael', age: 20 },
    ];

    const UserSearch: React.FC = () => {
      const inputRef = useRef<HTMLInputElement | null>(null);
      const [name, setName] = useState('');
      const [user, setUser] = useState<{ name: string; age: number } | undefined>();

      const onClick = () => {
        const foundUser = users.find((user) => user.name === name);
        setUser(foundUser);
      };

      return (
        <div>
          User Search
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={inputRef}
          />
          <button onClick={onClick}>Find User</button>
          <div>
            {user && user.name}
            {user && user.age}
          </div>
        </div>
      );
    };

    export default UserSearch;
    ```

## 2.4. More on Refs
1. Since `inputRef` isn't always bundled to the `input` element as the target, we need to do type check in the lifecycle hook to ensure that `useRef` has referred to the element.
2. In this case, we use `useEffect` with an empty array to run the callback once when the component initiates and "focus" on the input element automatically.
    ```tsx
    // src/refs/UserSearch.tsx
    import { useState, useRef, useEffect } from 'react';

    const users = [
      { name: 'Sarah', age: 20 },
      { name: 'Alex', age: 20 },
      { name: 'Michael', age: 20 },
    ];

    const UserSearch: React.FC = () => {
      const inputRef = useRef<HTMLInputElement | null>(null);
      const [name, setName] = useState('');
      const [user, setUser] = useState<{ name: string; age: number } | undefined>();

      useEffect(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, []);

      const onClick = () => {
        const foundUser = users.find((user) => user.name === name);
        setUser(foundUser);
      };

      return (
        <div>
          User Search
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={inputRef}
          />
          <button onClick={onClick}>Find User</button>
          <div>
            {user && user.name}
            {user && user.age}
          </div>
        </div>
      );
    };

    export default UserSearch;
    ```

# 3. Typescript with Redux
## 3.1. Project setup
```bash
npx create-react-app redux-ts --template typescript

npm install --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0
```

## 3.2. Redux store design
1. In a normal Redux project, it is worth the time to think about the design of the store before writing code
2. In a TS project, it's recommended to think about the design first.
3. The search endpoint we will use in the project is `registry.npmjs.org/-/v1/search?text=[search_term]`.
4. We can request to the endpoint with GET request with the search term in the query string.
5. The endpoint will return a result from the keyword with a JSON as response.
6. In this case, the Redux has 3 main parts (repositories)
   1. data - List of repositories from NPM
   2. loading - True/false whether we are fetching data
   3. error - String, error message if one occurred during fetch
7. Therefore, 3 actions will be aligned to the "states" of the fetching event.
   1. SearchRepositories
   2. SearchRepositoriesSuccess
   3. SearchRepositoriesError
8. For the project structure, we will have the followings in `src`
   1. components - `App.tsx` and `RepositoriesList.tsx`
   2. redux - a single `index.ts` as the entry point which includes 
      1. `reducers`
      2. `action creators`
      3. `middlewares`

## 3.3. Reducer setup
## 3.4. Annotating the return type
## 3.5. Typing an action
1. The following version of reducer has some issues taht the action isn't referring to the correct types.
2. The reducer can return any abritrary data which could be different from `RepositoriesState` interface.
3. Therefore, for the returned type on reducers, we can annotate to ensure that the reducer must return an object that has the same structure as `RepositoriesState`.
4. In addition, we can give `Action` types.
    ```ts
    // state/reducers/repositoriesReducer.ts
    interface RepositoriesState {
      loading: boolean;
      error: string | null;
      data: string[];
    }

    interface Action {
      type: string;
      payload?: any;
    }

    const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
      switch (action.type) {
        case 'search_repositories':
          return { loading: true, error: null, data: [] };
        case 'search_repositories_success':
          return { loading: false, error: null, data: action.payload };
        case 'search_repositories_error':
          return { loading: false, error: action.payload, data: [] };
        default:
          return state;
      }
    };

    export default reducer;
    ```

## 3.6. Separate interfaces for Actions
## 3.7. Applying action interfaces
## 3.8. Adding an action type enum
```ts
// src/state/reducers/repositoriesReducer.ts
interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
```

## 3.9. A better way to organize code
1. We can separate the `enum` for action types and `actions` into different folders.
2. We create another 2 folder `actions` and `action-types` in `state` folder which stores files for Redux.

## 3.10. Adding action creators
## 3.11. Adding request logic
## 3.12. Applying Typings to Dispatch
```ts
// src/state/action-creators/index.ts
import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
  // give dispatch type to ensure the payload type is correct
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};

export default searchRepositories;
```

## 3.13. Setting up exports
```ts
// src/state/reducers/index.ts
import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
```
```ts
// src/state/store.ts
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
```
```ts
// src/state/index.ts
export * from './store';
export * as actoinCreators from './action-creators';
```

## 3.14. Wiring up to React
```tsx
// src/components/App.tsx
import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
```
```tsx
// src/components/RepositoriesList.tsx
const RepositoriesList: React.FC = () => {
  return (
    <div>
      <form action=''>
        <input type='text' />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
```

## 3.15. Initial state
```ts
// src/state/reducers/repositoriesReducer.ts
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
```

## 3.16. Reminder on Event Types
```tsx
// src/components/RepositoriesList.tsx
import React, { useState } from 'react';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type='button'>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
```

## 3.17. Calling an action creator
```ts
// src/components/RepositoriesList.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(actionCreators.searchRepositories(term));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type='button'>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
```

## 3.18. Binding action creators
```ts
// src/hooks/useActions.ts
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
```
```tsx
// src/components/RepositoriesList.tsx
import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type='button'>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
```

## 3.19. Selecting state
1. To refer and check the states in redux store, we can use `useSelector` to check the states in the repositories.
2. However, the apporach isn't convenient, and there's a simpler syntax for the same purpose.
    ```tsx
    // src/components/RepositoriesList.tsx
    import React, { useState } from 'react';
    import { useSelector } from 'react-redux';
    import { useActions } from '../hooks/useActions';

    const RepositoriesList: React.FC = () => {
      const [term, setTerm] = useState('');
      const { searchRepositories } = useActions();
      const { data, error, loading } = useSelector(
        (state: any) => state.repositories
      );

      const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term);
      };

      return (
        <div>
          <form onSubmit={onSubmit}>
            <input
              type='text'
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type='button'>Search</button>
          </form>
        </div>
      );
    };

    export default RepositoriesList;
    ```

## 3.20. Awkward Typings around React-Redux
1. When using `useSelector` in the other components to refer to the states, the `state` has a specific type that we define in the reducers. 
2. We can create a custom type with `ReturnType` and export it in `src/state/index.ts` for the selectors to refer to the type.
    ```ts
    // src/state/reducers/index.ts
    import { combineReducers } from 'redux';
    import repositoriesReducer from './repositoriesReducer';

    const reducers = combineReducers({
      repositories: repositoriesReducer,
    });

    export default reducers;

    // to indicate the type should be the same as the reducers
    export type RootState = ReturnType<typeof reducers>;
    ```
    ```ts
    // src/state/index.ts
    export * from './store';
    export * as actionCreators from './action-creators';
    // export from src/state/index.ts
    export * from './reducers';
    ```

## 3.21. Creating a typed selector
```ts
// src/hooks/useTypedSelector.ts
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
```
```ts
// src/hooks/useTypedSelector.ts
import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
```

## 3.22. Consuming store state
```tsx
// src/components/RepositoriesList.tsx
import React, { useState } from 'react';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypeSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type='button'>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
```

# 4. Code Transpiling in the Browser
## 4.1. Transpiliing Options
1. There are 3 main challenges to work on for the online code editor in browser.
   1. Code will be provided to Preview as a string. We have to execute it safely.
   2. This code might have advanced JS syntax in it (like JSX) that your browser can't execute.
   3. The code might have important statements for other JS files or CSS. We have to deal with those import statements before executing the code.
2. We can check up [`Codepen`](https://codepen.io/) to transpile code from the user to execute safely in the environment.
3. The code from user will be sent to backend to get transpiled and sent back to the frontend.

## 4.2. Remote Transpiling
1. Besides sending and get code transpiled on the backend, we can use in-browser transpiler such as Babel.

## 4.3. Module Systems
1. Javascript modules are Javascript file that makes some values available to other files and/or cosumes values from other files.
    ```js
    // message.js
    export default 'Hello there!';

    // index.js
    import message from './message.js';
    console.log(message);
    ```
2. There are several different module systems.
   1. common js - `require` and `module.exports`
   2. ES Modules - `import` and `export`
3. By using Babel, the code in modern syntax such as "ES Modules" will be compiled to common js.
4. Besides, Babel can help bundling the code from different Javascript files to a single file containing both modules linked together in some way.

## 4.4. Behind the Scenes with Webpack
1. We firstly install 2 packages `npm install --save-exact webpack@5.11.1 webpack-cli@4.3.0`
2. Besides, we have a new command for npm scripts as `"build": "webpacke mode=development"` in `package.json`.
3. After executing webpack, we can find `dist` directory with a compiled code as `main.js` by default.
4. When we look into the code, we can notice that the required code is executed as a function by giving a file path. 
    ```js
    // src/message.js
    module.exports = 'Hello there!';

    // src/index.js
    const message = require('./message.js');
    console.log(message);
    ```

## 4.5. Webpack with ES Modules
## 4.6. One Small change
1. If we use ES module to import/export the code, the compiled result from webpack will be different.
2. Webpack will decide how the code will be compiled by looking into the syntax.
    ```js
    // src/message.js
    export default 'Hello there!';

    // src/index.js
    import message from './message.js';
    console.log(message);
    ```
3. The bundler will execute by the following orders
   1. Read the contents of the entry file (index.js)
   2. Automatically found all the different require/import/export statements
   3. Automatically found all the modules on our hard drives
   4. Linked these files together into a single output file with all values being correctly communicated around.
4. Therefore, we should configure the modules to get the code from NPM directly rather than local files.

## 4.7. Options for building
1. To access packages that aren't installed locally, we can use [npm-install-webpack-plugin](https://www.npmjs.com/package/npm-install-webpack-plugin) or [InstallWebpackPlugin](https://webpack.js.org/plugins/install-webpack-plugin/) to work with missing packages.

## 4.8. So which approach
1. Remote
   1. We can cache downloaded NPM modules to bundle code faster
   2. Will work better for users with slow devices or limited internet connections
2. Local
   1. Removes an extra request to the API server - faster code execution
   2. We don't have to maintain an API server
   3. Less complexity - no moving code back and forth
3. The lecture tried and tested both approaches and found the local approach has a better performance.
4. However, webpack doesn't work in the browsers.

## 4.9. A Webpack replacement
1. Webpack doesn't work in browsers. Therefore, we won't use both Babel and Webpack for the solution.
2. In this case we can use [ESBuild](https://esbuild.github.io/) to transpile and bundle the code all in browser.
