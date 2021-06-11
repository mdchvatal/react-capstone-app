import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { BankingSession } from './bankingSession';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialCredentials } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            bankingSession: BankingSession,
            ...createForms({
                credentials: InitialCredentials
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}