import apiRoutes from "../../../commons/utils/apiRoutes";
import api from "../../../commons/utils/apiFilter";

export function login(loginInfo) {
    const {url, method} = apiRoutes.auth.login;
    return api({url, method, data: loginInfo});
}

export function register(registerInfo) {
    const {url, method} = apiRoutes.member.register;
    return api({url, method, data: registerInfo});
}

export function checkMemberId(memberId) {
    const {url, method} = apiRoutes.auth.checkMemberId(memberId);
    return api({url, method});
}