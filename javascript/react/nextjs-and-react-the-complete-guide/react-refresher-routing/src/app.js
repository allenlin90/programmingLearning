import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/all-meetups';
import NewMeetupPage from './pages/new-meetup';
import FavoritesPage from './pages/favorites';
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
