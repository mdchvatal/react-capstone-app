import * as ActionTypes from './ActionTypes';

export const Users = (state = { 
        status: 'idle',
        errorMessage: null,
        model:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.USERS_LOADING:
            return {...state, status: 'loading', errorMessage: null, model: []};

        case ActionTypes.USERS_GET_SUCCEEDED:
            return {...state, status: 'succeeded', errorMessage: null, model: action.payload};
    
        case ActionTypes.USERS_GET_FAILED:
            return {...state, status: 'failed', errorMessage: action.payload, model: null}; 

        default:
            return state;
    }
};