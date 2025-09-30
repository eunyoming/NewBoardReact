import apiRoutes from "../../../commons/utils/apiRoutes";
import axios from "axios";

export function loginAPI(loginInfo) {
    return axios({...apiRoutes.auth.login, data: loginInfo});
}

export function registerAPI(registerInfo) {
    return axios({...apiRoutes.member.register, data: registerInfo});
}

export function checkMemberIdAPI(memberId) {
    return axios(apiRoutes.auth.checkMemberId(memberId));
}