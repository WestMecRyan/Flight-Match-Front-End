import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL 
// ||  'https://orange-space-palm-tree-xj99v45pg45cpj6r-3000.app.github.dev';

export const api = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

export const fetchWelcomeMessage = async () => {
    try {
        const response = await api.get('/');
        return response.data.message;
    } catch (error) {
        console.error('error fetching welcome', error);
        throw error;
    }
};