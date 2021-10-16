import {BrowserRouter, Route, Switch} from 'react-router-dom'
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


const Routes = () => {

    return(
        <>
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" component={HomePage}></Route> */}
                <Route path="/home" component={HomePage}></Route>
                <Route path="/product" component={Product}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/register-login" component={RegisterLogin}></Route>
                <Route path="/logout" component={Logout}></Route>
                <Route path="/userProfile" component={UserProfile}></Route>
                <Route path="/topProducts" component={TopProducts}></Route>
                <Route path="/updateProduct" component={UpdateProduct}></Route>
                <Route path="/addProduct" component={AddProduct}></Route>
                <Route path="/productDetail" component={ProductDetail}></Route>
            </Switch>
        </BrowserRouter>
        </>
    );

}

export default Routes;