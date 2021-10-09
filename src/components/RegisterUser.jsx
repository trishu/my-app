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
                        <Form.Group className="mb-3" controlId="registerUserFName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="Text" placeholder="Enter First Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserLName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="Text" placeholder="Enter Last Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="Text" placeholder="Enter Location" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="Text" placeholder="Enter Phone Number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="registerUserPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="registerUserConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="confirmPassword" placeholder="Confirm Password" />
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