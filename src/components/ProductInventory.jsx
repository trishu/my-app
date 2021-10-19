import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Routes from '../Routes'

const ProductInventory = () => {
    const [islogged, setIslogged] = useState(false);
    useEffect(() => {
        const loggedInUser = window.sessionStorage.getItem("LoggedIn");
        if (loggedInUser) {
            setIslogged(loggedInUser);
        }
    },[]);


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
                        {(!islogged) ? <Nav.Link href="/register-login">Register/Login</Nav.Link> : null}
                        {(islogged) ? <Nav.Link href="/userProfile">My Profile</Nav.Link> : null}
                        {(islogged) ? <Nav.Link href="/logout"
                            onClick={() => {
                                window.sessionStorage.removeItem("LoggedIn");
                                window.sessionStorage.removeItem("user id");
                            }}>Logout</Nav.Link> : null}
                    </Nav>
                </Container>
            </Navbar>

            <Routes />

        </>
    );
}

export default ProductInventory;