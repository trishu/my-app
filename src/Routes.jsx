import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'
import HomePage from './components/HomePage'
import Product from './components/Product'
import About from './components/About'
import RegisterLogin from './components/RegisterLogin'
import Logout from './components/Logout'
import ProductDetail from './components/ProductDetail'
import AddProduct from './components/AddProduct'
import TopProducts from './components/TopProducts'
import UpdateProduct from './components/UpdateProduct'
import UserProfile from './components/UserProfile'
import PageNotFound from './components/PageNotFound'


const Routes = () => {

    return (
        <>
                <Switch>
                    {/* default Routing to homepage  */}
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route exact path="/home" component={HomePage}></Route>
                    <Route exact path="/product" component={Product}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/register-login" component={RegisterLogin}></Route>
                    <Route exact path="/logout" component={Logout}></Route>
                    <Route exact path="/userProfile" component={UserProfile}></Route>
                    <Route exact path="/topProducts" component={TopProducts}></Route>
                    <Route exact path="/updateProduct" component={UpdateProduct}></Route>
                    <Route exact path="/addProduct" component={AddProduct}></Route>
                    <Route exact path="/productDetail" component={ProductDetail}></Route>
                    {/* page not found for the path */}
                    <Route component={PageNotFound}></Route>
                </Switch>
        </>
    );

}

export default Routes;