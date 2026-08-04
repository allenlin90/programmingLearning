import { UserList } from './views/user-list';
import { Collection } from './models/collection';
import { User, UserProps } from './models/user';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.querySelector('#root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
