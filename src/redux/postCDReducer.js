import * as ActionTypes from './ActionTypes';

export const PostCDData = (state = {
        errorMessage: null,
        status: 'idle'
    }, action) => {
    switch (action.type) {
        case ActionTypes.POST_CD_SUCCEEDED:
            return {...state, errorMessage: null, status: 'succeeded'};

        case ActionTypes.POST_CD_FAILED:
            return {...state, errorMessage: action.payload, status: 'failed'};

        case ActionTypes.POST_CD_LOADING:
            return {...state,errorMessage: null, status: 'loading'};
    
        default:
            return state;
    }
};