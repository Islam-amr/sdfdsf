import * as ActionTypes from '../Actions/ActionTypes';

export const changeLanguage = (lang) => dispatch => {
    dispatch({ type: ActionTypes.CHANGE_LANGUAGE , payload :lang  });
};