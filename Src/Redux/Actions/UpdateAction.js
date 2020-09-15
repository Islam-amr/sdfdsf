import * as ActionTypes from '../Actions/ActionTypes';
import { Update } from '../API/AuthBaseUrl';
import axios from "axios"


export const postUpdate = (token, data) => async dispatch => {
    let Token = token;
    dispatch({ type: ActionTypes.UPDATE_REQUEST });
    try {
        const response = await axios.post(Update, data, { headers: { Authorization: 'Bearer ' + Token } });
        const UpdateState = response.data.value ? true : false;  // To Check if successfully logged in or not 
        const UpdateError = response.data.msg;
        const UserData = response.data.data;  // to return Data if successfully logged in
        const Data = {
            UpdateState: UpdateState,  // Declare UpdateState to be dispatched
            UpdateError: UpdateError,
            UserData: UserData,
        }
        dispatch({ type: ActionTypes.UPDATE_SUCCESS, payload: Data });
    } catch (error) {
        console.log(error);
        dispatch({ type: ActionTypes.UPDATE_FAILURE, payload: error });
    }
};