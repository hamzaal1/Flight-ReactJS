import axios from 'axios';

const axios_instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export default axios_instance;