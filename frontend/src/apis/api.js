import axios from "axios";

const host = "https://linkify-backend-two.vercel.app";
// const host = "http://localhost:4000";

const API = axios.create({
    baseURL: host
})

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

API.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.status === 401 && error.response.data.message === "Token expired") {
            console.log(error.response.message);

            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        if (error.response && error.response.status === 403) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
)

const signupAPI = `${host}/auth/signup`;
const loginAPI = `${host}/auth/login`;

/* URL Apis */
const addUrlAPI = "/api/url/add";
const getUrlsAPI = "/api/url/get";
const deleteAPI = "/api/url/delete"

const getProfileAPI = "/api/user/get";

export { host, signupAPI, loginAPI, API, getUrlsAPI, addUrlAPI, deleteAPI, getProfileAPI };