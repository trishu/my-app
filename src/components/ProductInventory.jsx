
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Routes from '../Routes';
import { useDispatch } from 'react-redux';
import {logoutUser} from '../actions/user'
import { Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'


const ProductInventory = () => {

    const isLoggedIn = useSelector((users) =>users.userReducer.isLoggedIn);
    let dispatch = useDispatch();

    return (
        <>

            <Navbar bg="dark" variant="dark">
                <Container>
                    
                    <Navbar.Brand as={Link} to="/home">Product Inventory System</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/product">Product</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        {(!isLoggedIn) ? <Nav.Link as={Link} to="/register-login">Register/Login</Nav.Link> : null}
                        {(isLoggedIn) ? <Nav.Link as={Link} to="/userProfile">My Profile</Nav.Link> : null}
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