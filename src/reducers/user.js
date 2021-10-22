import {
    CREATE_USER,
    UPDATE_USER,
    RETRIEVE_USER,
    LOGIN_USER
} from '../actions/types'

const initialState = [];

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

        case LOGIN_USER:
            return payload;

        default:
            return users;
    }
}

export default userReducer;