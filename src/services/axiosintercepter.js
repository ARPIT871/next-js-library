import axios from 'axios';

// instance
const api = axios.create({
  baseURL: process.env.BACKENED_URL,
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// intercepter
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {

      console.error('Response Error:', error.response.status, error.response.data);
      
      if (error.response.status === 401) {
       
      }
    } else if (error.request) {
      console.error('Request Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }


    return Promise.reject(error);
  }
);

export default api;