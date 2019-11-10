import React from 'react';
import LoginScreen from './app/login/login';
import PrivateRoute from './app/common/privateroute';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './app/dashboard/dashboard';
import Welcome from './app/welcome/welcome';

class App extends React.Component {
  render() {  
    return (
      <Router>
        <Switch>
          {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" component = {Dashboard} />
          <Route exact path="/Welcome" component = {Welcome} />
          {/* <Route exact path="/launch" component={LoadingScreen} /> */}
          {/* <PrivateRoute exact roles={["admin"]} path="/users" component={UserGrid} /> */}
          {/* <Route path="*" component={ErrorPage} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
