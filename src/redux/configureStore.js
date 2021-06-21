import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { BankingSession } from './bankingSession';
import { Users } from './users';
import { User } from './user';
import { CDOfferings } from './cdOfferings';
import { AccountHolders } from './accountHolders';
import { AccountHolderData } from './accountHolderDataReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { TransferData } from './transferReducer';
import { PostCDData } from './postCDReducer';
import { InitialCredentials, DefaultCDOffering, InitialTransfer, InitialOpenCd } from './forms';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CDOffering } from './cdOffering';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users: Users,
            user: User,
            cdOfferings: CDOfferings,
            cdOffering: CDOffering,
            accountHolders: AccountHolders, 
            accountHolderData: AccountHolderData,
            bankingSession: BankingSession,
            transferStatus: TransferData,
            postCDData: PostCDData,
            ...createForms({
                credentials: InitialCredentials,
                currentCDOffering: DefaultCDOffering,
                transfer: InitialTransfer,
                openCD: InitialOpenCd,
            })
        }),
        composeWithDevTools(applyMiddleware(thunk, logger))
    );

    return store;
}