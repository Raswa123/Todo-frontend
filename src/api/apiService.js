import axiosInstance from "./axiosinstance"

const apiService = async (httpMethod, url, reqBody) => {
    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody
    }
try {
        const responce = await axiosInstance(reqConfig);
        return responce
}
catch (error) {
throw error
}
}

export default apiService
