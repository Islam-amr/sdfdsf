import * as ActionTypes from '../Actions/ActionTypes';
import { AddOrder } from '../API/AuthBaseUrl';
import { GetOrder } from '../API/AuthBaseUrl';

import axios from "axios"

// Post Consult Order
export const postConsultOrder = (token, data) => async dispatch => {
    let Token = token;
    dispatch({ type: ActionTypes.CONSULT_ORDER_REQUEST });
    try {
        const response = await axios.post(AddOrder, data, { headers: { Authorization: 'Bearer ' + Token } });
        const Data = response.data  // To Check if successfully logged in or not 
        console.log(Data);
        dispatch({ type: ActionTypes.CONSULT_ORDER_SUCCESS, payload: Data.data });
    } catch (error) {
        console.log(error);
        dispatch({ type: ActionTypes.CONSULT_ORDER_FAILURE, payload: error });
    }
};

// Fetch Consult Order
export const fetchConsultOrder = (token) => async dispatch => {
    let Token = token;
    dispatch({ type: ActionTypes.CONSULT_ORDER_FETCH });
    try {
        const response = await axios.get(GetOrder + 'consultation', { headers: { Authorization: 'Bearer ' + Token } });
        const Data = response.data.data.orders  // To Check if successfully logged in or not 
        console.log(Data);
        dispatch({ type: ActionTypes.CONSULT_ORDER_POST, payload: Data });
    } catch (error) {
        console.log(error);
        dispatch({ type: ActionTypes.CONSULT_ORDER_FETCH_FAILURE, payload: error });
    }
};


// Post Special Order
export const postSpecialOrder = (token, data) => async dispatch => {
    let Token = token;
    dispatch({ type: ActionTypes.SPECIAL_ORDER_REQUEST });
    try {
        const response = await axios.post(AddOrder, data, { headers: { Authorization: 'Bearer ' + Token } });
        const Data = response.data  // To Check if successfully logged in or not 
        console.log(Data);
        dispatch({ type: ActionTypes.SPECIAL_ORDER_SUCCESS, payload: Data.data });
    } catch (error) {
        console.log(error);
        dispatch({ type: ActionTypes.SPECIAL_ORDER_FAILURE, payload: error });
    }
};

// Fetch Special Order
export const fetchSpecialOrder = (token) => async dispatch => {
    let Token = token;
    dispatch({ type: ActionTypes.SPECIAL_ORDER_FETCH });
    try {
        const response = await axios.get(GetOrder + 'special', { headers: { Authorization: 'Bearer ' + Token } });
        const Data = response.data.data.orders  // To Check if successfully logged in or not 
        console.log(Data);
        dispatch({ type: ActionTypes.SPECIAL_ORDER_POST, payload: Data });
    } catch (error) {
        console.log(error);
        dispatch({ type: ActionTypes.SPECIAL_ORDER_FETCH_FAILURE, payload: error });
    }
};

// Post Contract Order
export const postContractOrder = (token, data) => async dispatch => {
    let Token = token;
    dispatch({ type: ActionTypes.CONTRACT_ORDER_REQUEST });
    try {
        const response = await axios.post(AddOrder, data, { headers: { Authorization: 'Bearer ' + Token } });
        const Data = response.data  // To Check if successfully logged in or not 
        console.log(Data);
        console.log('it works');
        dispatch({ type: ActionTypes.CONTRACT_ORDER_SUCCESS, payload: Data.data });
    } catch (error) {
        console.log(error);
        dispatch({ type: ActionTypes.CONTRACT_ORDER_FAILURE, payload: error });
    }
};

// Fetch Contract Order
export const fetchContractOrder = (token) => async dispatch => {
    let Token = token;
    dispatch({ type: ActionTypes.CONTRACT_ORDER_FETCH });
    try {
        const response = await axios.get(GetOrder + 'contract', { headers: { Authorization: 'Bearer ' + Token } });
        const Data = response.data.data.orders  // To Check if successfully logged in or not 
        console.log(Data);
        dispatch({ type: ActionTypes.CONTRACT_ORDER_POST, payload: Data });
    } catch (error) {
        console.log(error);
        dispatch({ type: ActionTypes.CONTRACT_ORDER_FETCH_FAILURE, payload: error });
    }
};