import apiRoutes from "../../../commons/utils/apiRoutes";
import axios from "axios";

export function logout() {
    return axios(apiRoutes.auth.logout);
}