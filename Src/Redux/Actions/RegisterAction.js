import * as ActionTypes from '../Actions/ActionTypes';
import { AuthBaseUrl } from '../API/AuthBaseUrl';
import axios from "axios"


export const postRegister = (name, email, address, phone, password) => async dispatch => {
    dispatch({ type: ActionTypes.REGISTER_REQUEST });
    try {
        const response = await axios.post(AuthBaseUrl + 'register', {
            name: name,
            email: email,
            address: address,
            phone: phone,
            password: password
        });
        const RegisterState = response.data.value ? true : false;  // To Check if successfully Registerd or not 
        const RegisterData = response.data;
        const Data = {
            RegisterState: RegisterState,
            RegisterData: RegisterData
        }
        dispatch({ type: ActionTypes.REGISTER_SUCCESS, payload: Data });
    } catch (error) {
        console.log(error);
        dispatch({ type: ActionTypes.REGISTER_FAILURE, payload: error });
    }
};