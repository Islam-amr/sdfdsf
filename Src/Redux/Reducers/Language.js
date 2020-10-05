import * as ActionTypes from '../Actions/ActionTypes'

const initialState = {
    RTL: true
}

export const Language = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.CHANGE_LANGUAGE_EN:
            return { RTL: true }
        case ActionTypes.CHANGE_LANGUAGE_AR:
            return { RTL: false }
        default:
            return state;
    }
};

