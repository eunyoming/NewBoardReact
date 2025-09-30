import apiRoutes from "../../../commons/utils/apiRoutes";
import api from "../../../commons/utils/apiInterceptor";

export function meAPI() {
    return api(apiRoutes.member.me);
}

export function putAPI(memberId) {
    return api(apiRoutes.member.put(memberId));
}