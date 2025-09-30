import apiRoutes from "../../../commons/utils/apiRoutes";
import api from "../../../commons/utils/apiInterceptor";

export function loginAPI(loginInfo) {
    return api({...apiRoutes.auth.login, data: loginInfo});
}

export function registerAPI(registerInfo) {
    return api({...apiRoutes.member.register, data: registerInfo});
}

export function checkMemberIdAPI(memberId) {
    return api(apiRoutes.auth.checkMemberId(memberId));
}