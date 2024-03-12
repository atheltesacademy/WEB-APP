// api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

const apiCall = async (endpoint, method = 'GET', data = null) => {
    const url = `${BASE_URL}/${endpoint}`;
    console.log("url", url)

    const config = {
        method,
        url,
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
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
