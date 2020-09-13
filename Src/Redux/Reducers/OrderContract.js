import * as ActionTypes from '../Actions/ActionTypes';

const InitalState = {
    isLoading: false,
    SuccessfullySent: false,
    errMsg: null,
}


export const OrderContract = (state = InitalState, action) => {
    switch (action.type) {
        case ActionTypes.CONTRACT_ORDER_REQUEST:
            return { ...state, isLoading: true, SuccessfullySent: false }
        case ActionTypes.CONTRACT_ORDER_SUCCESS:
            return { ...state, isLoading: false, SuccessfullySent: true, OrderData: action.payload }
        case ActionTypes.CONTRACT_ORDER_FAILURE:
            return { ...state, isLoading: false, SuccessfullySent: false, errMsg: action.payload }
        default:
            return state;
    }
};
