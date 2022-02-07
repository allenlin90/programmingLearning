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
