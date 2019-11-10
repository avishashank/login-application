import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import ErrorPage from './error-page';
import LoadingScreen from './loading';

class PrivateRoute extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: null,
      userLoaded: false
    }
  }

  componentDidMount () {

  }

  render () {
    const { component: Component, ...rest } = this.props;
    const {user} = this.state;
    if (this.state.userLoaded) {
      return <Route
      {...rest}
      render={props => {
          if (user) {
            if (!rest.roles || (user.roles.filter(role => rest.roles.indexOf(role) !== -1)).length) {
              return <Component user={user} {...props} />;
            } else {
              return <ErrorPage {...props}/>
            }
          } else {
              return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          }
      }}
    />
    } else {
      return <LoadingScreen />
    }
  }
}

export default PrivateRoute