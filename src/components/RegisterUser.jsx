import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { useRef, useState } from 'react';
import UserService from '../services/UserService.js';
import { useDispatch } from 'react-redux';
import {createUser} from '../actions/user'

const RegisterUser = () => {

    let enteredUser = {};
    const registerUserFName = useRef();
    const registerUserLName = useRef();
    const registerUserLocation = useRef();
    const registerUserPhone = useRef();
    const registerUserEmail = useRef();
    const registerUserPassword = useRef();
    const registerUserConfirmPassword = useRef();
    let dispatch = useDispatch();
    const [displaySucessError, setdisplaySucessError] = useState();
    const [divStyle, setdivStyle] = useState({});
 

    const [disable, setDisable] = useState(true);

    const matchPassword = () => {
        const pwd = registerUserPassword.current.value;
        const confPwd = registerUserConfirmPassword.current.value;
        if('undefined' !== pwd && 'undefined' !== confPwd && pwd===confPwd)
            setDisable(false);
    }

    const submitRegUser = async (event) => {
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
        const user = await dispatch(createUser(enteredUser));
        if(user && user !== 'null' && user !== 'undefined'){
            console.log("sucess");
            setdisplaySucessError("User Created Sucessfully. Please login to continue");
            setdivStyle({color: 'Green', fontFamily: 'cursive' });
            document.getElementById("createUserForm").reset();
        }
        else{
            console.log("Fail");
            setdisplaySucessError("User Creation Failed.. please try again after some time ");
            setdivStyle({ color: 'Red',fontFamily: 'fantasy'});
        }

    }
    const checkUserCreationSucess =(user) =>{

    }

    return (
        <>
            <Card border="" style={{ width: '28rem', float: 'left', margin: '35px' }}>
                <Card.Header className="text-center"><span>Register User</span></Card.Header>
                <Card.Body>
                <div id="loginSucess" style={divStyle}>{displaySucessError}</div>

                    <Form id = "createUserForm" onSubmit={submitRegUser}>
                        <Form.Group className="mb-3" controlId="registerUserFName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required type="Text" placeholder="Enter First Name" ref={registerUserFName}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserLName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required type="Text" placeholder="Enter Last Name" ref={registerUserLName}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control required type="Text" placeholder="Enter Location" ref={registerUserLocation}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control required type="Text" placeholder="Enter Phone Number" ref={registerUserPhone}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" ref={registerUserEmail}/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="registerUserPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" ref={registerUserPassword}/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="registerUserConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control required type="password" placeholder="Confirm Password" ref={registerUserConfirmPassword} onChange={matchPassword}/>
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