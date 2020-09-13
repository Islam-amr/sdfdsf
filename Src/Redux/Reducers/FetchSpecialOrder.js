import * as ActionTypes from '../Actions/ActionTypes';

const InitalState = {
    isLoading: false,
    OrderData: [],
    errMsg: null,
}


export const FetchSpecialOrder = (state = InitalState, action) => {
    switch (action.type) {
        case ActionTypes.SPECIAL_ORDER_FETCH:
            return { ...state, isLoading: true, OrderData: [] }
        case ActionTypes.SPECIAL_ORDER_POST:
            return { ...state, isLoading: false, OrderData: action.payload }
        case ActionTypes.SPECIAL_ORDER_FETCH_FAILURE:
            return { ...state, isLoading: false, errMsg: action.payload }
        default:
            return state;
    }
};
