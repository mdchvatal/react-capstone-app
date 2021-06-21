import * as ActionTypes from './ActionTypes';

export const TransferData = (state = {
        errorMessage: null,
        status: 'idle'
    }, action) => {
    switch (action.type) {
        case ActionTypes.POST_TRANSFER_SUCCEEDED:
            return {...state, errorMessage: null, status: 'succeeded'};

        case ActionTypes.POST_TRANSFER_FAILED:
            return {...state, errorMessage: action.payload, status: 'failed'};

        case ActionTypes.POST_TRANSFER_LOADING:
            return {...state,errorMessage: null, status: 'loading'};
    
        default:
            return state;
    }
};