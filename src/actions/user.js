import {
    CREATE_USER,
    UPDATE_USER,
    RETRIEVE_USER,
    LOGIN_USER,
    LOGOUT_USER
} from './types'

import UserService from '../services/UserService';

export const createUser = (user) => async (dispatch) => {
    try {
        const res = await UserService.create(user);
        dispatch({
            type: CREATE_USER,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const retriveUser = (id) => async (dispatch) => {
    try {
        const res = await UserService.get(id);
        dispatch({
            type: RETRIEVE_USER,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const updateUser = (id, data) => async (dispatch) => {
    try {
        const res = await UserService.update(id, data);
        dispatch({
            type: UPDATE_USER,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const userLogin = (email,Password) => async (dispatch) => {
    try {
        const res = await UserService.findByEmailPassword(email, Password);
        dispatch({
            type: LOGIN_USER,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}


export const logoutUser = () => async (dispatch) => {
    try {

      dispatch({
        type: LOGOUT_USER,
        payload:{},
      });
    } catch (err) {
      console.log(err);
    }
  }