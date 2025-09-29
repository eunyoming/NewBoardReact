import apiRoutes from "../../../commons/utils/apiRoutes";
import axios from "axios";

export function login(loginInfo) {
    const {url, method} = apiRoutes.auth.login;
    return axios({url, method, data: loginInfo});
}

export function register(registerInfo) {
    const {url, method} = apiRoutes.member.register;
    return axios({url, method, data: registerInfo});
}

export function checkMemberId(memberId) {
    const {url, method} = apiRoutes.auth.checkMemberId(memberId);
    return axios({url, method});
}