import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { BankingSession } from './bankingSession';
import { AccountHolderData } from './accountHolderDataReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialCredentials } from './forms';
import { composeWithDevTools } from 'redux-devtools-extension';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            accountHolderData: AccountHolderData,
            bankingSession: BankingSession,
            ...createForms({
                credentials: InitialCredentials
            })
        }),
        composeWithDevTools(applyMiddleware(thunk, logger))
    );

    return store;
}