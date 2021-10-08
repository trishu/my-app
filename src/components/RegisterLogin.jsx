import Login from "./Login";
import RegisterUser from "./RegisterUser";

const RegisterLogin = () => {
    return (<div>
        <RegisterUser/>
        <div style = {{height: '400px', borderRight: '1px solid #A9A9A9',position: 'absolute',right: '50%',marginTop:'3%'}}/>
        <Login/>
        
    </div>);
}

export default RegisterLogin;