import * as ActionTypes from './ActionTypes';

export const BankingSession = (state = {
        isStarting: false,
        isAuthenticated: false,
        token: null,
        errorMessage: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.USER_LOGIN_SUCCEEDED:
            if (action.payload != null) {
                return {...state, isStarting: false, isAuthenticated: true, username: action.payload.username, role: action.payload.role, token: action.payload.jwt, errorMessage: null};
            } else {
                return {...state, isStarting: true, isAuthenticated: false, username: null, role: null, token: null, errorMessage: 'Unknown error'};
            }

        case ActionTypes.USER_LOGIN_FAILED:
            return {...state, isStarting: true, isAuthenticated: false, username: null, role: null, token: null, errorMessage: action.payload};

        case ActionTypes.USER_LOGOUT:
            return {...state, isStarting: false, isAuthenticated: false, username: null, role: null, token: null, errorMessage: null};
    
        default:
            return state;
    }
};