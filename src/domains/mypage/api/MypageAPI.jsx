import apiRoutes from "../../../commons/utils/apiRoutes";
import axios from "axios";

export function me() {
    const {url, method} = apiRoutes.member.me;
    return axios({url, method});
}

export function put(memberId) {
    const {url, method} = apiRoutes.member.put(memberId);
    return axios({url, method, data: memberId});
}