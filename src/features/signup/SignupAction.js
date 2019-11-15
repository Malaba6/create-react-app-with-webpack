import axios from 'axios';
import * as actionTypes from './actionTypes';
import { toast } from 'react-toastify';

export const signupSuccess = (payload) => ({
    type: actionTypes.SIGNUP_SUCCESS,
    payload,
});

export const signupFail = (error) => ({
    type: actionTypes.SIGNUP_FAIL,
    error,
});

export const signup = (payload) => async (dispatch) => {
    try {
        const { data } = await axios.post('https://uninet-blogs-backend.herokuapp.com/api/v1/users/signup',
        payload);
        dispatch(signupSuccess(data.data));
    }catch (error) {
        dispatch(signupFail(error.response.data.error));
          toast.error(error.response.data.error, {
            position: toast.POSITION.TOP_CENTER
          });
    }
}