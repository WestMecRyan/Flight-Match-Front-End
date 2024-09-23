import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const api = axios.create({
    baseURL: API_URL
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