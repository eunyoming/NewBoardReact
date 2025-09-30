import api from "../../../commons/utils/apiFilter";
import apiRoutes from "../../../commons/utils/apiRoutes";

export function logout() {
    return api(apiRoutes.auth.logout);
}