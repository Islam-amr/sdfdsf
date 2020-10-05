import * as ActionTypes from '../Actions/ActionTypes';
import { NativeModules } from 'react-native'

export const Rest = () => dispatch => {
    NativeModules.DevSettings.reload();
}

export const changeLanguageEN = () => dispatch => {
    dispatch({ type: ActionTypes.CHANGE_LANGUAGE_EN })
};

export const changeLanguageAR = () => dispatch => {
    dispatch({ type: ActionTypes.CHANGE_LANGUAGE_AR })
};