import {axiosService} from "./axios.service";
import {urls} from "../constant";


const usersService = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(`${urls.users}/${id}`)
}

export {
    usersService
}