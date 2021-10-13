import { Navbar, Nav, Container} from 'react-bootstrap';

import Routes from '../Routes'

const ProductInventory = () => {
 
    return (
        <>
            
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Product Inventory System</Navbar.Brand>
                    <Nav className="me-auto">
                        
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/product">Product</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/register-login" className="floatRight">Register/Login</Nav.Link>
                        <Nav.Link href="/logout" className="floatRight">Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes/>

        </>
    );
}

export default ProductInventory;