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

export const fetchUsers = (bankingSession) => (dispatch) => {
    dispatch(usersLoading);

    if (bankingSession && bankingSession.token) {
        console.log('Loading Users...');    
        return fetch(baseUrl + 'users', {
            headers: {
                "Authorization": `Bearer ${bankingSession.token}`,
                "Content-Type": "application/json"
            },
            credentials: 'same-origin'
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error ' + response.status + '. Unable to get users.')
                error.response = response;
                throw error;
            }
        },
        error => {
                throw error;
        })
        .then(response => response.json())
        .then(response => dispatch(usersSucceeded(response)))
        .catch(error => dispatch(usersFailed(error.message)));
    } else {
        usersFailed('Please sign in first.');
    }
};

export const usersLoading = () => ({
    type: ActionTypes.USERS_LOADING
});

export const usersSucceeded = (data) => ({
    type: ActionTypes.USERS_GET_SUCCEEDED,
    payload: data
});

export const usersFailed = (errorMessage) => ({
    type: ActionTypes.USERS_GET_FAILED,
    payload: errorMessage
});

export const fetchCDOfferings = (bankingSession) => (dispatch) => {
    dispatch(cdOfferingsLoading);

    if (bankingSession && bankingSession.token) {
        console.log('Loading CDOfferings...');    
        return fetch(baseUrl + 'cd-offerings', {
            headers: {
                "Authorization": `Bearer ${bankingSession.token}`,
                "Content-Type": "application/json"
            },
            credentials: 'same-origin'
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error ' + response.status + '. Unable to get CD Offerings.')
                error.response = response;
                throw error;
            }
        },
        error => {
                throw error;
        })
        .then(response => response.json())
        .then(response => dispatch(cdOfferingsSucceeded(response)))
        .catch(error => dispatch(cdOfferingsFailed(error.message)));
    } else {
        cdOfferingsFailed('Please sign in first.');
    }
};

export const cdOfferingsLoading = () => ({
    type: ActionTypes.CDOFFERINGS_LOADING
});

export const cdOfferingsSucceeded = (data) => ({
    type: ActionTypes.CDOFFERINGS_GET_SUCCEEDED,
    payload: data
});

export const cdOfferingsFailed = (errorMessage) => ({
    type: ActionTypes.CDOFFERINGS_GET_FAILED,
    payload: errorMessage
});

export const fetchAccountHolders = (bankingSession) => (dispatch) => {
    dispatch(accountHoldersLoading);

    if (bankingSession && bankingSession.token) {
        console.log('Loading AccountHolders...');    
        return fetch(baseUrl + 'account-holders', {
            headers: {
                "Authorization": `Bearer ${bankingSession.token}`,
                "Content-Type": "application/json"
            },
            credentials: 'same-origin'
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error ' + response.status + '. Unable to get CD Offerings.')
                error.response = response;
                throw error;
            }
        },
        error => {
                throw error;
        })
        .then(response => response.json())
        .then(response => dispatch(accountHoldersSucceeded(response)))
        .catch(error => dispatch(accountHoldersFailed(error.message)));
    } else {
        accountHoldersFailed('Please sign in first.');
    }
};

export const accountHoldersLoading = () => ({
    type: ActionTypes.ACCOUNTHOLDERS_LOADING
});

export const accountHoldersSucceeded = (data) => ({
    type: ActionTypes.ACCOUNTHOLDERS_GET_SUCCEEDED,
    payload: data
});

export const accountHoldersFailed = (errorMessage) => ({
    type: ActionTypes.ACCOUNTHOLDERS_GET_FAILED,
    payload: errorMessage
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
