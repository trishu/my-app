import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

const RegisterUser = () => {
    return (
        <>
            <Card border="" style={{ width: '28rem', float: 'left', margin: '35px' }}>
                <Card.Header className="text-center"><span>Register User</span></Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="registerUserName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="Text" placeholder="Enter Full Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="registerUserSPassword">
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
export default RegisterUser