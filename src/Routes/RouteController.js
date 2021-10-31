import React from 'react'
import { Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute'
import PageNotFound from '../components/PageNotFound'
/*
1) Public Routes: These are routes which are accessible to both guest and logged in users. 
Example: Landing Page, Privacy Policy etc.
2) Authenticated routes: These are routes which are accessible by guest users mainly for account creation or login. 
These shouldn’t be accessible for logged in users. Example: Login, Sign Up, Forgot Password
3) Protected Routes: These are routes which are accessible only for logged in users.
 If the user is logged in, go on and display the component in question; otherwise, 
 redirect the user to sign-in page. 
*/

const paths = [ "/home" ,"/product","/about","/register-login","/logout","/userProfile","/topProducts","/updateProduct","/addProduct","/productDetail"];

const RouteController = (props) => {
  const { routeType, ...routeProps  } = props
//     const matchString = () =>{
//     for (let j=0; j<paths.length; j++) {
//         if (!(paths[j].match(routeProps.path)))
//         {
//           routeProps.component={PageNotFound};
//         }
//     }
// }
  return (
    <>
      {routeType === 'public' && <Route{...routeProps}/>}
      {(routeType === 'protected') && (<ProtectedRoute {...routeProps} />)}
      {(routeType === 'auth') && (<AuthRoute {...routeProps} />)}
    </>
  )
}
export default RouteController