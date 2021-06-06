import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const authenticateUser = (username, password) => (dispatch) => {
    const authenticateRequest = {
        authenticateUser: username,
        password: password
    };
    
    return fetch(baseUrl + 'Authenticate', {
        method: "POST",
        body: JSON.stringify(authenticateRequest),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(authenticationSucceeded(response)))
    .catch(error =>  { console.log('user authentication', error.message); alert('Authentication failed\nError: '+error.message); });
};

export const authenticationFailed = (errorMessage) => ({
    type: ActionTypes.USER_AUTHENTICATION_FAILED,
    payload: errorMessage
});

export const authenticationSucceeded = (jwt) => ({
    type: ActionTypes.USER_AUTHENTICATION_SUCCEEDED,
    payload: jwt
});