import { useState } from 'react';
import { useHistory } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const inputHandler = (event) => {
        if(event.target.name === "email"){
            setEmail(event.target.value);
        }            
        if(event.target.name === "password"){
            setPassword(event.target.value);
        }  
    }

    const loginHandler = (event) => {
        event.preventDefault();
        console.log(email+" "+password);
        //logic for checking entered details from DB.

        sessionStorage.setItem("isLoggedIn", true);
        history.push("/home");
    }


    return (
        <>
            <Card border="" style={{ width: '28rem', float: 'right', margin: '35px' }}>
                <Card.Header className="text-center"><span>Login</span></Card.Header>
                <Card.Body>
                    <Form onSubmit={loginHandler}>
                        <Form.Group className="mb-3" controlId="loginEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={inputHandler} name="email"/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="loginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={inputHandler} name="password"/>
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