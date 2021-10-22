import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { useState} from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import {userLogin} from '../actions/user'

const Login = () => {
    const [userLogged, setUserLogged] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setloginError] = useState();
    const history =useHistory();
    const dispatch =useDispatch();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const loginUser = async (e) => {
        e.preventDefault();
        setloginError();
        
        if (email.length !== 0 && password.length !== 0) {
            const user = {
                "email": email,
                "password": password
            }
            let data = await dispatch(userLogin(user.email,user.password));
            console.log(data);
            if (data.length !== 0) {
                setUserLogged(data);
                console.log(userLogged);
                history.push('/product')
            }
            else {
                setloginError("Incorrect Email or Password. Please try again");
            }
        }
        else if(email.length === 0 && password.length !== 0){
            setloginError("Enter Email Address");
        }
        else if(password.length === 0 && email.length !== 0){
            setloginError("Enter Password");
        }
        else {
            setloginError("Enter Email Address and password");
        }
    }

    return (
        <>
            <Card border="" style={{ width: '28rem', float: 'right', margin: '35px' }}>
                <Card.Header className="text-center"><span>Login</span></Card.Header>
                <Card.Body>
                    <div id="loginErr" style={{ color: 'red' }}>{loginError} </div>
                    <Form onSubmit={loginUser}>
                        <Form.Group className="mb-3" controlId="loginEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" onChange={handleEmailChange} />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="loginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" onChange={handlePasswordChange} />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );

}
export default Login