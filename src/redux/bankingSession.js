import * as ActionTypes from './ActionTypes';

export const BankingSession = (state = {
        isAuthenticated: false,
        token: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.USER_LOGIN_SUCCEEDED:
            return {...state, isAuthenticated: true, token: action.payload};

        case ActionTypes.USER_LOGIN_FAILED:
            return {...state, isAuthenticated: false, token: null};

        default:
            return state;
    }
};