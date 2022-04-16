import {axiosService} from "./axios.sevice";
import {urls} from "../constants";


const commentsService ={
    getAll: ()=>axiosService.get(urls.comments)
}

export {commentsService};