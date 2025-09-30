import axios from "axios";

const BASE_URL = "http://10.5.5.8:80/api";

const api = axios.create();

api.interceptors.request.use(
    (config) => {
        config.baseURL = BASE_URL;
        config.withCredentials = true;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;