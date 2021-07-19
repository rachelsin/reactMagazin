import { actions } from "../actions/action";
import jwtDecode from "jwt-decode";

export const userCrud = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SIGNUP') {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(action.payload),
            redirect: 'follow'
        };
        fetch("http://localhost:5000/register", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log('error:', err));
    }
    if (action.type === 'LOGIN') {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(action.payload),
            redirect: 'follow'
        };
        fetch("http://localhost:5000/login", requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem(tokenKey, data.token);
            })
            .catch(err => console.log('error:', err));
    }
    return next(action);
}

const tokenKey = "token";

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}
export function logout() {
    localStorage.removeItem(tokenKey);
}
export function getJwt() {
    return localStorage.getItem(tokenKey);
}


export default {
    getCurrentUser,
    logout,
    getJwt,
};
