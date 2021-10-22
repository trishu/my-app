
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Routes from '../Routes';
import { useDispatch } from 'react-redux';
import {logoutUser} from '../actions/user'


const ProductInventory = () => {

    const isLoggedIn = useSelector((users) =>users.userReducer.isLoggedIn);
    let dispatch = useDispatch();

    return (
        <>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Product Inventory System</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/product">Product</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        {(!isLoggedIn) ? <Nav.Link href="/register-login">Register/Login</Nav.Link> : null}
                        {(isLoggedIn) ? <Nav.Link href="/userProfile">My Profile</Nav.Link> : null}
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