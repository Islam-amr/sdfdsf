import * as ActionTypes from '../Actions/ActionTypes';

const InitalState = {
    isLoggingin: false,
    isAuthenticated: null,
    UserData: null,
    Token: null,
    errMsg: null,
}


export const Login = (state = InitalState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return { ...state, isLoggingin: true, isAuthenticated: null };
        case ActionTypes.LOGIN_SUCCESS:
            return { ...state, isLoggingin: false, isAuthenticated: action.payload.loginstate, errMsg: null, UserData: action.payload.UserData, Token: action.payload.Token };
        case ActionTypes.LOGIN_FAILURE:
            return { ...state, isLoggingin: false, isAuthenticated: false, errMsg: action.payload };
        default:
            return state;
    }
};
