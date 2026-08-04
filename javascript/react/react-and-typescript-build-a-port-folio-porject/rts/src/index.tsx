import ReactDOM from 'react-dom';
import GuestList from './state/guest-list';
// import UserSearch from './state/user-search';
import UserSearch from './refs/user-search';
import EventComponent from './events/event-component';

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
