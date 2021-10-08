import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

const Login = () => {
    return (
        <>
            <Card border="" style={{ width: '28rem', float: 'right', margin: '35px' }}>
                <Card.Header className="text-center"><span>Login</span></Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="loginEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="loginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );

}
export default Login