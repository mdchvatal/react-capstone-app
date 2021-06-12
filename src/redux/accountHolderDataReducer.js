import * as ActionTypes from './ActionTypes';

export const AccountHolderData = (state = {
        accountHolder: null,
        errorMessage: null,
        isLoading: true
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_AHDATA:
            return {...state, accountHolder: action.payload, errorMessage: null, isLoading: false};

        case ActionTypes.AHDATA_FAILED:
            return {...state, accountHolder: null, errorMessage: action.payload, isLoading: false};

        case ActionTypes.AHDATA_LOADING:
            return {...state, accountHolder: null, errorMessage: null, isLoading: true};
    
        default:
            return state;
    }
};