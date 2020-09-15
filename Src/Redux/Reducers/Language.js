import * as ActionTypes from '../Actions/ActionTypes'

const initialState = {
    RTL: false
}

export const Language = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.CHANGE_LANGUAGE:
            return { ...state, RTL: false }
        default:
            return state;
    }
};

