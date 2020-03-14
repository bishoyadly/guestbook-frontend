import {login, logout} from "../apis/apis";
import {message} from "antd";

const localStorage = window.localStorage;
const authObj = JSON.parse(localStorage.getItem('isAuthenticated'));
const isAuthenticated = authObj && authObj.value;

export const AuthObj = {
    isAuthenticated: isAuthenticated,
    authenticate(email, password, cb) {
        const loginObj = {
            email: email,
            password: password
        };
        login(loginObj)
            .then((response) => {
                const accessToken = response.data.token || '';
                AuthObj.isAuthenticated = true;
                localStorage.setItem('isAuthenticated', JSON.stringify({
                    value: true
                }));
                localStorage.setItem('accessToken', accessToken);
                cb();
            })
            .catch(() => {
                message.error('Invalid Email or Password');
            })

    },
    signout(cb) {
        logout().then(() => {
            AuthObj.isAuthenticated = false;
            localStorage.setItem('isAuthenticated', JSON.stringify({
                value: false
            }));
            localStorage.setItem('accessToken', '');
            cb();
        });
    }
};