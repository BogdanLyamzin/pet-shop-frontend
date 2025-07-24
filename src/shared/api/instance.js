import axios from "axios";

const {VITE_API_URL: baseURL} = import.meta.env;

const instance = axios.create({
    baseURL,
});

export default instance;