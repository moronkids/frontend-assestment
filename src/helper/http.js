import axios from 'axios';

export const url = 'https://609359c1-c6e6-40da-9614-0349cabfe75f.mock.pstmn.io';
// export const url = 'https://eed6e6df-5955-4fdc-905e-aa3a1540eb69.mock.pstmn.io';

const TOKEN = localStorage.getItem('token');
export const http = axios.create({
    timeout: 60000,
    withCredentials: false,
    headers: {
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6IlJ1ZGkgR3VtZWxhciIsInJvbGUiOiJjdXN0b21lciIsInNpZCI6IldVaU9pSlNkV1JwSUVkMWJXVnNZWElpTENKeVpXWnlaWE5vWCIsImV4cCI6MTQ3Njg5MTA5MiwiaWF0IjoxNDc1ODc0NDU3fQ.LhwN8Kk0XeuUK4x_916WWJF9MG1Fg49-ITabzOgFAfo'
        // "Content-Type": "application/json",
        // 'Accept': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    },
});

http.interceptors.request.use(
    async (request) => {
        const token = TOKEN;
        if (token !== null) request.headers.Authorization = `token ${token}`;
        return await request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    async (response) => {
        return await response;
    },
    (error) => {
        if (error.response) {
            const { data } = error.response;
            if (error.response.status === 401) {

                if (data.name === 'NotAuthenticated' && data.data && data.data.name === 'TokenExpiredError') {
                    return Promise.reject({
                        message: 'Token expired. Please try login again.',
                    });
                } else {
                    return Promise.reject({
                        message: 'Login failed. Please check your email and password!',
                    });
                }
            } else {
                const message = data.message || error.message;
                return Promise.reject({ message, raw: data });
            }
        } else if (error.request) {
            return Promise.reject({
                message: 'There is problem connecting to server. Please check your connection!',
            });
        } else {
            return Promise.reject({ message: error.message });
        }
    }
);

export default http;