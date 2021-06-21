import * as ActionTypes from './ActionTypes';

export const CDOffering = (state = {
        actionType: null,
        status: 'idle',
        errorMessage: null,
        model: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.CDOFFERING_CLEAR:
            return {...state, actionType: null, status: 'idle', errorMessage: null, model: null};

        case ActionTypes.CDOFFERING_EDIT_SUCCEEDED:
            return {...state, actionType: 'edit', status: 'succeeded', errorMessage: null, model: action.payload};
    
        case ActionTypes.CDOFFERING_EDIT_FAILED:
            return {...state, actionType: 'edit', status: 'failed', errorMessage: action.payload, model: null}; 

        default:
            return state;
    }
};