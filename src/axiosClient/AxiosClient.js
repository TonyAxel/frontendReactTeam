import axios from "axios";

const AxiosClient = axios.create({
    baseURL: `${process.env.REACT_APP_BAKEND_URL}/api`
})

AxiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN') ? localStorage.getItem('ACCESS_TOKEN') : sessionStorage.getItem('ACCESS_TOKEN');
    config.headers.setAuthorization(`Bearer ${token}`);
    return config;
})

AxiosClient.interceptors.request.use((response) => {
    return response
}, (error) => {
    const { response } = error;
    if (response.status === 401) {
        localStorage.removeItem('ACCESS_TOKEN')
        sessionStorage.removeItem('ACCESS_TOKEN')
    }

    throw error
})


export default AxiosClient;