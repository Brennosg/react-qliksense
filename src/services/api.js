import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4848'
});

export default api;