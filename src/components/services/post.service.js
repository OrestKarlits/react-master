// import {axiosInstance} from "./axios.service";
import {info} from "../configure/urls";

export const PostService = {
    // getByUserId:(id)=>axiosInstance.get(`${info.posts}?userId=${id}`).then(value => value.data)
    getByUserId:(id)=>fetch(`https://jsonplaceholder.typicode.com${info.posts}?userId=${id}`).then(value => value.json())
}