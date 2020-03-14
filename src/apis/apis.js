import axios from 'axios';

export function getAxiosInstance() {
    const accessToken = localStorage.getItem('accessToken');
    return axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
    });
}

export function login(loginObj) {
    return getAxiosInstance().post(`${process.env.REACT_APP_BACKEND_URL}/login`, loginObj);
}

export function logout() {
    return getAxiosInstance().post(`${process.env.REACT_APP_BACKEND_URL}/logout`);
}

export function signUp(userObj) {
    return getAxiosInstance().post(`${process.env.REACT_APP_BACKEND_URL}/users`, userObj);
}

export function getMessages() {
    return getAxiosInstance().get(`${process.env.REACT_APP_BACKEND_URL}/messages`);
}

export function addMessage(messageText) {
    return getAxiosInstance()
        .post(`${process.env.REACT_APP_BACKEND_URL}/messages/`, {
            messageText
        });
}

export function updateMessage(messageObj) {
    return getAxiosInstance()
        .put(`${process.env.REACT_APP_BACKEND_URL}/messages`, messageObj);
}

export function deleteMessage(messageId) {
    return getAxiosInstance()
        .delete(`${process.env.REACT_APP_BACKEND_URL}/messages/${messageId}`);
}

