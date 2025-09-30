import api from "../../../commons/utils/apiFilter";
import apiRoutes from "../../../commons/utils/apiRoutes";

export function logout() {
    const {url, method} = apiRoutes.auth.logout;
    return api({url, method});
}