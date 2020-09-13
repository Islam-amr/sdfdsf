import * as ActionTypes from '../Actions/ActionTypes';

const InitalState = {
    isLoading: false,
    isVerifed: null,
}

const InitalStateResendCode = {
    Sent: false,
    errMsg: null
}


export const Verify = (state = InitalState, action) => {
    switch (action.type) {
        case ActionTypes.VERIFY_REQUEST:
            return { ...state, isLoading: true, isVerifed: false }
        case ActionTypes.VERIFY_SUCCESS:
            return { ...state, isLoading: false, isVerifed: action.payload }
        case ActionTypes.VERIFY_FAILURE:
            return { ...state, isLoading: false, isVerifed: false, errMsg: action.payload }
        default:
            return state;
    }
};


export const ResendCode = (state = InitalStateResendCode, action) => {
    switch (action.type) {
        case ActionTypes.RESEND_CODE_REQUEST:
            return { ...state, Sent: false }
        case ActionTypes.RESEND_CODE_SUCCESS:
            return { ...state, Sent: action.payload, errMsg: null }
        case ActionTypes.RESEND_CODE_FAILURE:
            return { ...state, Sent: false, errMsg: action.payload }
        default:
            return state;
    }
};

