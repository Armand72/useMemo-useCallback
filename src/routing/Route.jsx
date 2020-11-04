import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Homepage} />

      {/* <PrivateRoute
          exact
          path="/dashboard/:idUser/chat/chatRoom/:idChild"
          component={ChatRoom}
        ></PrivateRoute> */}
    </Switch>
  </>
);

export default Routes;
