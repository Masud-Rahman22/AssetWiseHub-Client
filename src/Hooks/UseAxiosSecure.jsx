import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://asset-wise-hub-server.vercel.app'
})
const UseAxiosSecure = () => {
    return axiosSecure
};

export default UseAxiosSecure;