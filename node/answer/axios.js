import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
let { Authorization, Cookie } = process.env;
axios.defaults.headers = {
    Authorization,
    Cookie,
    "Content-Type": "application/x-www-form-urlencoded",
    Pragma: "no-cache",
    "X-Requested-With": "XMLHttpRequest",
};
axios.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export default axios;
