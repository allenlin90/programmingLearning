import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Calendar } from '../appointments/calendar';
import { AllStaff } from '../staff/all-staff';
import { Treatments } from '../treatments/treatments';
import { Signin } from '../user/signin';
import { UserProfile } from '../user/user-profile';
import { Home } from './home';

export function Routes(): ReactElement {
  return (
    <Switch>
      <Route path="/Staff" component={AllStaff} />
      <Route path="/Calendar" component={Calendar} />
      <Route path="/Treatments" component={Treatments} />
      <Route path="/signin" component={Signin} />
      <Route path="/user/:id" component={UserProfile} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
