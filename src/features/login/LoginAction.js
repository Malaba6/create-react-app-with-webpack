import axios from 'axios';
import * as actionTypes from './actionTypes';
import { toast } from 'react-toastify';

export const loginSuccess = (payload) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload,
});

export const loginFail = (error) => ({
    type: actionTypes.LOGIN_FAIL,
    error,
});

export const login = (payload) => async (dispatch) => {
    try {
        const { data } = await axios.post('https://uninet-blogs-backend.herokuapp.com/api/v1/users/login',
        payload);
        dispatch(loginSuccess(data.data));
    }catch (error) {
        dispatch(loginFail(error.response.data.error));
          toast.error(error.response.data.error, {
            position: toast.POSITION.TOP_CENTER
          });
    }
}