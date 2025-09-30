import apiRoutes from "../../../commons/utils/apiRoutes";
import api from "../../../commons/utils/apiInterceptor";

export function logout() {
    return api(apiRoutes.auth.logout);
}