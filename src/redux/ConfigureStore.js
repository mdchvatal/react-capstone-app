import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { BankingSession } from './bankingSession';
import { Users } from './users';
import { AccountHolderData } from './accountHolderDataReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialCredentials } from './forms';
import { composeWithDevTools } from 'redux-devtools-extension';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users: Users,
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