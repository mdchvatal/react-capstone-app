import * as ActionTypes from './ActionTypes';

export const AccountHolderData = (state = {
        accountHolder: null,
        errorMessage: null,
        status: 'idle'
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_AHDATA:
            return {...state, accountHolder: action.payload, errorMessage: null, staus: 'succeeded'};

        case ActionTypes.AHDATA_FAILED:
            return {...state, accountHolder: null, errorMessage: action.payload, status: 'failed'};

        case ActionTypes.AHDATA_LOADING:
            return {...state, accountHolder: null, errorMessage: null, status: 'loading'};
    
        default:
            return state;
    }
};