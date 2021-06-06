import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialCredentials } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            ...createForms({
                login: InitialCredentials
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}