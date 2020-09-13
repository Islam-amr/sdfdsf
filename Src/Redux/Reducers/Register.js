import * as ActionTypes from '../Actions/ActionTypes';

const InitalState = {
    isLoading: false,
    isRegisterd: null,
    errMsg: null,
}


export const Register = (state = InitalState, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_REQUEST:
            return { ...state, isLoading: true, isRegisterd: false }
        case ActionTypes.REGISTER_SUCCESS:
            return { ...state, isLoading: false, isRegisterd: action.payload.RegisterState, RegisterData: action.payload.RegisterData }
        case ActionTypes.REGISTER_FAILURE:
            return { ...state, isLoading: false, isRegisterd: false, errMsg: action.payload }
        default:
            return state;
    }
};
