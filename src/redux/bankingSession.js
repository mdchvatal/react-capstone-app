import * as ActionTypes from './ActionTypes';

export const BankingSession = (state = {
        isStarting: false,
        isAuthenticated: false,
        token: null,
        errorMessage: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.USER_LOGIN_SUCCEEDED:
            return {...state, isStarting: false, isAuthenticated: true, token: action.payload, errorMessage: null};

        case ActionTypes.USER_LOGIN_FAILED:
            return {...state, isStarting: true, isAuthenticated: false, token: null, errorMessage: action.payload};

        case ActionTypes.USER_LOGOUT:
            return {...state, isStarting: false, isAuthenticated: false, token: null, errorMessage: null};
    
        default:
            return state;
    }
};