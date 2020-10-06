import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// Reducers
import { Language } from '../Reducers/Language';
import { Login } from '../Reducers/Login';
import { UserData } from '../Reducers/UserData';
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

    const config = {
        key: 'root',
        storage: AsyncStorage,
        whitelist: ['Language', 'UserData', 'OrderConsult', 'OrderContract', 'OrderContract'],
        debug: true,

    };

    const store = createStore(
        persistCombineReducers(config, {
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
            FetchContractOrder,
            UserData
        }), undefined,
        applyMiddleware(thunk, logger)
    );

    const persistor = persistStore(store);

    return { persistor, store };
}