import axios from 'axios';

// Login User
export const loginUser = (values) => {
    const url = '/login/login';          // as we set default baseURL in navigation

    return axios.post(url, values)      // attached baseURL with the URL and values('body' in thise case)
        .then(response => response.data); 
}