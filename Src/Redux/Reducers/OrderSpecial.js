import * as ActionTypes from '../Actions/ActionTypes';

const InitalState = {
    isLoading: false,
    SuccessfullySent: false,
    errMsg: null,
    Count: 0
}


export const OrderSpecial = (state = InitalState, action) => {
    switch (action.type) {
        case ActionTypes.SPECIAL_ORDER_REQUEST:
            return { ...state, isLoading: true, SuccessfullySent: false }
        case ActionTypes.SPECIAL_ORDER_SUCCESS:
            return { ...state, isLoading: false, SuccessfullySent: true, OrderData: action.payload, Count: state.Count + 1 }
        case ActionTypes.SPECIAL_ORDER_FAILURE:
            return { ...state, isLoading: false, SuccessfullySent: false, errMsg: action.payload }
        default:
            return state;
    }
};
