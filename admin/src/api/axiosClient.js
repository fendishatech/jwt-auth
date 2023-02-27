import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://localhost:3333/api`,
  withCredentials: true,
  //   baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

export default axiosClient;
