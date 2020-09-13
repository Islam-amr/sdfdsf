import * as ActionTypes from '../Actions/ActionTypes';
import { AddOrder } from '../API/AuthBaseUrl';
import { GetOrder } from '../API/AuthBaseUrl';

import axios from "axios"

// Post Consult Order
export const postConsultOrder = (token, order_type, has_files, amount, execution_time, details, images) => async dispatch => {
    let Token = token;
    dispatch({ type: ActionTypes.CONSULT_ORDER_REQUEST });
    try {
        const response = await axios.post(AddOrder, {
            order_type: order_type,
            has_files: has_files,
            amount: amount,
            execution_time: execution_time,
            details: details,
            images: images
        }, { headers: { Authorization: 'Bearer ' + Token } });
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
export const postSpecialOrder = (token, order_type, has_files, amount, execution_time, details, images) => async dispatch => {
    let Token = token;
    dispatch({ type: ActionTypes.SPECIAL_ORDER_REQUEST });
    try {
        const response = await axios.post(AddOrder, {
            order_type: order_type,
            has_files: has_files,
            amount: amount,
            execution_time: execution_time,
            details: details,
            images: images
        }, { headers: { Authorization: 'Bearer ' + Token } });
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
export const postContractOrder = (
    token,
    order_type,
    has_files,
    amount,
    execution_time,
    details,
    contract_time,
    party1,
    party2,
    images,
    commitments,
    special_terms,
    partial_terms,
    other_terms,
    termination_of_contract,
    contract_of_law
) => async dispatch => {
    let Token = token;
    dispatch({ type: ActionTypes.CONTRACT_ORDER_REQUEST });
    try {
        const response = await axios.post(AddOrder, {
            order_type: order_type,
            has_files: has_files,
            amount: amount,
            execution_time: execution_time,
            details: details,
            images: images,
            contract_time: contract_time,
            p_one_name: party1[0].p1_name,
            p_one_national: party1[1].p1_nationality,
            p_one_card: party1[2].p1_nationalid,
            p_one_city: party1[3].p1_city,
            p_one_region: party1[4].p1_district,
            p_one_address: party1[5].p1_nationaladdress,
            p_one_email: party1[6].p1_email,
            p_one_phone: party1[7].p1_phone,
            p_two_name: party2[0].p2_name,
            p_two_national: party2[1].p2_nationality,
            p_two_card: party2[2].p2_nationalid,
            p_two_city: party2[3].p2_city,
            p_two_region: party2[4].p2_district,
            p_two_address: party2[5].p2_nationaladdress,
            p_two_email: party2[6].p2_email,
            p_two_phone: party2[7].p2_phone,
            commitments: commitments,
            special_terms: special_terms,
            partial_terms: partial_terms,
            other_terms: other_terms,
            termination_of_contract: termination_of_contract,
            contract_of_law: contract_of_law
        }, { headers: { Authorization: 'Bearer ' + Token } });
        const Data = response.data  // To Check if successfully logged in or not 
        console.log(Data);
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