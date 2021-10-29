import {
  Route,
  Redirect
} from 'react-router-dom';

/**
 * Redirect users from auth pages to home page after login.
 */

 const AuthRoute = ({ component:Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routerProps  => (
          !isAuth
            ? <Component {...routerProps}/> : (
              <Redirect
                to={{
                  pathname: '/home',
                  state: { from: routerProps.location }
                }}
              />
            ))
      }
    />
  );
}

export default AuthRoute;