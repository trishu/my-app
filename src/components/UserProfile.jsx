import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { retriveUser, updateUser } from '../actions/user'


const UserProfile = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        location: '',
        phoneNumber: '',
        email: '',
        password: '',
        id: ''
    });
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userId, setuserId] = useState(0);
    const [updateUserError, setUpdateUserError] = useState('');
    const [updateUserSucess, setUpdateUserSucess] = useState('');


    let uId = useSelector((users) => users.userReducer.id);
    let dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const data = await dispatch(retriveUser(uId));
            console.log(data);
            if (data && data !== 'null' && data !== 'undefined') {
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setLocation(data.location);
                setPhoneNumber(data.phoneNumber);
                setEmail(data.email);
                setPassword(data.password);
                setuserId(data.id);
                setConfirmPassword(data.password);
            }
        })();

    }, []);



    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);

    }

    const submitUpdateUser = async (e) => {
        e.preventDefault();
        setUpdateUserSucess();
        setUpdateUserError();
        if (password !== confirmPassword) {

            setUpdateUserError('Password and Confirmation Password doesnot Match');
        }

        if ((firstName && firstName !== undefined && firstName.trim() !== '') ||
            (lastName && lastName !== undefined && lastName.trim() !== '') ||
            (location && location !== undefined && location.trim() !== '') ||
            (phoneNumber && phoneNumber !== undefined && phoneNumber.trim() !== '') ||
            (email && email !== undefined && email.trim() !== '') ||
            (password && password !== undefined && password !== '' && password === confirmPassword) ||
            (confirmPassword && confirmPassword !== undefined && confirmPassword.trim() !== '')) {
            const user = {
                "firstName": firstName,
                "lastName": lastName,
                "location": location,
                "phoneNumber": phoneNumber,
                "email": email,
                "password": password,
                "id": userId
            }

            let data = await dispatch(updateUser(userId, user));
            if (data.length !== 0) {
                console.log(data);
                setUpdateUserSucess('User has been Updated Sucessfully');
                setUpdateUserError();
            }
            else {

                setUpdateUserError("User Update Operation failed. Please try again");
            }
        }
        else {

            setUpdateUserError('Every Field is a Required Field. Please Enter');
        }


    }



    return (
        <>
            <Card border="" style={{ width: '40rem', marginLeft: '30%', marginTop: '2%' }}>
                <Card.Header className="text-center"><span>Update User</span></Card.Header>
                <Card.Body>
                    <div id="UpdateUserErr" style={{ color: 'red' }}>{updateUserError} </div>
                    <div id="UpdateUserSucess" style={{ color: 'green' }}>{updateUserSucess} </div>
                    <Form onSubmit={submitUpdateUser}>
                        <Form.Group className="mb-3" controlId="registerUserFName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required type="Text" placeholder="Enter First Name" value={firstName} onChange={handleFirstName} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserLName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required type="Text" placeholder="Enter Last Name" value={lastName} onChange={handleLastName} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control required type="Text" placeholder="Enter Location" value={location} onChange={handleLocation} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control required type="Text" placeholder="Enter Phone Number" value={phoneNumber} onChange={handlePhoneNumber} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerUserEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" value={email} onChange={handleEmail} />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="registerUserPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" value={password} onChange={handlePassword} />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="registerUserConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control required type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPassword} />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ float: 'right', marginRight: '40%' }}>
                            Save
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default UserProfile;