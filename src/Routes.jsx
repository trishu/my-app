import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import Product from './components/Product'
import About from './components/About'
import RegisterLogin from './components/RegisterLogin'
import Logout from './components/Logout'
import ProductDetail from './components/ProductDetail'


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
                <Route exact path="/ProductDetail" component={ProductDetail}></Route>
            </Switch>
        </BrowserRouter>
        </>
    );

}

export default Routes;