import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { useRef, useState } from 'react';
import UserService from '../services/UserService.js';

const RegisterUser = () => {

    let enteredUser = {};
    const registerUserFName = useRef();
    const registerUserLName = useRef();
    const registerUserLocation = useRef();
    const registerUserPhone = useRef();
    const registerUserEmail = useRef();
    const registerUserPassword = useRef();
    const registerUserConfirmPassword = useRef();

    const [disable, setDisable] = useState(true);

    const matchPassword = () => {
        const pwd = registerUserPassword.current.value;
        const confPwd = registerUserConfirmPassword.current.value;
        if('undefined' !== pwd && 'undefined' !== confPwd && pwd===confPwd)
            setDisable(false);
    }

    const submitRegUser = (event) => {
        event.preventDefault();
        
        enteredUser = {
            firstName : registerUserFName.current.value,
            lastName : registerUserLName.current.value,
            location : registerUserLocation.current.value,
            phoneNumber : registerUserPhone.current.value,
            email : registerUserEmail.current.value,
            password : registerUserPassword.current.value
        };
        console.log(enteredUser);
        UserService.addUser(enteredUser);
    }

    return (
        <>
            <Card border="" style={{ width: '28rem', float: 'left', margin: '35px' }}>
                <Card.Header className="text-center"><span>Register User</span></Card.Header>
                <Card.Body>
                    <Form onSubmit={submitRegUser}>
                        <Form.Group className="mb-3" controlId="registerUserFName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="Text" placeholder="Enter First Name" ref={registerUserFName}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserLName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="Text" placeholder="Enter Last Name" ref={registerUserLName}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="Text" placeholder="Enter Location" ref={registerUserLocation}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="Text" placeholder="Enter Phone Number" ref={registerUserPhone}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={registerUserEmail}/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="registerUserPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={registerUserPassword}/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="registerUserConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" ref={registerUserConfirmPassword} onChange={matchPassword}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={disable}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}
export default RegisterUser