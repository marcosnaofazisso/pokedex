import axios from 'axios';

const api = axios.create({
    baseURL:'https://pokedex-requests.onrender.com'
});

export default api;