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
