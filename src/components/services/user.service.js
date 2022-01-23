import {axiosInstance} from "./axios.service";

import {info} from "../configure/urls";

export const UserService = {
    getAll:() =>axiosInstance.get(info.users).then(value => value.data)
}