import axios from "axios";

// Dynamic host selection based on environment
const isDevelopment = import.meta.env.MODE === 'development';
const host = isDevelopment 
  ? import.meta.env.VITE_BACKEND_URL_DEV
  : import.meta.env.VITE_BACKEND_URL_PROD;


console.log(`Using backend: ${host} (Mode: ${import.meta.env.MODE})`);

const API = axios.create({
    baseURL: host,
});

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

API.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401 && error.response.data.message === "Token expired") {
            console.error(error.response.data.message);
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        if (error.response && error.response.status === 403) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

const signupAPI = `${host}/auth/signup`;
const loginAPI = `${host}/auth/login`;

/* URL Apis */
const addUrlAPI = "/api/url/add";
const getUrlsAPI = "/api/url/get";
const deleteAPI = "/api/url/delete";

const getProfileAPI = "/api/user/get";

export { host, signupAPI, loginAPI, API, getUrlsAPI, addUrlAPI, deleteAPI, getProfileAPI };