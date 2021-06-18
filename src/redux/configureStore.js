import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { BankingSession } from './bankingSession';
import { Users } from './users';
import { CDOfferings } from './cdOfferings';
import { AccountHolders } from './accountHolders';
import { AccountHolderData } from './accountHolderDataReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialCredentials, InitialOpenCd, InitialTransfer } from './forms';
import { composeWithDevTools } from 'redux-devtools-extension';
import { TransferData } from './transferReducer';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users: Users,
            cdOfferings: CDOfferings,
            accountHolders: AccountHolders, 
            accountHolderData: AccountHolderData,
            bankingSession: BankingSession,
            transferStatus: TransferData,
            ...createForms({
                credentials: InitialCredentials,
                transfer: InitialTransfer,
                openCD: InitialOpenCd,
            })
        }),
        composeWithDevTools(applyMiddleware(thunk, logger))
    );

    return store;
}