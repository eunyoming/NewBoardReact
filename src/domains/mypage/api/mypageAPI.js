import apiRoutes from "../../../commons/utils/apiRoutes";
import api from "../../../commons/utils/apiInterceptor";

export function meAPI() {
    return api(apiRoutes.member.me);
}

export function putAPI() {
    return api(apiRoutes.member.put);
    // {url: ..., method: ..., data: memberInfo}
}

export function deleteAPI() {
    return api(apiRoutes.member.delete);
}