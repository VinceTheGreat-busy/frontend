import axios from "axios";


const api = axios.create({
    baseURL: "https://backend-1-lwj5.onrender.com/api",

    withCredentials: true,
    withXSRFToken: true,

    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default api;