import {axiosService} from "./axios.sevice";
import {urls} from "../constants";

const postsService ={
    getAll:()=> axiosService.get(urls.posts),
    getByUserId: (id) => axiosService.get(`${urls.users}/${id}/posts`)
}

export {postsService};