import axios from "axios";


const api = axios.create({
    baseURL: import.meta.env.BACKEND_URL,

    withCredentials: true,
    withXSRFToken: true,

    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default api;