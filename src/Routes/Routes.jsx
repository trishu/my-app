import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import HomePage from '../components/HomePage'
// import Product from '../components/Product'
// import About from '../components/About'
// import RegisterLogin from '../components/RegisterLogin'
// import Logout from '../components/Logout'
// import ProductDetail from '../components/ProductDetail'
// import AddProduct from '../components/AddProduct'
// import TopProducts from '../components/TopProducts'
// import UpdateProduct from '../components/UpdateProduct'
// import UserProfile from '../components/UserProfile'
import PageNotFound from '../components/PageNotFound'
import LoadingScreen from '../components/LoadingScreen'
import { useSelector } from 'react-redux';
import RouteController from './RouteController'
import { lazy, Suspense } from 'react';



// const Routes = () => {

//     return (
//         <>
//                 <Switch>
//                     {/* default Routing to homepage  */}
//                     <Route exact path="/">
//                         <Redirect to="/home" />
//                     </Route>
//                     <Route exact path="/home" component={HomePage}></Route>
//                     <Route exact path="/product" component={Product}></Route>
//                     <Route exact path="/about" component={About}></Route>
//                     <Route exact path="/register-login" component={RegisterLogin}></Route>
//                     <Route exact path="/logout" component={Logout}></Route>
//                     <Route exact path="/userProfile" component={UserProfile}></Route>
//                     <Route exact path="/topProducts" component={TopProducts}></Route>
//                     <Route exact path="/updateProduct" component={UpdateProduct}></Route>
//                     <Route exact path="/addProduct" component={AddProduct}></Route>
//                     <Route exact path="/productDetail" component={ProductDetail}></Route>
//                     {/* page not found for the path */}
//                     <Route component={PageNotFound}></Route>
//                 </Switch>
//         </>
//     );

// }
const homePage =  lazy(() => import('../components/HomePage'));
const product  =  lazy(() => import( '../components/Product'));
const about  =  lazy(() => import( '../components/About'));
const registerLogin  =  lazy(() => import('../components/RegisterLogin'));
const logout  =  lazy(() => import('../components/Logout'));
const productDetail  =  lazy(() => import( '../components/ProductDetail'));
const addProduct  =  lazy(() => import('../components/AddProduct'));
const topProducts  =  lazy(() => import( '../components/TopProducts'));
const updateProduct  =  lazy(() => import( '../components/UpdateProduct'));
const userProfile  =  lazy(() => import('../components/UserProfile'));
const pageNotFound =  lazy(() => import( '../components/PageNotFound'));


const Routes = () => {
    const isAuth = useSelector((users) =>users.userReducer.isLoggedIn);

    return (
        <>
        <Suspense fallback={<LoadingScreen />}>
            <RouteController
                routeType={'public'}
                isAuth={isAuth}
                component={homePage}
                path={'/'}
                exact
            />
            <RouteController
                routeType={'public'}
                isAuth={isAuth}
                component={homePage}
                path={'/home'}
                exact
            />
            <RouteController
                routeType={'public'}
                isAuth={isAuth}
                component={product}
                path={'/product'}
                exact
            />
            <RouteController
                routeType={'public'}
                isAuth={isAuth}
                component={about}
                path={'/about'}
                exact
            />
            <RouteController
                routeType={'auth'}
                isAuth={isAuth}
                component={registerLogin}
                path={'/register-login'}
                exact
            />
            <RouteController
                routeType={'protected'}
                isAuth={isAuth}
                component={logout}
                path={'/logout'}
                exact
            />

            <RouteController
                routeType={'protected'}
                isAuth={isAuth}
                component={userProfile}
                path={'/userProfile'}
                exact
            />

            <RouteController
                routeType={'public'}
                isAuth={isAuth}
                component={topProducts}
                path={'/topProducts'}
                exact
            />

            <RouteController
                routeType={'protected'}
                isAuth={isAuth}
                component={updateProduct}
                path={'/updateProduct'}
                exact
            />
            <RouteController
                routeType={'protected'}
                isAuth={isAuth}
                component={addProduct}
                path={'/addProduct'}
                exact
            />

            <RouteController
                routeType={'protected'}
                isAuth={isAuth}
                component={productDetail}
                path={'/productDetail'}
                exact
            />
            {/* <RouteController
                routeType={'public'}
                isAuth={isAuth}
                component={pageNotFound}
                path={'*'}
                exact 
            /> */}
            {/* <Route path="*">
            <PageNotFound />
          </Route>  */}
        </Suspense>
        
        </>
    );
}


export default Routes;