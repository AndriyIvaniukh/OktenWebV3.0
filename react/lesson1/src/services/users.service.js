import {axiosService} from "./axios.sevice";
import {urls} from "../constants";

const usersService = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(urls.users + '/' + id)
};

export {usersService};