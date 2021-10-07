import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import Product from './components/Product'
import About from './components/About'
import RegisterLogin from './components/RegisterLogin'


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
            </Switch>
        </BrowserRouter>
        </>
    );

}

export default Routes;