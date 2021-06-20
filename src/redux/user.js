import * as ActionTypes from './ActionTypes';

export const User = (state = {
        actionType: null,
        status: 'idle',
        errorMessage: null,
        model: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.USER_CLEAR:
            return {...state, actionType: null, status: 'idle', errorMessage: null, model: null};

        case ActionTypes.USER_DELETE_SUCCEEDED:
            return {...state, actionType: 'delete', status: 'succeeded', errorMessage: null, model: action.payload};
    
        case ActionTypes.USER_DELETE_FAILED:
            return {...state, actionType: 'delete', status: 'failed', errorMessage: action.payload, model: null}; 

        default:
            return state;
    }
};