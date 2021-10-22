import {
    CREATE_USER,
    UPDATE_USER,
    RETRIEVE_USER,
    LOGIN_USER,
    LOGOUT_USER
} from '../actions/types'

const initialState = {
    firstName: "",
    lastName: "",
    location: "",
    phoneNumber: "",
    email: "",
    password: "",
    id:0,
    isLoggedIn:false 
};


const userReducer = (users = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case CREATE_USER:
            return [...users, payload];

        case UPDATE_USER:
            return users.map((user) => {
                if (user.id === payload.id) {
                    return { ...user, ...payload }
                }
                return users;
            })

        case RETRIEVE_USER:
            return payload;

        case LOGOUT_USER:
                users = initialState
                return users;
            

        case LOGIN_USER:
            console.log("login user payload"+payload);
            payload.map((data)=>{
                users.firstName=data.firstName;
                users.lastName=data.lastName;
                users.email=data.email;
                users.password=data.password;
                users.location=data.location
                users.phoneNumber=data.phoneNumber;
                users.id=data.id;
                users.isLoggedIn=true;
                return users;
            })
            return users;
           break; 

        default:
            return users;
    }
}

export default userReducer;