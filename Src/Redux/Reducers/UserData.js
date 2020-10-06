import * as ActionTypes from '../Actions/ActionTypes';

const InitalState = {
    UserData: null,
    Token: null,
}


export const UserData = (state = InitalState, action) => {
    switch (action.type) {
        case ActionTypes.LOG_IN:
            return { ...state, UserData: action.payload.UserData, Token: action.payload.Token };
        case ActionTypes.LOG_OUT:
            return { ...state, UserData: null, Token: null };
        default:
            return state;
    }
};
