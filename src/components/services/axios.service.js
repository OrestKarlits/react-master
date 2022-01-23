import axios from "axios";


import infoUrl from "../configure/urls";

export const axiosInstance = axios.create({
baseURL:infoUrl
});