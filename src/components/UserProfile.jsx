import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { useRef, useState, useEffect } from 'react';
import UserService from '../services/UserService.js';

const UserProfile = () => {
    const [user,setUser] = useState({
        firstName:'',
        lastName:'',
        location:'',
        phoneNumber:'',
        email:'',
        password:''
    });
    const [confirmPassword,setConfirmPassword] = useState('');
    const [userId,setuserId] = useState('');

    useEffect(()=>{
        setuserId(window.sessionStorage.getItem("LoggedIn"));
        console.log(userId);
    },[]);    
    

    const   handleFirstName = (e) =>{
        setUser({firstName:e.target.value})
    }

    const handleLastName = (e) =>{
        setUser({lastName:e.target.value})
    }

    const  handleLocation = (e) =>{
        setUser({location:e.target.value})
    }

    const  handlePhoneNumber = (e) =>{
        setUser({phoneNumber:e.target.value})
    }

    const  handleEmail= (e) =>{
        setUser({email:e.target.value})
    }

    const  handlePassword= (e) =>{
        setUser({password:e.target.value})
    }

    const submitUpdateUser = (e) =>{
        e.preventDefault();

    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    return (
        <>
           <Card border="" style={{ width: '40rem', marginLeft: '30%', marginTop: '2%' }}>
                <Card.Header className="text-center"><span>Update User</span></Card.Header>
                <Card.Body>
                    <Form onSubmit={submitUpdateUser}>
                        <Form.Group className="mb-3" controlId="registerUserFName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required type="Text" placeholder="Enter First Name" value={user.firstName} onChange={handleFirstName} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserLName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required type="Text" placeholder="Enter Last Name" value={user.lastName} onChange={handleLastName}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control required type="Text" placeholder="Enter Location" value={user.location} onChange={handleLocation}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control required type="Text" placeholder="Enter Phone Number" value={user.phoneNumber} onChange={handlePhoneNumber}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" value={user.email} onChange={handleEmail}/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="registerUserPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" value={user.password} onChange={handlePassword}/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="registerUserConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control required type="password" placeholder="Confirm Password"value={user.password} onChange={handleConfirmPassword}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{float:'right',marginRight:'40%'}}>
                                Save
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default UserProfile;