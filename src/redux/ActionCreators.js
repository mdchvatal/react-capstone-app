import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const loginUser = (username, password) => (dispatch) => {
    const loginRequest = {
        username: username,
        password: password,
        role: 'ROLE_USER'
    };
    
    return fetch(baseUrl + 'authenticate', {
        method: "POST",
        body: JSON.stringify(loginRequest),
        headers: {
            "Content-Type": "application/json"
        },
    
       credentials: 'same-origin'
    })

    .then(response => {
        if (response.ok) {
            return response;
        } else {
            let error;
            if (response.status === 403) {
                error = new Error('Incorrect username or password');
            } else {
                error = new Error('Error ' + response.status + ': ' + response.statusText);
            }
            error.response = response;
            throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(loginSucceeded(response)))
    .catch(error => dispatch(loginFailed(error.message)));
};

export const loginSucceeded = (data) => ({
    type: ActionTypes.USER_LOGIN_SUCCEEDED,
    payload: data
});

export const loginFailed = (errorMessage) => ({
    type: ActionTypes.USER_LOGIN_FAILED,
    payload: errorMessage
});

export const logoutUser = () => ({
    type: ActionTypes.USER_LOGOUT
});

export const fetchAccountHolderData = (jwt) => (dispatch) => {
    const headers = {
        "Authorization": `Bearer ${jwt}`,
    }
    console.log(jwt);
    console.log(headers)
    dispatch(accHolderLoading);
    
    return fetch(baseUrl + 'me', {
        method: "GET",
        headers: headers,  
        
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('That\'s a ' + response.status + '. That means there was a problem.')
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(accHolderData => dispatch(addAccoutHolderData(accHolderData)))
        .catch((error) => 
            dispatch(accHolderFailed(error.message)));
};

export const accHolderLoading = () => ({
    type: ActionTypes.AHDATA_LOADING
});

export const accHolderFailed = (errmess) => ({
    type: ActionTypes.AHDATA_FAILED,
    payload: errmess
});

export const addAccoutHolderData = (accHolderData) => ({
    type: ActionTypes.ADD_AHDATA,
    payload: accHolderData
});
