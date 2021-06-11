import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const loginUser = (username, password) => (dispatch) => {
    const loginRequest = {
        username: username,
        password: password
    };
    
    return fetch(baseUrl + 'authenticate', {
        method: "POST",
        body: JSON.stringify(loginRequest),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
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

export const loginSucceeded = (jwt) => ({
    type: ActionTypes.USER_LOGIN_SUCCEEDED,
    payload: jwt
});

export const loginFailed = (errorMessage) => ({
    type: ActionTypes.USER_LOGIN_FAILED,
    payload: errorMessage
});

export const logoutUser = () => ({
    type: ActionTypes.USER_LOGOUT
});
