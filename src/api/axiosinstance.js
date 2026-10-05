import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://todo-backend-49fj.onrender.com",
    timeout: 5000
});

//response interceptor to handle global/common errors
axiosInstance.interceptors.response.use(
    (response) => {
        console.log('Response received:');
        return response;
    },
    (error) => {
        // Handle error
        if (error.response) {
            const status = error.response.status
            if (status === 401) {
                console.error('Un-Authorized');
            }
            else if (status === 404) {
                console.error('API Not Found');
            }
            else if (status === 500) {
                console.error('Server Error!!');
            }
            else if(error.request) {
                console.error('No response received from the server');
            }
            else {
                console.error('Error:'+ error.message);
            }
            return Promise.reject(error);
        }
    }
)
export default axiosInstance