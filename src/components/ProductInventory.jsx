
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Routes from '../Routes/Routes';
import { useDispatch } from 'react-redux';
import {logoutUser} from '../actions/user'
import { Link } from 'react-router-dom';
import './ProductInventory.css'
import {useLocation} from "react-router-dom";

const ProductInventory = () => {
    const location = useLocation();
    const isLoggedIn = useSelector((users) =>users.userReducer.isLoggedIn);
    let dispatch = useDispatch();
    console.warn(location.pathname);

    return (
        <>

            <Navbar bg="dark" variant="dark">
                <Container>
                    
                    <Navbar.Brand as={Link} to="/home">Product Inventory System</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link as={Link} to="/home" className={location.pathname==='/home'?'active':''}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/product" className={location.pathname==='/product'?'active':''}>Product</Nav.Link>
                        <Nav.Link as={Link} to="/about" className={location.pathname==='/about'?'active':''}>About</Nav.Link>
                    </Nav>
                    <Nav>
                        {(!isLoggedIn) ? <Nav.Link as={Link} to="/register-login" className={location.pathname==='/register-login'?'active':''}>Register/Login</Nav.Link> : null}
                        {(isLoggedIn) ? <Nav.Link as={Link} to="/userProfile" className={location.pathname==='/userProfile'?'active':''}>My Profile</Nav.Link> : null}
                        {(isLoggedIn) ? <Nav.Link href="/logout"
                            onClick={() => {
                                dispatch(logoutUser());
                            }}>Logout</Nav.Link> : null}
                    </Nav>
                </Container>
            </Navbar> 
            <Routes />

        </>
    );
}

export default ProductInventory;