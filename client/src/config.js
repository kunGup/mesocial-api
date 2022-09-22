import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://mesocialapp.herokuapp.com/api/",
});