import {axiosService} from "./axios.service";
import {urls} from "../constant";


const postService = {
    getAll: ()=>axiosService.get(urls.posts),
    getById: ()=> axiosService.get(`${urls.posts}/${id}`)
}