// api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/v1/'

const apiCall = async (endpoint, method = 'GET', data = null) => {
    const url = `${BASE_URL}/${endpoint}`;
    const config = {
        method,
        url,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (data) {
        config.data = data;
    }

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export default apiCall;
