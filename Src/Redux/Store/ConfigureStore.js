import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Language } from '../Reducers/Language';
import { Login } from '../Reducers/Login';
import { Register } from '../Reducers/Register';
import { Update } from '../Reducers/UpdateProfile';
import { Verify, ResendCode } from '../Reducers/Verify';
import { OrderConsult } from '../Reducers/OrderConsult';
import { OrderSpecial } from '../Reducers/OrderSpecial';
import { OrderContract } from '../Reducers/OrderContract';
import { FetchConsultOrder } from '../Reducers/FetchConsultOrder';
import { FetchSpecialOrder } from '../Reducers/FetchSpecialOrder';
import { FetchContractOrder } from '../Reducers/FetchContractOrder';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Language,
            Login,
            Register,
            Update,
            Verify,
            ResendCode,
            OrderConsult,
            OrderSpecial,
            OrderContract,
            FetchConsultOrder,
            FetchSpecialOrder,
            FetchContractOrder
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}