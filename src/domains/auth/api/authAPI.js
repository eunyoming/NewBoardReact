import apiRoutes from "../../../commons/utils/apiRoutes";
import api from "../../../commons/utils/apiFilter";

export function login(loginInfo) {
    return api({...apiRoutes.auth.login, data: loginInfo});
}

export function register(registerInfo) {
    return api({...apiRoutes.member.register, data: registerInfo});
}

export function checkMemberId(memberId) {
    return api(apiRoutes.auth.checkMemberId(memberId));
}