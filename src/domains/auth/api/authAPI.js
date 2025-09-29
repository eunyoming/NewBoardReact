import apiRoutes from "../../../commons/utils/apiRoutes";
import axios from "axios";

export async function login(loginInfo) {
    const {url, method} = apiRoutes.auth.login;
    return axios.create({url, method, data: loginInfo});
}

export async function register(registerInfo) {
    const {url, method} = apiRoutes.member.register;
    return axios.create({url, method, data: registerInfo});
}

export async function checkMemberId(memberId) {
    const {url, method} = apiRoutes.auth.checkMemberId(memberId);
    return axios.create({url, method});
}