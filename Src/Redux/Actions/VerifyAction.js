import * as ActionTypes from '../Actions/ActionTypes';
import { AuthBaseUrl } from '../API/AuthBaseUrl';
import axios from "axios"


export const postVerify = (email, verification_code) => async dispatch => {
    dispatch({ type: ActionTypes.VERIFY_REQUEST });
    try {
        const response = await axios.post(AuthBaseUrl + 'activate', {
            email: email,
            verification_code: verification_code,
        });
        const VerifyState = response.data.value ? true : false;  // To Check if successfully Verifed or not 
        dispatch({ type: ActionTypes.VERIFY_SUCCESS, payload: VerifyState });
    } catch (error) {
        console.log(error);
        dispatch({ type: ActionTypes.VERIFY_FAILURE, payload: error });
    }
};

export const postResendCode = (email) => async dispatch => {
    dispatch({ type: ActionTypes.RESEND_CODE_REQUEST });
    try {
        const response = await axios.post(AuthBaseUrl + 'resend_code', {
            email: email,
        });
        const Sent = response.data.status ? true : false;  // To Check if successfully Verifed or not 
        console.log(response);
        dispatch({ type: ActionTypes.RESEND_CODE_SUCCESS, payload: Sent });
    } catch (error) {
        console.log(error);
        dispatch({ type: ActionTypes.RESEND_CODE_FAILURE, payload: error });
    }
};