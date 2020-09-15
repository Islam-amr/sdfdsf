import * as ActionTypes from '../Actions/ActionTypes';

const InitalState = {
    isLoading: false,
    isUpdated: null,
    UserData: null,
    errMsg: null,
}


export const Update = (state = InitalState, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_REQUEST:
            return { ...state, isLoading: true, isUpdated: null };
        case ActionTypes.UPDATE_SUCCESS:
            return { ...state, isLoading: false, isUpdated: action.payload.UpdateState, errMsg:action.payload.UpdateError , UserData: action.payload.UserData };
        case ActionTypes.UPDATE_FAILURE:
            return { ...state, isLoading: false, isUpdated: false, errMsg: action.payload };
        default:
            return state;
    }
};
