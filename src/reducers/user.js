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
            return payload;

        case UPDATE_USER:
            return users.map((u) => {
                if (u.id === payload.id) {
                    u.firstName =payload.firstName;
                    u.lastName=payload.lastName ;
                    u.location=payload.location ;
                    u.phoneNumber=payload.phoneNumber ;
                    u.email=payload.email ;
                    u.password=payload.password;
                }
                return users;
            })

        case RETRIEVE_USER:
            return users;

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

        default:
            return users;
    }
}

export default userReducer;